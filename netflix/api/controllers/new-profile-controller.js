const mongoose = require('mongoose');
const _ = require('lodash');
const NewProfile = require('../models/new-profile-model');

module.exports.create = (req, res, next) => {
  const usuarioId = res.locals.auth_data._id;
  req.body.usuario = usuarioId;

  const profile = new NewProfile();
  profile.nome = req.body.nome;
  profile.crianca = req.body.crianca;
  profile.urlImagem = req.body.urlImagem;
  profile.save((err, result) => {
    console.log(result);
        if (err) {
            return res.status(500).json({
                myErroTitle: 'Ocorreu um erro ao salvar o Perfil!',
                myError: err
            });
        }
        res.status(201).json({
            myMsgSucess: "Perfil cadastrado com sucesso!",
            objMessageSave: result
        });
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