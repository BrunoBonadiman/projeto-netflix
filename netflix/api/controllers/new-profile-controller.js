const NewProfile = require('../models/new-profile-model');

exports.create = async (req, res) => {
  const novoPerfil = new NewProfile(req.body);
  const perfil = await novoPerfil.save();
  res.status(201).send({ message: 'Novo perfil criado com sucesso!', perfil });
};

exports.findAll = async (req, res) => {
  const perfis = await NewProfile.find({});
  res.status(200).send(perfis);
};

exports.findById = async (req, res) => {
  const perfil = await NewProfile.findById(req.params.id);
  res.status(200).send(perfil);
};
exports.update = async (req, res) => {
  if (!req.body.nome || !req.body.crianca || !req.body.urlImagem) {
    return res.status(400).send({ message: 'Os campos não podem ser vazios.' });
  }

  const perfil = await NewProfile.findByIdAndUpdate(req.params.id, req.body);
  return res.status(200).send({ message: 'Perfil atualizado com sucesso!', perfil });
};

exports.delete = async (req, res) => {
  const perfil = await NewProfile.findByIdAndDelete(req.params.id);
  return res.status(200).send({ message: 'Perfil excluído com sucesso!', perfil });
};
