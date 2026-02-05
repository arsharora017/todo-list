import TodoForm from "./TodoForm";
import type { Todo } from "@/types/todo";
import TodoList from "./TodoList";
import { useTodos } from "@/hooks/useTodo";

export default function TodoContainer() {
  const {
    getTodosQuery,
    createTodoMutation,
    updateTodoMutation,
    deleteTodoMutation,
  } = useTodos();

  // TODO: implement shadcn skeleton
  if (getTodosQuery.isLoading) {
    return <p className="text-center">Loading todos....</p>;
  }

  if (getTodosQuery.isError) {
    return <p className="text-center text-destructive">Failed to load todos</p>;
  }

  const todos = getTodosQuery.data ?? [];

  const addTodo = (data: { title: string; description?: string }) => {
    createTodoMutation.mutate(data);
  };

  const handleOnChecked = (id: number | string, checked: boolean) => {
    updateTodoMutation.mutate({
      id,
      data: { completed: !checked },
    });
  };

  const handleOnEdit = (todo: Todo) => {
    updateTodoMutation.mutate({
      id: todo.id,
      data: {
        title: todo.title,
        description: todo.description,
      },
    });
  };

  const handleOnDelete = (id: number | string) => {
    deleteTodoMutation.mutate(id);
  };

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
