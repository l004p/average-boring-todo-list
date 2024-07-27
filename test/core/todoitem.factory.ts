import { TodoItem } from "../../src/core";

export const todoItemFactory = ({
	id,
	title,
	complete,
	priority,
}: {
	id?: string;
	title?: string;
	complete?: boolean;
	priority?: number;
} = {}): TodoItem => {
	const itemId = id || "fake-ID-123";
	const itemTitle = title || "Todo Title";
	const itemComplete = complete || false;
	const itemPriority = priority || 5;

	const result = TodoItem.create(
		itemId,
		itemTitle,
		itemComplete,
		itemPriority,
	);

	if (!result.ok) fail(result.err);

	return result.val;
};
