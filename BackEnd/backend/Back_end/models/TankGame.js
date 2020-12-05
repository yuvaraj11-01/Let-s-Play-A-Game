const mongoose = require('mongoose');

const TankGameSchema =new mongoose.Schema({
    ParentId: {
        type: String,
        required: true
    },
    Player1:{
        type: String,
        required: true
    },
    Player2:{
        type: String,
        required: true
    }

});

module.exports = mongoose.model('TankGame',TankGameSchema)
