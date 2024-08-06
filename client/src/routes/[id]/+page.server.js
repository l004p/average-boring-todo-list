import { lists } from "../todos";
import { error } from "@sveltejs/kit";

export function load({ params }) {
	const list = lists.find((list) => list.id === params.id);

	if (!list) throw error(404);
	return {
		list,
	};
}
