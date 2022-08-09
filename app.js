const http = require("http");
const express = require("express");
const { createUser } = require("./createUser");
const { createPosts } = require("./createPosts");

const app = express();
app.use(express.json());

app.get("/ping", (req, res) => {
  res.json({ message: "/ pong" });
});

app.post("/signup", createUser);
app.post("/posts", createPosts);

const server = http.createServer(app);

server.listen(8000, () => {
  console.log("server is listening on PORT 8000");
});
