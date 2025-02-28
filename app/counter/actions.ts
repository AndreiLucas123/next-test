"use server";

import db from "@/lib/db";

export async function incrementCounter() {
  db.prepare("UPDATE counter SET count = count + 1").run();
  
  const updatedCounter = db
    .prepare("SELECT count FROM counter LIMIT 1")
    .get() as {
    count: number;
  };

  return updatedCounter.count;
}
