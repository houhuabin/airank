import { Resend } from "resend";
import WelcomeTemplate from '@/react-email-starter/emails/WelcomeTemplate'
import { NextResponse } from "next/server";
const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST() {
    const data = await resend.emails.send({
        from: 'customer@avatarstore.app',
        to: 'houhuabin@gmail.com',
        subject: 'test',
        react: WelcomeTemplate({ name: "hhb" })
    });
    return NextResponse.json({ data: data }, { status: 200 });
}