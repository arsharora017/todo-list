import TodoForm from "./TodoForm";
import type { Todo } from "@/types/todo";
import TodoList from "./TodoList";
import { useTodos } from "@/hooks/useTodo";
import { useCallback } from "react";

export default function TodoContainer() {
  const {
    getTodosQuery,
    createTodoMutation,
    updateTodoMutation,
    deleteTodoMutation,
  } = useTodos();

  const todos = getTodosQuery.data ?? [];

  // useCallback - memoize handlers
  // Prevents recreation of handler functions on every render
  const addTodo = useCallback(
    (data: { title: string; description?: string }) => {
      createTodoMutation.mutate(data);
    },
    [createTodoMutation],
  );

  const handleOnChecked = useCallback(
    (id: number | string, checked: boolean) => {
      updateTodoMutation.mutate({
        id,
        data: { completed: !checked },
      });
    },
    [updateTodoMutation],
  );

  const handleOnEdit = useCallback(
    (todo: Todo) => {
      updateTodoMutation.mutate({
        id: todo.id,
        data: {
          title: todo.title,
          description: todo.description,
        },
      });
    },
    [updateTodoMutation],
  );

  const handleOnDelete = useCallback(
    (id: number | string) => {
      deleteTodoMutation.mutate(id);
    },
    [deleteTodoMutation],
  );

  // TODO: implement shadcn skeleton
  if (getTodosQuery.isLoading) {
    return <p className="text-center">Loading todos....</p>;
  }

  if (getTodosQuery.isError) {
    return <p className="text-center text-destructive">Failed to load todos</p>;
  }

  return (
    <div className="todo-container space-y-4">
      <TodoForm onAdd={addTodo} />
      <TodoList
        todos={todos}
        handleOnChecked={handleOnChecked}
        handleOnDelete={handleOnDelete}
        handleOnEdit={handleOnEdit}
      />
    </div>
  );
}
