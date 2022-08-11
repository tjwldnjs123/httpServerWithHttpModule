const http = require("http");
const express = require("express");
const { createUser } = require("./createUser");
const {
  createPosts,
  lookupPosts,
  posting_modify,
  posting_delete,
} = require("./posts");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/ping", (req, res) => {
  res.json({ message: "/ pong" });
});

app.post("/signup", createUser);
app.post("/posts", createPosts);
app.get("/posts/lookup", lookupPosts);
//put은 전체적으로 수정할때 patch는 부분수정
app.patch("/posts/:id", posting_modify);
app.delete("/posts/:id", posting_delete);

const server = http.createServer(app);

server.listen(8000, () => {
  console.log("server is listening on PORT 8000");
});
