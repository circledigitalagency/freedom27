import { useState } from "react";

interface WhatsAppButtonProps {
	phoneNumber: string;
	message?: string;
}

export default function WhatsAppButton({
	phoneNumber,
	message = "Hello! I'm interested in your services",
}: WhatsAppButtonProps) {
	const [isHovered, setIsHovered] = useState(false);

	const formattedPhone = phoneNumber.replace(/\D/g, "");

	const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(
		message
	)}`;

	return (
		<div
			className="whatsapp-button"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<a
				href={whatsappUrl}
				target="_blank"
				rel="noopener noreferrer"
				className="whatsapp-icon"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="#ffffff"
				>
					<path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
				</svg>
			</a>

			<style>{`
				.whatsapp-button {
					position: fixed;
					bottom: 20px;
					right: 20px;
					z-index: 1000;
					display: flex;
					align-items: center;
				}

				.whatsapp-icon {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 60px;
					height: 60px;
					border-radius: 50%;
					background-color: #25d366;
					box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
					transition: all 0.3s ease;
				}

				.whatsapp-icon:hover {
					transform: scale(1.1);
					box-shadow: 0 6px 14px rgba(0, 0, 0, 0.4);
				}

				.whatsapp-tooltip {
					position: absolute;
					right: 70px;
					background-color: #333;
					color: white;
					padding: 8px 12px;
					border-radius: 4px;
					font-size: 14px;
					white-space: nowrap;
				}

				.whatsapp-tooltip:after {
					content: "";
					position: absolute;
					top: 50%;
					right: -8px;
					transform: translateY(-50%);
					border-width: 8px 0 8px 8px;
					border-style: solid;
					border-color: transparent transparent transparent #333;
				}
			`}</style>
		</div>
	);
}
