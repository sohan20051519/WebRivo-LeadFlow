import { NextRequest, NextResponse } from 'next/server';

// Passcode is stored server-side only - NOT exposed to frontend
const VALID_PASSCODE = '151920';

export async function POST(request: NextRequest) {
    try {
        const { passcode } = await request.json();

        if (passcode === VALID_PASSCODE) {
            return NextResponse.json({ success: true });
        } else {
            return NextResponse.json({ success: false, error: 'Invalid passcode' }, { status: 401 });
        }
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 });
    }
}
