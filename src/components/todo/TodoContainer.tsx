import { useState } from "react";
import TodoForm from "./TodoForm";
import type { Todo } from "@/types/todo";

export default function TodoContainer() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: Todo) => {
    setTodos((prev) => [todo, ...prev]);
  };

  return (
    <div className="todo-container">
      <TodoForm onAdd={addTodo} />
    </div>
  );
}
