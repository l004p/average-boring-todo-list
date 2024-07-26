import { v4 as uuidv4 } from "uuid";
import { Ok, Err, Result } from "ts-results";

export class TodoItem {
	private id: string;
	private title: string;
	private complete: boolean;
	private priority: number;

	protected constructor(title: string, priority: number) {
		this.id = uuidv4();
		this.title = title;
		this.complete = false;
		this.priority = priority;
	}

	public updateTitle(title: string): Result<string, Error> {
		if (title === undefined || title === "") {
			return Err(new Error("Title cannot be undefined"));
		}
		this.title = title;
		return Ok(this.title);
	}

	public toggleComplete(): Result<boolean, Error> {
		this.complete = this.complete ? false : true;
		return Ok(this.complete);
	}

	public static create(
		title: string,
		priority: number,
	): Result<TodoItem, Error> {
		if (title === undefined || title === "") {
			return Err(new Error("Title cannot be undefined"));
		}
		if (priority === undefined || priority === null) {
			return Err(new Error("Priority cannot be undefined"));
		}
		const todoItem = new TodoItem(title, priority);
		return Ok(todoItem);
	}
}
