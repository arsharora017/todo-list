import { createTodo, deleteTodo, getTodos, updateTodo } from "@/api/todo.api";
import type { Todo } from "@/types/todo";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const TODOS_QUERY_KEY = ["todos"];

export function useTodos() {
  const queryClient = useQueryClient();

  // GET todos
  const getTodosQuery = useQuery<Todo[]>({
    queryKey: TODOS_QUERY_KEY,
    queryFn: getTodos,
  });

  // POST todo
  const createTodoMutation = useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: TODOS_QUERY_KEY });
    },
  });

  // PUT todo
  const updateTodoMutation = useMutation({
    mutationFn: ({ id, data }: { id: number | string; data: Partial<Todo> }) =>
      updateTodo(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: TODOS_QUERY_KEY });
    },
  });

  // DELETE todo
  const deleteTodoMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: TODOS_QUERY_KEY });
    },
  });

  return {
    getTodosQuery,
    createTodoMutation,
    updateTodoMutation,
    deleteTodoMutation,
  };
}
