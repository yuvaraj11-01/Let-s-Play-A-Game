import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FooterContainer, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterWrap, FotterLink, FotterLinkTitle, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRight } from './FooterElements'
import {FaFacebook,FaInstagram,FaYoutube,FaTwitter,FaLinkedin} from 'react-icons/fa'
function Footer({routlink}) {
    const toogleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FotterLinkTitle>
                                About Games
                            </FotterLinkTitle>
                            <FotterLink target="_blank" href="https://assetstore.unity.com/packages/templates/fps-microgame-156015">Shooting Game</FotterLink>
                            <FotterLink target="_blank" href="https://assetstore.unity.com/packages/templates/karting-microgame-150956">Kart Game</FotterLink>
                            <FotterLink target="_blank" href="https://assetstore.unity.com/packages/essentials/tutorial-projects/tanks-tutorial-46209">Tank Game</FotterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to={"/home/"+routlink} onClick={toogleHome}>Let's Play Game</SocialLogo>
    <WebsiteRight>Let's Play Game @ {new Date().getFullYear()} All rights not reserved</WebsiteRight>
                        <SocialIcons>
                            <SocialIconLink>
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink>
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink>
                                <FaYoutube/>
                            </SocialIconLink>
                            <SocialIconLink>
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink>
                                <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
