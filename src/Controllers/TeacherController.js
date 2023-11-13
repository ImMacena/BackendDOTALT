const { Institution } = require("../Models/InstitutionSchema");

module.exports = {
  async create(req, res) {
    try {
      const { userType, userID, institutionID, classID, themeID } = req.body;
  
      if (!userType || !userID || !institutionID || !classID || !themeID) {
        return res
          .status(400)
          .json({
            message: "Faltam informações para adicionar professor à matéria.",
          });
      }
  
      const institution = await Institution.findOne({ _id: institutionID });
  
      const classToChange = institution.classes.filter((classe) => {
        return classe._id == classID;
      });
  
      const themeToChange = classToChange[0].themes.map((theme) => {
        if (theme._id == themeID) theme.teacher = userID;
      });

      classToChange[0].themes = themeToChange[0];

      
    } catch (error) {
      return res.status(400).json({ message: "Erro ao tentar atrelar professor." });
    }
  },
};
