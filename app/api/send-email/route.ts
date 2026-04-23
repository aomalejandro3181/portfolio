import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Ensure this runs on the server only
export const runtime = 'nodejs';

const resend = new Resend(process.env.RESEND_API_KEY);
const emailFrom = process.env.EMAIL_FROM as string;

export async function POST(req: NextRequest) {
  if (!resend) {
    return NextResponse.json(
      { error: 'RESEND_API_KEY is not configured on the server' },
      { status: 500 }
    );
  }

  try {
    const { name, email, subject, message } = await req.json();

    if (!email || !subject || !message) {   
      return NextResponse.json(
        { error: 'Missing required fields: email, subject, message' },
        { status: 400 }
      );
    }

    

    const { data } = await resend.emails.send({
      from: 'My Portfolio <onboarding@resend.dev>',
      to: emailFrom,
      subject,
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    });

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
