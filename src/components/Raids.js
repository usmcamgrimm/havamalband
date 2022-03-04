import React from 'react'

import { css } from '@emotion/react'
import styled from '@emotion/styled'

const RaidWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;
const DateTitle = styled.p`
  grid-area: date;
  margin: 0;
`;
const EventTitle = styled.p`
  grid-area: event;
  margin: 0;
`;
const LocationTitle = styled.p`
  grid-area: location;
  margin: 0;
  @media screen and (max-width: 768px) {
    margin-top: -16px;
  }
`
const RaidContainer = styled.div`
  margin: 0 auto;
  display: grid;
  place-items: center;
  grid-template-columns: 200px 300px 300px;
  grid-template-rows: auto;
  grid-template-areas:
    "date event location";
  grid-gap: 12px;
  font-family: grenze;
  font-size: clamp(1.1rem, 5vw, 1.8rem);
  color: #ffffff;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: 200px 300px 400px;
  }
`;
const Line = styled.hr`
  width: 50%;
  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(147, 147, 147, 0.4);
`;

export default function Raids() {
  return(
    <>
      <h1 css={css`
        font-family: Norse;
        font-size: 3rem;
        font-weight: normal;
        color: #66add9;
        text-align: center;
        margin-bottom: 4rem;
        @media screen and (max-width: 768px) {
          margin-bottom: 32px;
        }
      `}>Upcoming Raids</h1>
      <RaidWrapper>
        <RaidContainer
          as="a"
          href="https://fb.me/e/1AFbddTuV"
          target="_blank" 
          rel="noreferrer"
          css={css`
            text-decoration: none;
            &:hover {
              color: #004b87;
              transform: scale(1.01);
            }
          `}
        >
          <DateTitle>15 April 2022</DateTitle>
          <EventTitle className="event">Live at Club Fredagsmangel</EventTitle>
          <LocationTitle className="location">Fredagsmangel, Järfälla, Sweden</LocationTitle>
        </RaidContainer>

        <Line />

        <RaidContainer
          as="a"
          href="https://www.facebook.com/2228032767282124/posts/3635924743159579/?sfnsn=mo"
          target="_blank" 
          rel="noreferrer"
          css={css`
            text-decoration: none;
            &:hover {
              color: #004b87;
              transform: scale(1.01);
            }
          `}
        >
          <DateTitle>28 May 2022</DateTitle>
          <EventTitle className="event">Järfälla Metal Fest</EventTitle>
          <LocationTitle className="location">Fredagsmangel, Järfälla, Sweden</LocationTitle>
        </RaidContainer>

        <Line />

        <RaidContainer
          as="a"
          href="https://www.all-for-you-events.com/thorshammer"
          target="_blank" 
          rel="noreferrer"
          css={css`
            text-decoration: none;
            &:hover {
              color: #004b87;
              transform: scale(1.01);
            }
          `}
        >
          <DateTitle>23 Sept 2022</DateTitle>
          <EventTitle className="event">Thorshammer Festival</EventTitle>
          <LocationTitle className="location">Glider airfield, 98527 Suhl-Goldlauter</LocationTitle>
        </RaidContainer>

        <Line />

        <RaidContainer
          as="a"
          href="https://www.coastrock-festival.de/de/blog/2022/03/04/ahoi-havamal-sind-an-bord/"
          target="_blank" 
          rel="noreferrer"
          css={css`
            text-decoration: none;
            &:hover {
              color: #004b87;
              transform: scale(1.01);
            }
          `}
        >
          <DateTitle>24 Sept 2022</DateTitle>
          <EventTitle className="event">Coastrock Festival</EventTitle>
          <LocationTitle className="location">Suurhusen, Emden, Germany</LocationTitle>
        </RaidContainer>

        <Line />

        <RaidContainer
          as="a"
          href="https://www.facebook.com/cernunnos.festival/"
          target="_blank" 
          rel="noreferrer"
          css={css`
            text-decoration: none;
            &:hover {
              color: #004b87;
              transform: scale(1.01);
            }
          `}
        >
          <DateTitle>2023</DateTitle>
          <EventTitle className="event">Cernunnos Pagan Fest</EventTitle>
          <LocationTitle className="location">La Ferme du Buisson, Noisiel, France</LocationTitle>
        </RaidContainer>
      </RaidWrapper>
    </>
  )
}