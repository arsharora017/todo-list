import type { Todo } from "@/types/todo";
import TodoItem from "./TodoItem";

type Props = {
  todos: Todo[];
  handleOnChecked: (id: number | string, checked: boolean) => void;
  handleOnDelete: (id: number | string) => void;
  handleOnEdit: (todo: Todo) => void;
};

export default function TodoList({
  todos,
  handleOnChecked,
  handleOnDelete,
  handleOnEdit,
}: Props) {
  if (todos.length <= 0) {
    return (
      <p className="text-center text-muted-foreground text-lg mt-2">
        No todos yet
      </p>
    );
  }

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {/* map the todo items here */}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleOnChecked={handleOnChecked}
          handleOnDelete={handleOnDelete}
          handleOnEdit={handleOnEdit}
        />
      ))}
    </div>
  );
}
