import React from 'react'
import JSONData from './raids.json'

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
      {JSONData.raids.map((raids, index) => {
        return <RaidWrapper key={`raids_id_${index}`}>
          <RaidContainer
              as="a"
              href={raids.link}
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
              <DateTitle>{raids.date}</DateTitle>
              <EventTitle className="event">{raids.event}</EventTitle>
              <LocationTitle className="location">{raids.location}</LocationTitle>
            </RaidContainer>
            <Line />
        </RaidWrapper>
      })}
    </>
  )
}