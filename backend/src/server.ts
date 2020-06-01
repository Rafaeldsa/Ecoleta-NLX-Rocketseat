import express, { json } from "express";

const app = express();

app.get("/users", (req, res) => {
  res.json({ name: "rafael", amor: "rosmânya" });
});

app.listen(3333);
