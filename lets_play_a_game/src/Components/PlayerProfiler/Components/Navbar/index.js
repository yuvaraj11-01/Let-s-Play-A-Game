import React from 'react'
import {Button} from '../../ButtonElement';
import { Nav, NavbarContainer,NavBtnLink,NavBtn } from './NavbarElements'
const Navbar = ( ) => {
    return (
        <>
            <Nav>
                <Button href="http://localhost:3000/">Log Out</Button>
            </Nav>
        </>
    )
}

export default Navbar
