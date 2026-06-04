import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";
import WhatsAppButton from "./components/fab/whatsapp";

export const links: LinksFunction = () => [
	{ rel: "preconnect", href: "https://fonts.googleapis.com" },
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous",
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
	},
	{
		rel: "script",
		href: "https://js.yoco.com/sdk/v1/yoco-sdk-web.js",
	},
	{
		rel: "preconnect",
		href: "https://www.googletagmanager.com",
	},
];

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
				<title>
					Freedom27 – Organisational Transformation & Leadership Consulting
				</title>

				<meta
					name="description"
					content="Freedom 27 is a South African organisational transformation consultancy specialising in leadership development, culture transformation, enterprise supplier development, and B-BBEE aligned programmes."
				/>

				<meta
					name="keywords"
					content="organisational transformation South Africa, leadership development consultancy, enterprise supplier development, B-BBEE consulting, culture transformation, change management, executive coaching"
				/>

				<meta
					property="og:title"
					content="Freedom27 – Organisational Transformation Partner"
				/>

				<meta
					property="og:description"
					content="Helping organisations transform through leadership development, culture change, ESD, and strategic transformation programmes."
				/>
				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-YX2KB4JPSS"
				></script>
				<script
					dangerouslySetInnerHTML={{
						__html: `
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
							gtag('config', 'G-YX2KB4JPSS');
							`,
					}}
				/>
				{/* <script
					async
					src={`https://www.googletagmanager.com/gtag/js?id=GTM-53SNQ447`}
				></script>
				<script
					dangerouslySetInnerHTML={{
						__html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GTM-53SNQ447');
            `,
					}}
				/>

				<script
					dangerouslySetInnerHTML={{
						__html: `
      window.dataLayer = window.dataLayer || [];
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','G-CKD1836J2R');
    `,
					}}
				/> */}

				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Organization",
							name: "Freedom 27",
							url: "https://freedom27.co.za",
							logo: "https://res.cloudinary.com/dfxorvtuc/image/upload/v1779734674/favicon_ajjem2.ico",
							description:
								"Freedom 27 is a South African organisational transformation consultancy specialising in leadership development, culture transformation, enterprise and supplier development, and B-BBEE aligned programmes.",
							founder: {
								"@type": "Person",
								name: "Tshepo Matlou",
								jobTitle:
									"Organisational Transformation Consultant and Leadership Development Strategist",
								image:
									"https://res.cloudinary.com/dg1g6ctku/image/upload/v1751214264/tshepo-matlou_d4hpnq.jpg",
								sameAs: [
									"https://www.linkedin.com/in/tshepomatlou",
									"https://www.linkedin.com/company/freedom27/",
									"https://freedom27.co.za/about-us",
								],
							},
							sameAs: [
								"https://www.instagram.com/freedom27",
								"https://www.facebook.com/freedom27",
							],
						}),
					}}
				/>
			</head>
			<body>
				<WhatsAppButton
					phoneNumber="+689205251"
					message="Hi, I found your website and want to know more about your services."
				/>
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}
