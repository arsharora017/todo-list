import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import type { Todo } from "@/types/todo";
import { v4 as uuidv4 } from "uuid";

type onAddProps = {
  onAdd: (todo: Todo) => void;
};

export default function TodoForm({ onAdd }: onAddProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const id = uuidv4();

  function handleSubmit() {
    if (!title.trim()) return;

    onAdd({
      id,
      title,
      description,
      checked: false,
    });

    // Reset form fields
    setTitle("");
    setDescription("");
  }

  return (
    <Card className="todo-form-card gap-4">
      <CardHeader className="card-header gap-0">
        <CardTitle className="card-title text-xl">Add Todo</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          placeholder="Todo Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        ></Input>
        <Textarea
          placeholder="Todo Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></Textarea>
        <Button onClick={handleSubmit}>Add Todo</Button>
      </CardContent>
    </Card>
  );
}
