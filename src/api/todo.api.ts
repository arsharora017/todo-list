const API_URL = "http://localhost:8080";

// Get call
export async function getTodos() {
  const res = await fetch(`${API_URL}/todos`);
  if (!res.ok) throw new Error("Failed to fetch todos");
  return await res.json();
}

// POST call
export async function createTodo(data: {
  title: string;
  description?: string;
}) {
  const res = await fetch(`${API_URL}/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to create Todo");
  return await res.json();
}

// PUT call
export async function updateTodo(
  id: number | string,
  data: Partial<{
    title: string;
    description?: string;
    completed: boolean;
  }>,
) {
  const res = await fetch(`${API_URL}/todos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to update todo");
  return await res.json();
}

// DELETE call
export async function deleteTodo(id: number | string) {
  const res = await fetch(`${API_URL}/todos/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete todo");
  return await res.json();
}
