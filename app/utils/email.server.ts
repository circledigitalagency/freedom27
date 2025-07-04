import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({
	to,
	subject,
	html,
}: {
	to: string;
	subject: string;
	html: string;
}) {
	try {
		await resend.emails.send({
			from: "Freedom27 <payments@freedom27.co.za>",
			to,
			subject,
			html,
		});
	} catch (error) {
		console.error("Failed to send email:", error);
	}
}
