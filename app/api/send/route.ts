import { Resend } from 'resend';
import EmailTemplate from "../../_components/EmailTemplate"


const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { emailToSend, userName, fileName, fileSize, fileType, shortUrl } = await req.json();
  console.log(emailToSend)
  const emailData = {
      from: 'ambox@resend.dev',
      to: [emailToSend],
      subject: 'File Shared with You',
      react: EmailTemplate({ firstName: userName, fileName, fileSize, fileType, shortUrl }),
  };
  try {
    
    const data = await resend.emails.send(emailData);

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}