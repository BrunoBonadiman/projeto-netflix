var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var newProfileSchema = new Schema({
    nome:{
        type: String, 
        required: true
    },
    crianca:{
        type: Boolean,
        required: false
    },
    urlImagem:{
        type: String
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('NewProfile', newProfileSchema);