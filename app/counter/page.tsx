// app/counter/page.tsx
import db from "@/lib/db";

export default function CounterPage() {
  const counter = db.prepare("SELECT count FROM counter LIMIT 1").get() as {
    count: number;
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold">Contador</h1>
      <p className="text-4xl my-4">{counter.count}</p>
      <form action="/api/increment" method="post">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Incrementar
        </button>
      </form>
    </main>
  );
}
