"use client";

import { useState, useTransition } from "react";
import { incrementCounter } from "./actions";

export default function CounterPage({ initialCount }: { initialCount: number }) {
  const [count, setCount] = useState(initialCount);
  const [isPending, startTransition] = useTransition();

  const handleIncrement = () => {
    startTransition(async () => {
      const newCount = await incrementCounter();
      setCount(newCount);
    });
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Contador</h1>
      <p className="text-4xl my-4">{count}</p>
      <button
        onClick={handleIncrement}
        disabled={isPending}
        className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600 disabled:bg-gray-400"
      >
        {isPending ? "Carregando..." : "Incrementar"}
      </button>
    </main>
  );
}
