import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import {
    MobileIcon,
    Nav,
    NavbarContainer,
    NavItem, NavLinks, NavLogo, NavMenu, NavBtn, NavBtnLink
} from './NavbarElements'
import { FaBars } from 'react-icons/fa'

const Navbar = ({ routlink,toggle }) => {

    const toogleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to={"/home/"+routlink}  onClick={toogleHome}>
                        Let's Play Game
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="Info"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                activeClass="active"
                            >Info</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="Games"
                            smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                activeClass="active"
                            >Games</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="About"
                            smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                activeClass="active"
                            >About</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to={"/profile/"+routlink}>
                            PlayerProfiler
                        </NavBtnLink>
                    </NavBtn>
                    <NavBtn>
                        <NavBtnLink to={"/"}>
                            Log Out
                        </NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
