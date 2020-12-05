import React, { Component } from 'react'
import PlotGraph from '../Plots'


import { GameCard, GameH2, Gamep, GamesContainer, GamesH1, GamesWrapper } from './GameElements'

function Games ({game1x,game2x,game3x}) {

        function getSum(list) {
            var result = 0;
            for(var i=0;i < list.length;i++)
            {
                result += list[i];
            }
            return result;
        }

        return (

            <GamesContainer id="Games">

                {console.log(game1x)}
                
                <GamesH1>Games</GamesH1>
                <GamesWrapper>
                    {/* <GameLink to="/Tanks">
                            <GameCard>
                                <GameIcon src={Icon1} />
                                <GameH2>Tank Game</GameH2>
                                <Gamep>This is the tank description</Gamep>
                            </GameCard>
                        </GameLink> */}
                    <GameCard>
                        {/* <GameIcon src={Icon2} /> */}

                        { (game1x.x.length !== 0)? <PlotGraph width={500} height={340} data1={game1x.x} data2={game1x.y} /> :<h5>Loading...</h5>}
                        <GameH2>Shooting Game</GameH2>
                        { (game1x.x.length !== 0)? <Gamep>No of Wins : {  getSum(game1x.x)}</Gamep>:<h6>loading...</h6>}
                        { (game1x.x.length !== 0)? <Gamep>No of lost : {  getSum(game1x.y)}</Gamep>:<h6>loading...</h6>}
                    </GameCard>
                    <GameCard>
                    { (game2x.x.length !== 0)? <PlotGraph width={500} height={340} data1={game2x.x} data2={game2x.y} /> :<h5>Loading...</h5>}
                        <GameH2>Kart Game</GameH2>
                        { (game2x.x.length !== 0)? <Gamep>No of Wins : {  getSum(game2x.x)}</Gamep>:<h6>loading...</h6>}
                        { (game2x.x.length !== 0)? <Gamep>No of lost : {  getSum(game2x.y)}</Gamep>:<h6>loading...</h6>}
                    </GameCard>
                    <GameCard>
                        {/* <GameIcon src={Icon2} /> */}
                        {console.log(game3x)}
                        
                        { (game3x.Player1.length !== 0)? <PlotGraph width={500} height={340} data1={game3x.Player1} data2={game3x.Player2} /> :<h5>Loading...</h5>}
                        <GameH2>Tanks Game</GameH2>
                        { (game3x.Player1.length !== 0)? <Gamep>No of Wins : {  getSum(game3x.Player1)}</Gamep>:<h6>loading...</h6>}
                        { (game3x.Player2.length !== 0)? <Gamep>No of lost : {  getSum(game3x.Player2)}</Gamep>:<h6>loading...</h6>}
                    </GameCard>
                    


                </GamesWrapper>
            </GamesContainer>
        )
    
}

export default Games
