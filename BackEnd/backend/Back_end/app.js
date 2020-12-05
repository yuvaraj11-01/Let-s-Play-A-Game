const express = require('express');
const  mongoose  = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
var methodOverride = require('method-override');
const cors = require('cors')

app.use(cors());
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'))

const postRoute = require('./Routes/Users');
const shootgameRoute = require('./Routes/ShootingGame');
const KartgameRoute = require('./Routes/KartGame');
const TankgameRoute = require('./Routes/TankGame');

app.use('/Users',postRoute);
app.use('/ShootingGame',shootgameRoute);
app.use('/KartGame',KartgameRoute);
app.use('/TankGame',TankgameRoute);

//Routes
app.get('/', (req,res) =>{
    res.send('Root Route');
});


//connect to DB
mongoose.connect('mongodb://localhost:27017/PlayersDB',{ useNewUrlParser: true, useUnifiedTopology: true },()=>{
    console.log('connected to DB')
})
//Listening
app.listen(5000);

