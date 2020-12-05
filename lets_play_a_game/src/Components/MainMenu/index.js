import React from 'react'
import { useHistory } from "react-router-dom";
import { useState,useEffect } from 'react'
import Navbar from './Navbar/index'; 
import SideBar from './Sidebar/Index';
import { homeObjOne, homeObjTwo, homeObjThree } from './InfoSection/Data'
import InfoSection from './InfoSection/index';
import Games from './Games/Index';
import Footer from './Footer/index';
import HeroSection from './HeroSection/Index';

function MainMenu({getlog,props}) {
    const history = useHistory();
    
    // var [Logined, setLogined] = useState(false);
  
    // function getLogined(){
    //     setLogined(true);
    // }

    const [isMounted, setIsMounted] = useState(false);
    var playerData,playerName,playerId;

    useEffect(() => {
        setIsMounted(true);
        // if(getlog)
        // {
        //     history.push('/home')
        // }
        // else{
        //     history.push('/')
        // }
        playerData = ((String)(props.match.params.username)).split('-');
        playerName = playerData[0];
        playerId = playerData[1];
        console.log(playerName +" :-> "+ playerId);
    }, []);

    useEffect(() => {
        return () => {
            setIsMounted(false);
        }
    }, []);

    const [isOpen,setIsOpen] = useState(false)
    const toggle = ()=>{
        setIsOpen(!isOpen)
    }

    return (
        <>
            {/* <SideBar isOpen={isOpen} toggle={toggle} /> */}
            <Navbar routlink={props.match.params.username}  toggle={toggle}/>
            <HeroSection/>
            <InfoSection {...homeObjOne}/>
            <Games routlink={props.match.params.username}/>
            <InfoSection {...homeObjTwo}/>
            <Footer routlink={props.match.params.username} /> 
            
        </>
    )
}

export default MainMenu
