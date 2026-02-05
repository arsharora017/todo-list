import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

type onAddProps = {
  onAdd: (data: { title: string; description?: string }) => void;
  isSubmitting?: boolean;
};

export default function TodoForm({ onAdd, isSubmitting }: onAddProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [required, setRequired] = useState(false);

  function handleSubmit() {
    if (!title.trim()) {
      setRequired(true);
      return;
    }

    onAdd({
      title,
      description,
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
          onChange={(e) => {
            setTitle(e.target.value);
            if (required) setRequired(false);
          }}
          required
          className={
            required ? "border-destructive focus-visible:ring-destructive" : ""
          }
        ></Input>
        <Textarea
          placeholder="Todo Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></Textarea>
        <Button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="cursor-pointer"
        >
          {isSubmitting ? "Adding..." : "Add Todo"}
        </Button>
      </CardContent>
    </Card>
  );
}
