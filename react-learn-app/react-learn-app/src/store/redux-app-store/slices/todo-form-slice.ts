import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { todoFormReducer } from '../reducers'
import { ITodoFormState, ITodoItem, TODO_PRIORITY, TODO_STATUS } from '../type/todo-type-form'

const innitialTodoFormState: ITodoFormState = {
	todoInput: '',
	searchInput: '',
	filterStatus: TODO_STATUS.ALL,
	filterStatusList: [TODO_STATUS.ALL, TODO_STATUS.DONE, TODO_STATUS.TO_DO],
	filterPriority: TODO_PRIORITY.ALL,
	filterPriorityList: [TODO_PRIORITY.ALL, TODO_PRIORITY.HIGHT, TODO_PRIORITY.MEDIUM, TODO_PRIORITY.LOW],
	selectPriority: TODO_PRIORITY.MEDIUM,
	todoList: [
		{
			id: '114f16ad-1763-4eb6-87b0-fd4605473d97',
			label: 'Todo 01',
			priority: { value: TODO_PRIORITY.LOW, label: 'Low' },
			status: false,
		},
		{
			id: '2a21fecf-3dab-4cf7-b04e-7e73d8bc5d1f',
			label: 'Todo 02',
			priority: { value: TODO_PRIORITY.HIGHT, label: 'Hight' },
			status: true,
		},
		{
			id: '33ae014d-af6a-45a9-b4af-ae76616622b0',
			label: 'Todo 03',
			priority: { value: TODO_PRIORITY.MEDIUM, label: 'Medium' },
			status: false,
		},
	],
}

const todoFormSlice = createSlice({
	name: 'todo-form-slice',
	initialState: innitialTodoFormState,
	reducers: {
		todoInputOnchange: (state, action: PayloadAction<string>) => todoFormReducer.todoInputOnchange(state, action),
		todoAddInputOnchange: (state, action: PayloadAction<string>) =>
			todoFormReducer.todoAddInputOnchange(state, action),
		todoAddTodo: (state, action: PayloadAction<ITodoItem>) => todoFormReducer.todoAddTodo(state, action),
		todoDeleteTodo: (state, action: PayloadAction<{ id: string }>) => todoFormReducer.todoDeleteTodo(state, action),
		todoMarkItemAsDone: (state, action: PayloadAction<{ id: string }>) =>
			todoFormReducer.todoMarkItemAsDone(state, action),
	},
})

export const { todoInputOnchange, todoAddInputOnchange, todoMarkItemAsDone, todoAddTodo, todoDeleteTodo } =
	todoFormSlice.actions

export default todoFormSlice.reducer
