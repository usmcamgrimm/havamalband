import React, { useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from '@emotion/styled'
import NavLinks from './NavLinks'

export default function NavbarV2() {
  const [navExpand, setNavExpand] = useState(false)
  return(
    <NavBar>
      <NavToggle
        navExpand={navExpand}
        onClick={() => setNavExpand(!navExpand)}
      >
        <StaticImage
          src="../../resources/images/axes.png"
          alt="crossed axes toggle button"
          layout="fixed"
          width={50}
        />
        {navExpand ? <AxeMenu open /> : <AxeMenu />}
      </NavToggle>
      {navExpand ? (
        <NavLinksContainer
          onClick={() => setNavExpand(!navExpand)}
        >
          <NavLinks />
        </NavLinksContainer>
      ) : (
          <NavLinksContainer open>
            <NavLinks />
          </NavLinksContainer>
      )}
    </NavBar>
  )
}

const NavBar = styled.nav`
  display: flex;
  height: 2.5rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 2;
  background-image: linear-gradient(to right, rgba(0, 82, 147, 0), rgba(0, 82, 147, 1), rgba(0, 82, 147, 0));
  padding: 0.25rem 0 0.5rem 0;
  @media screen and (max-width: 768px) {
    background-image: none;
    background-color: #005293;
    position: sticky;
    height: 4rem;
    top: 0;
    right: 0;
    bottom: 0;
    left;
  }
`;

const NavToggle = styled.div`
  display: none;
  height: 100%;
  padding: 0 3rem;
  @media screen and (max-width:768px) {
    display: flex;
    align-items: center;
  }
`;

const NavLinksContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 2rem;
    background-color: #005293;
    transition: all 0.3s ease-in;
    top: 3.5rem;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`;

const AxeMenu = styled.div`
  align-self: center;
  position: relative;
`;