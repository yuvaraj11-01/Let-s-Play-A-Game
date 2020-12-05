import React from 'react'
import { HeroBg, HeroBtnWrapper, HeroContainer, ImageBG } from './HeroElements'
import BGImg from './Img/kart2.PNG'
import { HeroContent, HeroH1, HeroP } from './HeroElements';
//import { Button } from '../ButtonElement';

const GameHeroSection = () => {
    return (
        <HeroContainer id="home" >
            <HeroBg >
                <ImageBG type="Image/PNG" src={BGImg}  ></ImageBG>
            </HeroBg>
            <HeroContent>
          <HeroH1>Kart Game</HeroH1>
          
        </HeroContent>
        </HeroContainer>
    )
}

export default GameHeroSection