import MainLayout from "~/components/layout/main";
import Shop from "~/components/pages/shop";

export default function Page() {
	return (
		<MainLayout>
			<Shop showAll containerStyle="space-y-32" />
		</MainLayout>
	);
}
