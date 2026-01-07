import { NextRequest, NextResponse } from 'next/server';

// Passcode is stored server-side only - NOT exposed to frontend
const PASSWORDS: { [key: string]: string } = {
    '151910': 'admin',
    '151920': 'sahana',
    '151930': 'himesh',
    '151940': 'akash'
};

export async function POST(request: NextRequest) {
    try {
        const { passcode } = await request.json();
        const user = PASSWORDS[passcode];

        if (user) {
            return NextResponse.json({ success: true, user });
        } else {
            return NextResponse.json({ success: false, error: 'Invalid passcode' }, { status: 401 });
        }
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 });
    }
}
