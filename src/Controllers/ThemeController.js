const { Institution } = require("../Models/InstitutionSchema");

module.exports = {
  async create(req, res) {
    try {
      const { institutionID, classID, name } = req.body;

      if (!institutionID || !name) {
        return res
          .status(400)
          .json({ message: "Faltam informações para criar a matéria." });
      }
      
      const themeToAdd = { name: name };

      const institution = await Institution.findOne({ _id: institutionID });

      const classToChange = institution.classes.filter((classe) => {
        return classe._id == classID;
      });

      classToChange[0].themes?.push(themeToAdd);

      const currentClasses = institution.classes.filter((classe) => {
        return classe._id != classID;
      });

      currentClasses.push(classToChange[0]);

      institution.classes = currentClasses;

      await institution.save();

      return res.status(200).json(institution);
    } catch (error) {
      return res.status(400).json({ message: "Erro ao tentar criar matéria." });
    }
  },
};
