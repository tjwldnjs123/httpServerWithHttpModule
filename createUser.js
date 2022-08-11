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
  const lastUser = users[users.length - 1];
  if (lastUser) {
    users.push({
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
    });
  } else {
    users.push({
      id: 1,
      name: user.name,
      email: user.email,
      password: user.password,
    });
  }

  // console.log(users);
  // 위에 코드랑 비교
  // key ,value같으면 줄이기!!
  // users.push({
  //   id,
  //   name,
  //   email,
  //   password,
  // });

  res.status(201).json({ message: "userCreated" });
};

module.exports = { createUser, users };
