import { TodoItem } from "../../src/core";
import { sortByPriority } from "../../src/core/todoitem";
import { todoItemFactory } from "./todoitem.factory";

describe("TodoItem", () => {
	describe("New TodoItem", () => {
		it("Items with same id are equal", () => {
			const todoItem1 = todoItemFactory({ id: "same-id-1" });
			const todoItem2 = todoItemFactory({ id: "same-id-1" });

			const result = todoItem1.equalsById(todoItem2);

			expect(result).toBe(true);
		}),
			it("Items with different id are not equal", () => {
				const todoItem1 = todoItemFactory({ id: "same-id-1" });
				const todoItem2 = todoItemFactory({ id: "different-id-1" });

				const result = todoItem1.equalsById(todoItem2);

				expect(result).toBe(false);
			}),
			it("Items sort properly", () => {
				const todoItem1 = todoItemFactory({ priority: 1 });
				const todoItem2 = todoItemFactory({ priority: 2 });
				const todoItem3 = todoItemFactory({ priority: 3 });
				const todoItem4 = todoItemFactory({ priority: 4 });
				const todoItem5 = todoItemFactory({ priority: 5 });

				const array = [
					todoItem1,
					todoItem4,
					todoItem3,
					todoItem5,
					todoItem2,
				];
				const sorted = array.sort(sortByPriority);

				expect(sorted).toStrictEqual([
					todoItem5,
					todoItem4,
					todoItem3,
					todoItem2,
					todoItem1,
				]);
			});
	});
});
