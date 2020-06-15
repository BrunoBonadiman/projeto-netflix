const mongoose = require('mongoose');
const _ = require('lodash');
const NewProfile = require('../models/new-profile-model');

module.exports.create = (req, res, next) => {
  let profile = new NewProfile();
  profile.nome = req.body.nome;
  profile.crianca = req.body.crianca;
  profile.urlImagem = req.body.urlImagem;
  profile.save((err, doc) => {
    if (!err)
      res.send(doc);
    else {
      if (err.code == 11000)
        res.status(422).send(['Esse nome já exite para essa conta.']);
      else
        return next(err);
    }

  });
}

module.exports.getProfile = (req, res, next) => {
  NewProfile.find().exec((err, result) => {
      if (err) {
          return res.status(500).json({
              myErroTitle: 'Ocorreu um erro ao buscar o Perfil!',
              myError: err
          })
      }
      res.status(200).json({
          myMsgSucess: 'Perfis recuperados com sucesso!',
          objsMessageSRecuperados: result
      })
  });
}