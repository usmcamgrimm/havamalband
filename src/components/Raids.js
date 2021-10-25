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
  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;
const EventTitle = styled.p`
  grid-area: event;
  @media screen and (max-width: 768px) {
    margin: 0;
    margin-top: -16px;
  }
`;
const LocationTitle = styled.p`
  grid-area: location;
  @media screen and (max-width: 768px) {
    margin: 0;
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
  font-size: clamp(1.2rem, 5vw, 1.8rem);
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
// const Line = styled.hr`
//   width: 50%;
//   margin: 0 auto;
//   margin-top: 1rem;
//   margin-bottom: 2rem;
//   border-bottom: 1px solid rgba(147, 147, 147, 0.4);
// `;

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
      </RaidWrapper>
    </>
  )
}