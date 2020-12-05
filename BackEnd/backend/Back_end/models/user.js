const mongoose = require('mongoose');

const PostSchema =new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
    TankGameID:{
        type: String,
        default: ""
    },
    ShootingGameID:{
        type: String,
        default: ""
    },
    KartGameID:{
        type: String,
        default: ""
    }

});

module.exports = mongoose.model('User',PostSchema)

