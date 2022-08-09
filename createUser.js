const users = [
  {
    id: 1,
    name: "Rebekah Johnson",
    email: "Glover12345@gmail.com",
    password: "123qwe",
  },
  {
    id: 2,
    name: "Fabian Predovic",
    email: "Connell29@gmail.com",
    password: "password",
  },
];

const createUser = (req, res) => {
  const user = req.body.data;
  // 구조분해 할당
  // const {id,name,email,password} = req.body.data
  console.log(user);

  users.push({
    id: user.id,
    name: user.name,
    email: user.email,
    password: user.password,
  });
  // 위에 코드랑 비교
  // key ,value같으면 줄이기!!
  // users.push({
  //   id,
  //   name,
  //   email,
  //   password,
  // });
  console.log("after", users);
  res.json({ message: "USER_CREATED" });
};

module.exports = { createUser };
