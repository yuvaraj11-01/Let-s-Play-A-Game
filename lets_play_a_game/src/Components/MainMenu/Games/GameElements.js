import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'

export const GameLink = styled(LinkR)`
    text-decoration:none;
    color: black;
`


export const GamesContainer = styled.div `
 height: 800px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 background: #010606;

 @media screen and (max-width: 768px){
     height: 1100px;
 }

 @media screen and (max-width: 480px){
    height: 1300px;
}

`

export const GamesWrapper = styled.div `
 max-width: 1000px;
 margin: 0 auto;
 display: grid;
 grid-template-columns: 1fr 1fr 1fr;
 align-items: center;
 justify-content: center;
 grid-gap: 16px;
 padding: 0 50px;

 @media screen and (max-width: 1000px){
     grid-template-columns: 1fr 1fr;
 }

 @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 0 20px;
}

`
export const GameCard = styled.div `
 background: #fff;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 border-radius: 10px;
 max-height: 600px;
 height: 600px;
 width: 350px;
 padding: 30px;
 box-shadow: 0 1px 3px rgba(0,0,0,0.2);
 transition: all 0.2s ease-in-out;
 
 &:hover {
     transform: scale(1.02);
     transition: all 0.2s ease-in-out;
     cursor: pointer;
 }

`

export const GameIcon = styled.img `
 height: 260px;
 width: 360px;
 margin-bottom: 10px;
 box-shadow: 0 5px 5px rgba(0,0,0,0.3);

`

export const GamesH1 = styled.h1 `
 font-size: 2.5rem;
 color: #fff;
 magin-bottom:64px;
 
 @media screen and (max-width: 480px){
    font-size: 2rem;
}

`
export const GameH2 = styled.h2 `
 font-size:2rem;
 margin-bottom: 50px; 
 
`

export const Gamep = styled.h6 `
 font-size: 1.5rem;
 text-align: center;
 color: gray;
`




