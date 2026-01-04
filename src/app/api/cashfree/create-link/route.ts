
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { amount, customer_phone, customer_name, link_purpose, client_id } = body;

        const appId = process.env.CASHFREE_APP_ID;
        const secretKey = process.env.CASHFREE_SECRET_KEY;
        const apiVersion = process.env.CASHFREE_API_VERSION || '2023-08-01';

        if (!appId || !secretKey) {
            return NextResponse.json(
                { message: 'Cashfree credentials not configured' },
                { status: 500 }
            );
        }

        // Clean phone number (remove +91, spaces, dashes)
        const cleanPhone = String(customer_phone).replace(/[^0-9]/g, '').slice(-10);

        // Generate shorter link_id to meet < 50 char limit
        // Format: lnk_[random8]_[time6] = ~18-20 chars
        const linkId = `lnk_${Math.random().toString(36).substring(2, 10)}_${Date.now().toString().slice(-6)}`;

        const payload = {
            customer_details: {
                customer_phone: cleanPhone,
                customer_name: customer_name || 'Valued Client',
                customer_email: body.customer_email || 'client@example.com' // Optional but good to have
            },
            link_notify: {
                send_sms: true,
                send_email: true
            },
            link_id: linkId,
            link_amount: parseFloat(amount),
            link_currency: 'INR',
            link_purpose: link_purpose || 'Service Payment',
            link_meta: {
                return_url: `https://webrivo.vercel.app/clients/${client_id}?status=paid&link_id=${linkId}` // Enforce HTTPS for Prod
            }
        };

        const response = await fetch('https://api.cashfree.com/pg/links', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-client-id': appId,
                'x-client-secret': secretKey,
                'x-api-version': apiVersion
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (!response.ok) {
            console.error("Cashfree API Error:", data);
            const msg = data.message || 'Failed to create payment link';

            if (msg.includes('link_creation is not enabled')) {
                return NextResponse.json(
                    { message: 'Payment Links feature is NOT enabled on your Cashfree account. Please contact Cashfree support or enable it in your dashboard.' },
                    { status: 403 }
                );
            }

            return NextResponse.json(
                { message: msg },
                { status: response.status }
            );
        }

        return NextResponse.json(data);

    } catch (error: any) {
        console.error('Cashfree Error:', error);
        return NextResponse.json(
            { message: error.message || 'Internal Server Error' },
            { status: 500 }
        );
    }
}
