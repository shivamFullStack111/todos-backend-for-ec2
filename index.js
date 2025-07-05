// const express = require("express");
// const app = express();
// const cors = require("cors");
// const mysql = require("mysql2");

// // MySQL pool setup
// const pool = mysql.createPool({
//   host: "database-288-instance-1.ccd66c0amfv2.us-east-1.rds.amazonaws.com",
//   user: "admin",
//   password: "shivam123",
//   database: `students`,
//   port: 3306,
//   waitForConnections: true,
//   connectionLimit: 10,
// });

// // Check MySQL connection
// pool.getConnection((err, connection) => {
//   if (err) {
//     console.error("Error connecting to AWS RDS:", err.message);
//   } else {
//     console.log("✅ Connected to AWS RDS");
//     connection.release(); // release connection back to pool
//   }
// });

// app.use(express.json());
// app.use(cors());

// app.get("/", (req, res) => {
//   return res.send({ success: true, message: "Server is running on port 8000" });
// });

// app.listen(8000, () => {
//   console.log("🚀 Server running on http://localhost:8000");
// });

const express = require("express");
const app = express();
const cors = require("cors");
// const mysql = require("mysql2");
// require("dotenv").config();

// console.log(process.env.DB_HOST);
// MySQL pool setup
// const pool = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE,
//   port: process.env.DB_PORT,
//   waitForConnections: true,
//   connectionLimit: 10,
// });

// Test DB connection
// pool.getConnection((err, connection) => {
//   if (err) {
//     console.error("❌ Error connecting to AWS RDS:", err.message);
//   } else {
//     console.log("✅ Connected to AWS RDS");
//     connection.release();
//   }
// });

app.use(express.json());
app.use(cors());

// API: Health check
app.get("/", (req, res) => {
  res.send({ success: true, message: "Server is running on port 8000" });
});

// ✅ API: Get all todos
// app.get("/get-all", (req, res) => {
//   pool.query("SELECT * FROM todos", (err, results) => {
//     if (err) return res.status(500).send(err);
//     res.json(results);
//   });
// });

// // ✅ API: Add new todo
// app.post("/add", (req, res) => {
//   const { text } = req.body;
//   pool.query("INSERT INTO todos (text) VALUES (?)", [text], (err, result) => {
//     if (err) return res.status(500).send(err);
//     const newTodo = { _id: result.insertId, text };
//     res.json(newTodo);
//   });
// });

// // ✅ API: Update todo
// app.put("/update/:id", (req, res) => {
//   const { id } = req.params;
//   const { text } = req.body;
//   pool.query(
//     "UPDATE todos SET text = ? WHERE id = ?",
//     [text, id],
//     (err, result) => {
//       if (err) return res.status(500).send(err);
//       res.json({ _id: id, text });
//     }
//   );
// });

// // ✅ API: Delete todo
// app.delete("/delete/:id", (req, res) => {
//   const { id } = req.params;
//   pool.query("DELETE FROM todos WHERE id = ?", [id], (err, result) => {
//     if (err) return res.status(500).send(err);
//     res.json({ _id: id });
//   });
// });

// Server listen
app.listen(8000, () => {
  console.log("🚀 Server running on http://localhost:8000");
});
