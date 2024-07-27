import { Ok, Err, Result } from "ts-results";

export class TodoItem {
	public readonly id: string;
	private title: string;
	private complete: boolean;
	private priority: number;

	protected constructor(
		id: string,
		title: string,
		complete: boolean,
		priority: number,
	) {
		this.id = id;
		this.title = title;
		this.complete = complete;
		this.priority = priority;
	}

	public updateTitle(title: string): Result<string, Error> {
		if (title === undefined || title === "") {
			return Err(new Error("Title cannot be undefined"));
		}
		this.title = title;
		return Ok(this.title);
	}

	public equalsById(another: TodoItem): boolean {
		return this.id === another.id ? true : false;
	}

	public compareTo(another: TodoItem): number {
		//1 is higher priority
		if (this.priority < another.priority) {
			return 1;
		}
		if (this.priority > another.priority) {
			return -1;
		}
		return 0;
	}

	public toggleComplete(): boolean {
		return this.complete ? false : true;
	}

	public static create(
		id: string,
		title: string,
		complete: boolean,
		priority: number,
	): Result<TodoItem, Error> {
		if (title === undefined || title === "") {
			return Err(new Error("Title cannot be undefined"));
		}
		const todoItem = new TodoItem(id, title, complete, priority);
		return Ok(todoItem);
	}
}

export const sortByPriority = (item1: TodoItem, item2: TodoItem): number => {
	return item1.compareTo(item2);
};
