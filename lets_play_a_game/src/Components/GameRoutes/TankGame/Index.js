import React,{Component} from 'react'
import GameHeroSection from './TankGameComponents/Herosection/Index'
import {homeObjOne} from './TankGameComponents/GameSection/Data'
import GameSection from './TankGameComponents/GameSection/Index';

function TankGame ({props}){
    return(
        <div>
            <GameHeroSection/>
            <GameSection {...homeObjOne} playerName={props.match.params.username}/>
        </div>
    );
}

export default TankGame;
