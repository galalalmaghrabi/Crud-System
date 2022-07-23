const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    gender : {
        type: String,
        required: true,
    },
    status : {
        type: String,
        required: true,
    }
})

const User = mongoose.model('User', schema);

module.exports = User;