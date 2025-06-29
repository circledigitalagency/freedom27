import { useLoaderData } from "@remix-run/react";
import { json, redirect } from "@remix-run/node";
import { shopData } from "~/lib/data";
import { useEffect, useState } from "react";
import MainLayout from "~/components/layout/main";
import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedPrice } from "~/components/animated/price";
import Header from "~/components/text/header";

export async function loader({ params }: { params: { id: string } }) {
	const product = shopData.find((p) => p.id === params.id);
	if (!product) throw new Response("Product Not Found", { status: 404 });
	return json(product);
}

export default function Checkout() {
	const product = useLoaderData<typeof loader>();
	const [quantity, setQuantity] = useState<number>(1);

	//for yoco
	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://js.yoco.com/sdk/v1/yoco-sdk-web.js";
		script.async = true;
		document.body.appendChild(script);
	}, []);

	const handlePay = () => {
		//     const yoco = new window.YocoSDK({
		//       publicKey: "your-public-key-here", // Replace with your Yoco public key
		//     });
		//     yoco.showPopup({
		//       amountInCents: product.price * 100,
		//       currency: "ZAR",
		//       name: product.name,
		//       description: product.description,
		//       callback: (result: any) => {
		//         if (result.error) {
		//           alert("Payment failed: " + result.error.message);
		//         } else {
		//           // TODO: Send token to backend
		//           alert("Payment successful! Token: " + result.id);
		//           // redirect to thank you
		//           window.location.href = "/thank-you";
		//         }
		//       },
		//     });
		//   };
	};

	return (
		<MainLayout>
			<div className="sm:px-24 px-5 py-10 space-y-16 bg-gray-50">
				<Header
					title="Checkout"
					subTitile="This is a secure checkout. Your information is protected with SSL
						encryption and trusted payment processing."
				/>
				{/* <div className="flex sm:flex-row flex-col items-center sm:space-x-10 sm:px-48">
					<div className="h-[50vh] w-full">
						<img
							src={product.image}
							alt={product.name}
							className="w-full h-full object-contain"
						/>
					</div>
					<div className="flex flex-col space-y-12 sm:p-4">
						<div className="space-y-5">
							<p className="text-3xl font-medium text-accent">{product.name}</p>
							<p className="text-sm text-gray-400">{product.description}</p>
						</div>
						{product.id === "book" && product.price && (
							<>
								<div className="flex flex-row items-center space-x-4">
									<motion.button
										onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
										whileTap={{ scale: 0.9 }}
									>
										<MinusCircleIcon size={20} />
									</motion.button>

									<p className="flex h-6 max-w-fit p-2 border justify-center items-center border-primary/50">
										{quantity}
									</p>

									<motion.button
										onClick={() => setQuantity((prev) => prev + 1)}
										whileTap={{ scale: 0.9 }}
									>
										<PlusCircleIcon size={20} />
									</motion.button>
								</div>

								<motion.button
									className="border border-primary p-2 w-fit"
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.97 }}
									transition={{ type: "spring", stiffness: 300 }}
								>
									<div className="flex flex-row items-center space-x-2 group-hover:text-white text-primary">
										<p className="text-sm">Buy</p>
										<div className="w-px h-4 bg-primary group-hover:bg-white" />
										<motion.p
											className="text-sm"
											key={quantity}
											initial={{ opacity: 0, y: -4 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.2 }}
										>
											<AnimatedPrice amount={product.price * quantity} />
										</motion.p>
									</div>
								</motion.button>
							</>
						)}
					</div>
				</div> */}
			</div>
		</MainLayout>
	);
}
