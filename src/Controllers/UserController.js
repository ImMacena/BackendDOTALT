const { User } = require("../Models/UserSchema");

module.exports = {
  async read(req, res) {
    const userList = await User.find();

    return res.status(200).json(userList);
  },

  async create(req, res) {
    try {
      const { name, email, password, userType } = req.body;

      if (!name || !email || !password || !userType) {
        return res
          .status(400)
          .json({ error: "Faltam informações para criar usuário." });
      }

      const userCreated = await User.create({
        name,
        email,
        password,
        userType,
      });

      if (!userCreated) {
        return res
          .status(400)
          .json({ message: "Não foi possível o criar usuário." });
      }

      return res.status(200).send("Usuário cadastrado.");
    } catch (error) {
      return res.status(400).json({ message: "Erro ao tentar criar usuário." });
    }
  },
};
