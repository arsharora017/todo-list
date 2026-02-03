import { useState } from "react";
import TodoForm from "./TodoForm";
import type { Todo } from "@/types/todo";
import TodoList from "./TodoList";

export default function TodoContainer() {
  const [todos, setTodos] = useState<Todo[]>([]);
  console.log(todos);

  const addTodo = (todo: Todo) => {
    setTodos((prev) => [todo, ...prev]);
  };

  const handleOnChecked = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  };

  const handleOnDelete = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-container space-y-4">
      <TodoForm onAdd={addTodo} />
      <TodoList
        todos={todos}
        handleOnChecked={handleOnChecked}
        handleOnDelete={handleOnDelete}
      />
    </div>
  );
}
