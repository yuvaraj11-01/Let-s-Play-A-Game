import React from 'react'
import Icon1 from '../Images/tanks1.PNG'
import Icon2 from '../Images/Capture1.PNG'
import Icon3 from '../Images/kart1.PNG'

import { GameCard, GameLink, GameH2, GameIcon, Gamep, GamesContainer, GamesH1, GamesWrapper } from './GameElements'

const Games = ({routlink}) => {
    return (
        <GamesContainer id="Games">
            <GamesH1>Our Games</GamesH1>
            <GamesWrapper>
                <GameLink to={"/Tanks/"+routlink}>
                    <GameCard>
                        <GameH2>Tank Game</GameH2>
                        <GameIcon src={Icon1} />
                        <Gamep>Gametype: Multiplayer <br/> This is the Game where only Two players can play.</Gamep>
                    </GameCard>
                </GameLink>
                <GameLink to={"/ShootGame/"+routlink}>
                <GameCard>
                    <GameH2>Shooting Game</GameH2>
                    <GameIcon src={Icon2} />
                    <Gamep>Gametype: Shotting <br/> This is the shooting single player Game.</Gamep>
                </GameCard>
                </GameLink>
                
                <GameLink to={"/KartGame/"+routlink}>
                <GameCard>
                    <GameH2>Kart Game</GameH2>
                    <GameIcon src={Icon3} />
                    <Gamep>Gametype: Racing <br/> This is the Kart single player Game.</Gamep>
                </GameCard>
                </GameLink>
                
                

            </GamesWrapper>
        </GamesContainer>
    )
}

export default Games
