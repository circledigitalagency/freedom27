import { json } from "@remix-run/node";
import { registerYocoWebhook } from "~/utils/yoco.server";

export async function loader() {
	try {
		const result = await registerYocoWebhook();
		return json({ success: true, result });
	} catch (err: any) {
		return json({ success: false, error: err.message }, { status: 500 });
	}
}
