import ButtonLink from "~/components/link/button-link";

export default function ThankYou() {
	return (
		<div className="text-center p-8">
			<h1 className="text-2xl font-bold">Thank You 🌿</h1>
			<p>Your payment was successful. We’ll be in touch soon.</p>
			<ButtonLink to="/home" title="Back to Home" linkStyle="border-primary" />
		</div>
	);
}
