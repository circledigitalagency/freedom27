import { CheckCircleIcon } from "lucide-react";
import ButtonLink from "~/components/link/button-link";

export default function ThankYou() {
	return (
		<div className="w-full h-screen flex justify-center items-center">
			<div className="text-center p-8 space-y-5 border border-primary">
				<div className="w-full flex justify-center">
					<CheckCircleIcon className="text-primary h-10 w-10" />
				</div>

				<h1 className="text-2xl font-bold">Thank You 🌿</h1>
				<p>Your payment was successful. We’ll be in touch soon.</p>
				<div className="w-full flex justify-center">
					<ButtonLink to="/" title="Back to Home" linkStyle="border-primary" />
				</div>
			</div>
		</div>
	);
}
