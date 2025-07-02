import { Link } from "@remix-run/react";

export default function Logo() {
	return (
		<Link to="/">
			<div className="h-20 w-48">
				{/* <img
					src="/images/freedom-logo.svg"
					alt="logo"
					className="object-fill"
				/> */}
				<p className="font-semibold text-accent text-3xl">FREEDOM 27</p>
			</div>
		</Link>
	);
}
