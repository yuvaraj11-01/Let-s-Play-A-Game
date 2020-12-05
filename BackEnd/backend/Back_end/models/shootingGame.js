const mongoose = require('mongoose');

const ShootGameSchema =new mongoose.Schema({
    ParentId: {
        type: String,
        required: true
    },
    Wins:{
        type: String,
        required: true
    },
    Loose:{
        type: String,
        required: true
    }

});

module.exports = mongoose.model('ShootingGame',ShootGameSchema)

