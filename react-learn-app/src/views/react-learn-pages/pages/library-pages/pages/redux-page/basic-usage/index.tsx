import { ScrollArea } from "@mantine/core";
import TodoItem from "./components/todo-item";
import ToDoAddItem from "./components/todo-add-item";
import TodoPriorityFilter from "./components/todo-priority-filter";
import TodoSearchInput from "./components/todo-search-input";
import TodoStatusFilter from "./components/todo-status-filter";
import './style.css'
import { randomId } from "@mantine/hooks";
import { useAppSelector } from "src/store/redux-app-store/hooks";

function ReduxBasicUsage() {
    const todoState = useAppSelector((state) => state.todoForm)

    return (
        <div>
            <div>
                <h2>Todo App</h2>
                <TodoSearchInput />

                <TodoStatusFilter />

                <TodoPriorityFilter />

                <ScrollArea h={300} className="border border-dashed rounded-sm">
					<div className="flex flex-col gap-3 p-2">
						{todoState.todoList.map((todo, i) => {
							return <TodoItem todo={todo} key={randomId()} />
						})}
					</div>
				</ScrollArea>

                <ToDoAddItem />
            </div>
        </div>
    );
}

export default ReduxBasicUsage;