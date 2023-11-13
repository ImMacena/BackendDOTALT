const { Institution } = require("../Models/InstitutionSchema");

module.exports = {
  async create(req, res) {
    try {
      const { institutionID, classID, themeID, name } = req.body;
  
      const file = req.file;
  
      if (!institutionID || !classID || !themeID || !name) {
        return res
          .status(400)
          .json({ message: "Faltam informações para adicionar o conteúdo." });
      }
  
      const newContent = {
        name: name,
        src: file.path,
        size: parseInt(file.size),
      };
  
      const institution = await Institution.findOne({ _id: institutionID });
  
      const classToChange = institution.classes.filter((classe) => {
        return classe._id == classID;
      });
  
      const themeToChange = classToChange[0].themes.filter((theme) => {
        return theme._id == themeID;
      });
  
      themeToChange[0].content?.push(newContent);
  
      classToChange.themes = themeToChange[0];
  
      institution.classes = classToChange;
  
      await institution.save();
  
      return res.status(200).json(institution);
    } catch (error) {
      return res.status(400).json({ message: "Erro ao tentar criar conteúdo." });
    }
  },
};
