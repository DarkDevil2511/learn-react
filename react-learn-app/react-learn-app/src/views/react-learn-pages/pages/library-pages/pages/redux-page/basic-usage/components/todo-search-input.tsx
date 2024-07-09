import { Button, Input } from "@mantine/core";
import { RiSearch2Line } from "@remixicon/react";
import { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "src/store/redux-app-store/hooks";
import { todoInputOnchange } from "src/store/redux-app-store/slices/todo-form-slice";

function TodoSearchInput() {
    const todoState = useAppSelector((state) => state.todoForm)
    const todoDispatch = useAppDispatch()

    const handleSearchInputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        const action = e.target.value
        todoDispatch(todoInputOnchange(action))
    }

    return (
        <div>
            <p className="todo-label">Search</p>
            <div>
                <Input
                    onChange={handleSearchInputOnChange}
                    value={todoState.searchInput}
                    name="search-input"
                    radius="xs"
                    placeholder="Search to do..."
                    className="w-full"
                />
                <Button radius="xs" variant="filled">
                    <RiSearch2Line size={18} />
                </Button>
            </div>
        </div>
    );
}

export default TodoSearchInput;