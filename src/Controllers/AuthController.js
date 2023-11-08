const { User } = require("../Models/UserSchema");

module.exports = {
  async login(req, res) {
    const { email, password } = req.body;

    const userData = await User.find({ email: email, password: password });

    if (userData.length > 0) {
      const user = {
        id: userData[0]._id,
        name: userData[0].name,
        email: userData[0].email,
        userType: userData[0].userType,
      };

      return res.status(200).send(user);
    }

    return res.status(400).json({ message: "Usuário não encontrado." });
  },
};
