// lib/db.ts
import Database from "better-sqlite3";

const db = new Database("counter.db");

// Criar a tabela se não existir
db.exec(`
  CREATE TABLE IF NOT EXISTS counter (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    count INTEGER NOT NULL DEFAULT 0
  )
`);

// Inserir um valor inicial se não existir
const row = db.prepare("SELECT COUNT(*) AS count FROM counter").get() as {
  count: number;
};

if (row.count === 0) {
  db.prepare("INSERT INTO counter (count) VALUES (0)").run();
}

export default db;
