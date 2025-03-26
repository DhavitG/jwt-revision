const login = (req, res) => {
  res.send("Fake login/registration");
};

const dashboard = async (req, res) => {
  const lucky = Math.floor(Math.random() * 100);
  res.status(200).json({ msg: `The lucky number is ${lucky}` });
};

module.exports = {
  login,
  dashboard,
};
