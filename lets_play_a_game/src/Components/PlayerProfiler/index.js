import React,{Component} from 'react'
import PlayerProfiler from './Components/playerProfiler/index'


function PlayerProfilerPage ({props}) {
    
    
        var playerId = "5fb22a30fc754724c4095713";
        var playerData = ((String)(props.match.params.username)).split('-');
        var playerName = playerData[0];
        var playerId = playerData[1];
        return (
            <>
                <PlayerProfiler PlayerId={playerId}/>
            </>
        );
    
}

export default PlayerProfilerPage
