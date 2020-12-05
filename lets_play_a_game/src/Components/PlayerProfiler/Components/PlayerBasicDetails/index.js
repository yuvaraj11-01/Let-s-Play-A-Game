import React from 'react'
import PlotGraph from '../Plots'
import { BtnWrapp, Column1, Column2, Heading, InfoRow, InfoWrapper, PlayerinfoContainer, Subtitle, TextWrapper, TopLine } from './playerBasicDetails'

function PlayerInfo({playername,playeremail}) {
    return (
        <>
            <PlayerinfoContainer>
                <Heading  >Player Info</Heading>
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                            <TextWrapper>
                                <TopLine>Player Name</TopLine>
                                <Subtitle darkText={true}>{playername}</Subtitle>
                                {console.log(playername)}
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <TextWrapper>
                                <TopLine>Player Email</TopLine>
                                <Subtitle darkText={true}>{playeremail}</Subtitle>
                                {console.log(playeremail)}
                            </TextWrapper>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </PlayerinfoContainer>
        </>
    )
}

export default PlayerInfo
