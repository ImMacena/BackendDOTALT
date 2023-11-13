const { Institution } = require("../Models/InstitutionSchema");

module.exports = {
  async create(req, res) {
    try {
      const { institutionID, classID, themeID, question, expirationDate } =
        req.body;

      if (
        !institutionID ||
        !classID ||
        !themeID ||
        !question ||
        !expirationDate
      ) {
        return res
          .status(400)
          .json({ message: "Faltam informações para a atividade." });
      }

      const taskToAdd = { question, expirationDate };

      const institution = await Institution.findOne({ _id: institutionID });

      const classToChange = institution.classes.filter((classe) => {
        return classe._id == classID;
      });

      const themeToChange = classToChange[0].themes.filter((theme) => {
        return theme._id == themeID;
      });

      const currentClasses = institution.classes.filter((classe) => {
        return classe._id != classID;
      });

      const currentThemes = classToChange[0].themes.filter((theme) => {
        return theme._id != themeID;
      });

      themeToChange[0].tasks?.push(taskToAdd);

      currentThemes.push(themeToChange[0]);

      classToChange[0].themes = currentThemes;

      currentClasses.push(classToChange[0]);

      institution.classes = currentClasses;

      await institution.save();

      return res.status(200).json(institution);
    } catch (error) {
      return res.status(400).json({ message: "Erro tentar criar atividade." });
    }
  },
};
