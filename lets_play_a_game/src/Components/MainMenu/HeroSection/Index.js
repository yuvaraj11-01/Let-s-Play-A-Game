import React from 'react'
import { HeroBg, HeroBtnWrapper, HeroContainer, ImageBG } from './HeroElements'
import BGImg from '../Images/tank.PNG'
import { HeroContent, HeroH1, HeroP } from './HeroElements';
import { Button } from '../ButtonElement';

const HeroSection = () => {
    return (
        <HeroContainer id="home" >
            <HeroBg >
                <ImageBG type="Image/PNG" src={BGImg}  ></ImageBG>
            </HeroBg>
            <HeroContent>
          <HeroH1>Let's Play Game </HeroH1>
          <HeroP>Play any Games,Without Paying </HeroP>
          {/* <HeroBtnWrapper>
              <Button to="signUp" >Get Started</Button> 
          </HeroBtnWrapper> */}
        </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
