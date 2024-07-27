import { Ok, Err, Result } from "ts-results";
import { TodoItem, sortByPriority } from "./todoitem";

export class TodoList {
	private title: string;
	private todoItems: TodoItem[];

	protected constructor(title: string) {
		this.title = title;
		this.todoItems = [];
	}

	public sortItemsByPriority(): void {
		this.todoItems.sort(sortByPriority);
	}

	public renameList(title: string): Result<string, Error> {
		if (title === undefined || title === "") {
			return Err(new Error("Title cannot be undefined"));
		}
		this.title = title;
		return Ok(this.title);
	}

	public static create(title: string): Result<TodoList, Error> {
		if (title === undefined || title === "") {
			return Err(new Error("Title cannot be undefined"));
		}
		const todoList = new TodoList(title);
		return Ok(todoList);
	}
}
