import type { Todo } from "@/types/todo";
import { Card, CardContent } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";

type Props = {
  todo: Todo;
  handleOnChecked: (id: string) => void;
  handleOnDelete: (id: string) => void;
};

export default function TodoItem({
  todo,
  handleOnChecked,
  handleOnDelete,
}: Props) {
  return (
    // className={`w-full ${todo.checked ? "opacity-70" : ""}`}
    <Card className={todo.checked ? "opacity-70" : ""}>
      <CardContent className="flex gap-3 items-start">
        <div className="flex pt-1">
          <Checkbox
            checked={todo.checked}
            onCheckedChange={() => handleOnChecked(todo.id)}
          ></Checkbox>
        </div>

        <div className="flex-1 space-y-1">
          <p
            className={`font-medium wrap-break-word ${todo.checked ? "line-through text-muted-foreground" : ""}`}
          >
            {todo.title}
          </p>
          {todo.description && (
            <p className="text-sm text-muted-foreground">{todo.description}</p>
          )}
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleOnDelete(todo.id)}
        >
          <Trash2 className="text-destructive" />
        </Button>
      </CardContent>
    </Card>
  );
}
