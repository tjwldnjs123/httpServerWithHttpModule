const { users } = require("./createUser");
const posts = [
  {
    id: 1,
    title: "간단한 HTTP API 개발 시작!",
    content: "Node.js에 내장되어 있는 http 모듈을 사용해서 HTTP server를 구현.",
    userId: 1,
  },
  {
    id: 2,
    title: "HTTP의 특성",
    content: "Request/Response와 Stateless!!",
    userId: 2,
  },
];
let postID = 3;

// 포스트 추가
const createPosts = (req, res) => {
  const { title, content, userId } = req.body;

  posts.push({ id: postID++, title, content, userId });
  //console.log(posts);

  res.status(201).json({ message: "postCreated" });
};

// 조회
const lookupPosts = (req, res) => {
  let newPosts = posts;
  newPosts = newPosts.map((post) => {
    const user = users.find((user) => post.userId === user.id);
    return {
      postId: post.id,
      postTitle: post.title,
      postContent: post.content,
      userId: post.userId,
      userName: user.name,
    };
  });

  res.status(201).json({ data: newPosts });
};

const posting_modify = (req, res) => {
  const { id, content } = req.body;

  const post = posts.find((post) => post.id === id);
  post.content = content;

  const user = users.find((user) => post.userId === user.id);
  const newPost = {
    postId: post.id,
    postTitle: post.title,
    postContent: post.content,
    userId: post.userId,
    userName: user.name,
  };

  res.json({ data: newPost });
};
module.exports = { createPosts, lookupPosts, posting_modify };
