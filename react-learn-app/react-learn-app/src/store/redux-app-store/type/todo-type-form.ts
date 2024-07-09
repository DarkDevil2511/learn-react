export interface ITodoFormState {
	todoInput: string
	searchInput: string
	filterStatus: TODO_STATUS
	filterStatusList: TODO_STATUS[]
	filterPriority: TODO_PRIORITY
	filterPriorityList: TODO_PRIORITY[]
	selectPriority: TODO_PRIORITY
	todoList: ITodoItem[]
}

export interface ITodoItem {
	id: string
	label: string
	priority: {
		value: string
		label: string
	}
	status: boolean
}

export enum TODO_PRIORITY {
	HIGHT = 'HIGHT',
	MEDIUM = 'MEDIUM',
	LOW = 'LOW',
	ALL = 'ALL',
}
export enum TODO_STATUS {
	DONE = 'DONE',
	TO_DO = 'TO_DO',
	ALL = 'ALL',
}
