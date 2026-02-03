import TodoContainer from "@/components/todo/TodoContainer";

export default function Home() {
  return (
    <main className="home min-h-screen bg-muted/40 p-4">
      <div className="mx-auto max-w-5xl space-y-6">
        <TodoContainer />
      </div>
    </main>
  );
}
