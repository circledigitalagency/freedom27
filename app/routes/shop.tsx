import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import MainLayout from "~/components/layout/main";
import ButtonLink from "~/components/link/button-link";
import Shop from "~/components/pages/shop";
import { cn } from "~/lib/utils";

export default function Page() {
	return (
		<MainLayout>
			<div className="flex flex-col space-y-32">
				<Shop showAll containerStyle="space-y-32" />
			</div>
		</MainLayout>
	);
}
