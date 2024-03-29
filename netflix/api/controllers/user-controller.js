const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const User = mongoose.model('User');

module.exports.register = (req, res, next) => {
    var user = new User();
    user.fullName = req.body.fullName;
    user.email = req.body.email;
    user.password = req.body.password;
    user.plano = req.body.plano;
    user.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Endereço de email duplicado encontrado.']);
            else
                return next(err);
        }

    });
}

module.exports.authenticate = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) return res.status(400).json(err);
        else if (user) return res.status(200).json({
            "token": user.generateJwt()
        });
        else return res.status(404).json(info);
    })(req, res);
}

module.exports.userProfile = (req, res, next) => {
    User.findOne({
            _id: req.decoded._id
        },
        (err, user) => {
            if (!user)
                return res.status(404).json({
                    status: false,
                    message: 'Registro de usuário não encontrado.'
                });
            else
                return res.status(200).json({
                    status: true,
                    user: _.pick(user, ['_id', 'fullName', 'email'])
                });
        }
    );
}

module.exports.getUser = (req, res, next) => {
    User.findOne({
            _id: req.params.id
        },
        (err, user) => {
            if (!user)
                return res.status(404).json({
                    status: false,
                    message: 'Usuário não encontrado!'
                });
            else
                return res.status(200).json({
                    status: true,
                    user: _.pick(user, ['fullName', 'email'])
                });
        }
    );
}