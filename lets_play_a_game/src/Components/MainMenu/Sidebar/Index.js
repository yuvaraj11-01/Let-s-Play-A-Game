import React from 'react'
import {SideBarContainer,Icon,CloseIcon,SidebarWrapper, SideBarMenu, SideBarLink} from './SideBarElements'

function SideBar({isOpen,toggle}) {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            {/* <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SideBarMenu>
                    <SideBarLink to="about" onClick={toggle}>
                        Info
                    </SideBarLink>
                    <SideBarLink to="discovery"  onClick={toggle}>
                    Games
                    </SideBarLink>
                    <SideBarLink to="services" onClick={toggle}>
                    About
                    </SideBarLink>
                </SideBarMenu> */}
                {/* <SideBtnWrapp>
                    <SideBarRoutes to="/SignIn" onClick={toggle}>
                        Sign In
                    </SideBarRoutes>
                </SideBtnWrapp> */}
            {/* </SidebarWrapper> */}
        </SideBarContainer>
    )
}

export default SideBar
