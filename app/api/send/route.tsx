import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req: Request) {
  const body = await req.json();
  const { email, name, message } = body;
  try {
    const { data, error } = await resend.emails.send({
      from: "mohammad motaghi <onboarding@resend.dev>",
      to: [fromEmail!, email],
      subject: name,
      react: (
        <>
          <p>{name} Thanks for contacting us!</p>
          <p>message :</p>
          <p>{message}</p>
        </>
      ),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
