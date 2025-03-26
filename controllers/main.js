const jwt = require("jsonwebtoken");
const BadRequest = require("../errors/bad-request");

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new BadRequest("Please provide email and password");
  }

  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  res.status(200).json({ msg: "user created", token });
};

const dashboard = async (req, res) => {
  const lucky = Math.floor(Math.random() * 100);
  console.log("User Data:", req.user);
  res.status(200).json({
    msg: `Hello, ${req.user.username}`,
    secret: `Here is your authorized data, your lucky number is ${lucky}`,
  });
};

module.exports = {
  login,
  dashboard,
};
