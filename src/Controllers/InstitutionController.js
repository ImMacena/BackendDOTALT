const { Institution } = require("../Models/InstitutionSchema");

module.exports = {
  async create(req, res) {
    const { name, cnpj, email, password } = req.body;

    if (!name || !cnpj || !email || !password) {
      return res
        .status(400)
        .json({ error: "Faltam informações para criar Instituição." });
    }

    const institutionCreated = await Institution.create({
      name,
      cnpj,
      email,
      password,
    });

    return res.status(200).json(institutionCreated);
  },
};
