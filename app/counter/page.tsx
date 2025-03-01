import db from "@/lib/db";
import CounterPage from "./CounterPage";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default function CounterServer() {
  const counter = db.prepare("SELECT count FROM counter LIMIT 1").get() as {
    count: number;
  };

  return (
    <>
      <CounterPage initialCount={counter.count} />
      <Link href="/about">About</Link>
    </>
  );
}
