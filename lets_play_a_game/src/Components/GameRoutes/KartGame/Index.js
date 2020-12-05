import React,{Component} from 'react'
import GameHeroSection from './kartGameComponents/Herosection/Index'
import {homeObjOne} from './kartGameComponents/GameSection/Data'
import GameSection from './kartGameComponents/GameSection/Index';

function KartGame ({props}){
    
        return(
            <div>
                <GameHeroSection/>
                <GameSection {...homeObjOne} playerName={props.match.params.username}/>
            </div>
        );
    
}

export default KartGame;