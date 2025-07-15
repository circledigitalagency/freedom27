import { Form, useNavigation, useSearchParams } from "@remix-run/react";
import { CheckCircleIcon } from "lucide-react";
import { sendEmail } from "~/utils/email.server";
import { json } from "@remix-run/node";
import Loader from "~/components/animated/loader";

export async function action({ request }: { request: Request }) {
	const formData = await request.formData();
	const email = formData.get("email");
	const reference = formData.get("ref");

	console.log("new action");

	if (typeof email !== "string" || typeof reference !== "string") {
		return json({ success: false, error: "Invalid form data" });
	}

	console.log("email: ", email);
	console.log("reference: ", reference);

	await sendEmail({
		to: email,
		subject: "Your Payment Confirmation",
		html: `
      <p>Hi there,</p>
      <p>Thank you for your payment of R350.00</p>
      <p>Your payment reference is <strong>${reference}</strong>.</p>
      <p>Regards,<br/>Freedom 27</p>
    `,
	});

	await sendEmail({
		to: "payments@freedom27.co.za",
		subject: "📘 Book Purchase Notification",
		html: `
      <p>A new payment has been received.</p>
      <p><strong>Customer Email:</strong> ${email}</p>
      <p><strong>Amount:</strong> R350.00</p>
      <p><strong>Reference:</strong> ${reference}</p>
      <hr />
      <p>Please follow up with the customer to deliver the book.</p>
    `,
	});

	return json({ success: true });
}

export default function ThankYou() {
	const navigation = useNavigation();
	const [searchParams] = useSearchParams();
	const email = searchParams.get("email") || "";
	const reference = searchParams.get("ref") || "";

	return (
		<div className="w-full h-screen flex justify-center items-center">
			<div className="text-center p-8 space-y-5 border border-primary">
				<div className="w-full flex justify-center">
					<CheckCircleIcon className="text-primary h-10 w-10" />
				</div>

				<h1 className="text-2xl font-bold">Thank You 🌿</h1>
				<p>Your payment was successful. We’ll be in touch soon.</p>
				<div className="w-full flex justify-center">
					<Form method="post" className="space-y-8">
						<input type="hidden" name="email" value={email} />
						<input type="hidden" name="ref" value={reference} />
						<button type="submit">
							{navigation.state === "submitting" ? <Loader /> : "Back to Home"}
						</button>
					</Form>
					{/* <ButtonLink to="/" title="Back to Home" linkStyle="border-primary" /> */}
				</div>
			</div>
		</div>
	);
}
