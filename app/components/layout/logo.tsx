import { Link } from "@remix-run/react";
import { cn } from "~/lib/utils";

export default function Logo({ style }: { style: string }) {
	return (
		<Link to="/">
			<div className={style}>
				<img
					src="https://res.cloudinary.com/dfxorvtuc/image/upload/v1794994470/Business_Profile_Freedom_27_Presentation_dsnnof.png"
					alt="logo"
					className="object-fill"
				/>
			</div>
		</Link>
	);
}
