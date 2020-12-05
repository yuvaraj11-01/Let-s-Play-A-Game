import KartImg from '../Images/kart3.PNG'
import ShootImg from '../Images/Capture2.PNG'

export const homeObjOne = {
    id:'Info',
    lightBg: false,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Info ',
    headline: 'Games Info.',
    description: 'There are only three game, Which are Unique to each other. Shooting Game, Racing Game, Local Multiplayer Game',
    buttonLabel: 'Get Started',
    imgStart: false,
    img: ShootImg,
    alt: 'Car',
    dark: false,
    primary: false,
    darkText: true
}

export const homeObjTwo = {
    id:'About',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'About',
    headline: 'Development.',
    description: 'These above game are made using unity Engine(personal Edition),Which is than converted into WebGL format.',
    buttonLabel: 'Get Started',
    imgStart: true,
    img: KartImg,
    alt: 'Car',
    dark: false,
    primary: false,
    darkText: true
}

export const homeObjThree = {
    id:'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Premium Bank',
    headline: 'Unlimited Transacion with zero fees.',
    description: 'This is the description paragraph.',
    buttonLabel: 'Get Started',
    imgStart: true,
    img: KartImg,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false
}


