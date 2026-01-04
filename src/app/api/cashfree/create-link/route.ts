import { NextResponse } from 'next/server';
import Cashfree from '@/lib/cashfree';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { amount, customer_phone, customer_name, link_purpose, client_id, customer_email } = body;

        // Generate shorter link_id to meet < 50 char limit
        const linkId = `lnk_${Math.random().toString(36).substring(2, 10)}_${Date.now().toString().slice(-6)}`;

        const cleanPhone = String(customer_phone).replace(/[^0-9]/g, '').slice(-10);

        const requestData = {
            link_id: linkId,
            link_amount: parseFloat(amount),
            link_currency: "INR",
            link_purpose: link_purpose || 'Service Payment',
            customer_details: {
                customer_phone: cleanPhone,
                customer_name: customer_name || 'Valued Client',
                customer_email: customer_email || 'client@example.com'
            },
            link_notify: {
                send_sms: true,
                send_email: true
            },
            link_meta: {
                return_url: `https://webrivo.vercel.app/clients/${client_id}?status=paid&link_id=${linkId}`
            }
        };

        const apiVersion = process.env.CASHFREE_API_VERSION || '2023-08-01';
        const appId = process.env.CASHFREE_APP_ID;
        const secretKey = process.env.CASHFREE_SECRET_KEY;


        // Use string "SANDBOX" or "PRODUCTION" directly to avoid undefined enum issues
        // Explicitly set to PRODUCTION as per user confirmation
        const env = 'PRODUCTION';

        // Force set static config
        // @ts-ignore
        Cashfree.XClientId = appId;
        // @ts-ignore
        Cashfree.XClientSecret = secretKey;
        // @ts-ignore
        Cashfree.XEnvironment = env;

        // Instantiate
        // @ts-ignore
        const cf = new Cashfree();

        // Force set instance config (just in case)
        // @ts-ignore
        cf.XClientId = appId;
        // @ts-ignore
        cf.XClientSecret = secretKey;
        // @ts-ignore
        cf.XEnvironment = env;

        // @ts-ignore
        const response = await cf.PGCreateLink(apiVersion, requestData);

        // SDK returns an Axios response object
        const data = response.data;
        return NextResponse.json(data);

    } catch (error: any) {
        console.error("Cashfree SDK Error:", error.response?.data || error.message);

        const errorData = error.response?.data;
        const msg = errorData?.message || error.message || 'Payment Link Creation Failed';

        if (msg.includes('link_creation is not enabled')) {
            return NextResponse.json(
                { message: 'Payment Links feature is NOT enabled on your Cashfree account. Please contact Cashfree support or enable it in your dashboard.' },
                { status: 403 }
            );
        }

        return NextResponse.json(
            { message: msg, details: errorData },
            { status: error.response?.status || 500 }
        );
    }
}
