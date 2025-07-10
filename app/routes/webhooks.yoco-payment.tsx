import { json } from "@remix-run/node";
import { sendEmail } from "~/utils/email.server";

export async function action({ request }: { request: Request }) {
	const body = await request.json();

	console.log("body: ", body);

	if (body.type === "payment.succeeded") {
		const { email, amount, reference } = body.payload;

		if (email) {
			await sendEmail({
				to: email,
				subject: "Your Payment Confirmation",
				html: `
					<p>Hi there,</p>
					<p>Thank you for your payment of R${(amount / 100).toFixed(2)}.</p>
					<p>Your payment reference is <strong>${reference}</strong>.</p>
					<p>Regards,<br/>Freedom 27</p>
				`,
			});
		}

		await sendEmail({
			to: "payments@freedom27.co.za",
			subject: "📘 Book Purchase Notification",
			html: `
				<p>A new payment has been received.</p>
				<p><strong>Customer Email:</strong> ${email || "N/A"}</p>
				<p><strong>Amount:</strong> R${(amount / 100).toFixed(2)}</p>
				<p><strong>Reference:</strong> ${reference}</p>
				<hr />
				<p>Please follow up with the customer to deliver the book.</p>
			`,
		});
	}

	return json({ status: "received" });
}
