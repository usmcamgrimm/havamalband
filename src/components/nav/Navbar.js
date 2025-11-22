import { useState } from 'react'
import Image from "next/image";
import NavLinks from './NavLinks'
import styled from '@emotion/styled'

const NavBar = styled.nav`
  display: flex;
  height: 2.5rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 2;
  background-image: linear-gradient(to right, rgba(0, 82, 147, 0), rgba(0, 82, 147, 1), rgba(0, 82, 147, 0));
  padding: 0.5rem 0 0.5rem 0;
  @media screen and (max-width: 768px) {
    background-image: none;
    background-color: #005293;
    position: sticky;
    height: 5rem;
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

const AxeDisplay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 6px;
`;

const AxeText = styled.p`
  color: #ffffff;
  font-family: grenze;
  font-size: 1rem;
  margin: 0;
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

export default function Navbar() {
  const [navExpand, setNavExpand] = useState(false)

  return (
    <NavBar>
      <NavToggle
        navExpand={navExpand}
        onClick={() => setNavExpand(!navExpand)}
      >
        <AxeDisplay>
          <Image
            src="/images/axes.png"
            alt="crossed axes toggle button"
            width={49}
            height={40} 
          />
          <AxeText>MENU</AxeText>
        </AxeDisplay>
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