import React from 'react'
//import { Button } from '../ButtonElement'
import {
    Column2,
    ImgWrap,
    Column1,
    InfoContainer,
    InfoRow,
    InfoWrapper,
    Heading,
    Subtitle,
    BtnWrapp,
    TextWrapper,
    TopLine,
    Img
} from './InfoElement'

const InfoSection = ({lightBg,id,imgStart,topLine,lightText,headline,darkText,description,buttonLabel,img,alt,primary,dark,dark2}) => {
    return (
        <>
          <InfoContainer lightBg ={lightBg} id={id}  >
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            {/* <BtnWrapp>
                                <Button to="home"
                                 smooth={true}
                                 duration={500}
                                 spy={true}
                                 exact="true"
                                 offset={-80}
                                 primary={primary ? 1 : 0}
                                 dark={ dark ? 1 : 0}
                                 dark2={dark2 ? 1 : 0}

                                >{buttonLabel}</Button>
                            </BtnWrapp> */}
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img  src={img} alt={alt} />
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
          </InfoContainer>  
        </>
    )
}

export default InfoSection
