import { lists } from "./todos";

export function load() {
	return {
		summaries: lists.map((list) => ({
			id: list.id,
			title: list.title,
		})),
	};
}
