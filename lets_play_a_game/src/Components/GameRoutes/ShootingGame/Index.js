import React,{Component} from 'react'
import GameHeroSection from './ShootingGameComponents/Herosection/Index'
import {homeObjOne} from './ShootingGameComponents/GameSection/Data'
import GameSection from './ShootingGameComponents/GameSection/Index';

function ShootingGame ({props}){
    
        return(
            <div>
                <GameHeroSection/>
                <GameSection {...homeObjOne} playerName={props.match.params.username}/>
            </div>
        );
    
}

export default ShootingGame;

