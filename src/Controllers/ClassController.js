const { Institution } = require("../Models/InstitutionSchema");

module.exports = {
  async create(req, res) {
    try {
      const { institutionID, name } = req.body;

      if (!institutionID || !name) {
        return res
          .status(400)
          .json({ message: "Faltam informações para criar a turma." });
      }

      const institution = await Institution.findOne({ _id: institutionID });

      const newClass = { name: name };

      institution.classes.push(newClass);

      await institution.save();

      return res.status(200).json(institution);
    } catch (error) {
      return res.status(400).json({ message: "Erro ao tentar criar turma." });
    }
  },

  async delete(req, res) {
    try {
      const { institutionID, classID } = req.body;

      if (!institutionID) {
        return res
          .status(400)
          .json({ message: "Necessário informar o ID para excluir." });
      }

      const institution = await Institution.findOne({ _id: institutionID });

      const classToDelete = institution.classes.filter((classe) => {
        return classe?._id == classID;
      });

      if (classToDelete.length <= 0) {
        return res
          .status(400)
          .json({ message: "Turma não encontrada." + classToDelete });
      }

      const newClasses = institution.classes.filter((classe) => {
        return classe !== classToDelete[0];
      });

      institution.classes = newClasses;

      await institution.save();

      return res.status(200).send(`Turma ${classToDelete[0].name} foi deletada.`);
    } catch (error) {
      return res.status(400).json({ message: "Erro ao tentar excluir turma." });
    }
  },
};
