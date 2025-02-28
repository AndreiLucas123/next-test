import db from "@/lib/db";
import CounterPage from "./CounterPage";

export default function CounterServer() {
  const counter = db.prepare("SELECT count FROM counter LIMIT 1").get();
  return <CounterPage initialCount={counter.count} />;
}