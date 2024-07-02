import { ITodoState } from "../types"

export const initialTodoState: ITodoState = {
	inputValue: '',
	todoList: [
		{ name: 'todo 01', status: false },
		{ name: 'todo 02', status: false },
		{ name: 'todo 03', status: false },
	],
}
