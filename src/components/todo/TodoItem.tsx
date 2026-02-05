import type { Todo } from "@/types/todo";
import { Card, CardContent } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

type Props = {
  todo: Todo;
  handleOnChecked: (id: number | string, checked: boolean) => void;
  handleOnDelete: (id: number | string) => void;
  handleOnEdit: (todo: Todo) => void;
};

export default function TodoItem({
  todo,
  handleOnChecked,
  handleOnDelete,
  handleOnEdit,
}: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [required, setRequired] = useState(false);

  const saveHandler = () => {
    if (!title.trim()) {
      setRequired(true);
      return;
    }

    handleOnEdit({
      ...todo,
      title,
      description,
    });
    setIsEditing(false);
  };

  const cancelHandler = () => {
    setTitle(todo.title);
    setDescription(todo.description ?? "");
    setIsEditing(false);
  };

  return (
    <Card className={todo.completed ? "opacity-70" : ""}>
      <CardContent className="flex gap-3 items-start">
        {/* View mode */}
        {!isEditing && (
          <>
            <div className="flex pt-1">
              <Checkbox
                checked={todo.completed}
                onCheckedChange={() => handleOnChecked(todo.id, todo.completed)}
              ></Checkbox>
            </div>

            <div className="flex-1 space-y-1">
              <p
                className={`font-medium wrap-break-word ${todo.completed ? "line-through text-muted-foreground" : ""}`}
              >
                {todo.title}
              </p>
              {todo.description && (
                <p className="text-sm text-muted-foreground">
                  {todo.description}
                </p>
              )}
            </div>
            <div className="flex gap-1">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setIsEditing(true)}
              >
                <Pencil />
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => handleOnDelete(todo.id)}
              >
                <Trash2 className="text-destructive " />
              </Button>
            </div>
          </>
        )}

        {/* Edit mode */}
        {isEditing && (
          <div className="flex flex-col space-y-2 w-full">
            <Input
              value={title}
              placeholder="Todo Title"
              onChange={(e) => {
                setTitle(e.target.value);
                if (required) setRequired(false);
              }}
              className={
                required
                  ? "border-destructive focus-visible:ring-destructive"
                  : ""
              }
            ></Input>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Todo Description"
            ></Textarea>
            <div className="flex justify-end gap-2">
              <Button
                className="cursor-pointer hover:bg-destructive hover:text-muted"
                variant="secondary"
                size="sm"
                onClick={cancelHandler}
              >
                Cancel
              </Button>
              <Button
                className="cursor-pointer hover:bg-chart-2 hover:text-muted"
                variant="secondary"
                size="sm"
                onClick={saveHandler}
              >
                Save
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
