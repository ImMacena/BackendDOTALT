const Backpack = require("../Models/BackpackSchema");

module.exports = {
  async create(req, res) {
    try {
      const { student } = req.body;

      const createdBackpack = await Backpack.create({ student, capacity: 500 });

      res.status(200).json(createdBackpack);
    } catch (error) {
      res.status(400).json({ message: "Erro ao criar mochila." });
    }
  },
};
