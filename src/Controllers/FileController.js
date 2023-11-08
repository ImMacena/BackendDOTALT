const Backpack = require("../Models/BackpackSchema");

module.exports = {
  async create(req, res) {
    try {
      const { name, student } = req.body;

      const file = req.file;

      const bp = await Backpack.findOne({ student: student });

      const newFile = {
        title: name,
        src: file.path,
        size: parseInt(file.size),
      };

      bp.storage.push(newFile);

      await bp.save();

      return res.status(200).json(bp);
    } catch (error) {
      return res.status(400).json({ message: "Erro ao salvar arquivo." });
    }
  },
};
