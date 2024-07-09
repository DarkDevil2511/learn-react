import { Select } from "@mantine/core";
import { useAppSelector } from "../../../../../../../../store/redux-app-store/hooks";

function TodoPriorityFilter() {
  const todoState = useAppSelector((state) => state.todoForm);
  return (
    <div>
      <p className="todo-label">Pick Priority</p>
      <Select
        radius="xs"
        placeholder="Pick Value"
        data={todoState.filterPriorityList}
        checkIconPosition="right"
      />
    </div>
  );
}

export default TodoPriorityFilter;
