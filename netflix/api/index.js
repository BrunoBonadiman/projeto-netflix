require('./config/config');
require('./models/database');
require('./config/passportConfig');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const userRouter = require('./routes/user-router');
const newProfileRouter = require('./routes/new-profile-router');

var app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use('/api', userRouter);
app.use('/api/profile', newProfileRouter);

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    } else {
        console.log(err);
    }
});

app.listen(process.env.PORT, () => console.log(`Servidor iniciado na porta : ${process.env.PORT}`));