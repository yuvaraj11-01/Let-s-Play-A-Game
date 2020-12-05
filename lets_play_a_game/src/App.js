import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {useState} from 'react'
import LoginPage from './Components/Login/index' ;
import MainMenu from './Components/MainMenu';
import PlayerProfilerPage from './Components/PlayerProfiler';
import { useHistory } from "react-router-dom";
import TankGame from './Components/GameRoutes/TankGame/Index';
import KartGame from './Components/GameRoutes/KartGame/Index';
import ShootingGame from './Components/GameRoutes/ShootingGame/Index';

function App() {
  
    var [Logined, setLogined] = useState(false);
  
    function getLogined(){
        setLogined(false);
        console.log(Logined);
    }

    

  return (
    <Router className="App">
        <Switch>
          <Route exact path="/" component={()=><LoginPage setLog={setLogined} />}  />
          <Route exact path="/home/:username" component={(props)=><MainMenu props={props} getlog={true}/>}  />
          <Route exact path="/profile/:username" component={(props)=><PlayerProfilerPage props={props}/>}  />
          <Route exact path="/Tanks/:username" component={(props)=> <TankGame props={props}/> }/>
          <Route exact path="/ShootGame/:username" component={(props)=><ShootingGame props={props}/>}/>
          <Route exact path="/KartGame/:username" component={(props)=><KartGame props={props}/>} />
        </Switch>
    </Router>
  );
}

export default App;
