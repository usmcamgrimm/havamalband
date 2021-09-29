import React from 'react'
import { Link } from 'gatsby'

import { css } from '@emotion/react'
import styled from '@emotion/styled'

const MerchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MerchLink = styled.a`
  font-family: grenze;
  text-decoration: none;
  font-size: 1.4rem;
  color: #ffffff;
  &:hover {
    color: #004b87;
    transform: scale(1.1);
  }
`;

export default function Merch() {
  return (
    <MerchWrapper>
      <h1 css={css`
        font-family: Norse;
        font-size: 3rem;
        font-weight: normal;
        color: #66add9;
        text-align: center;
        margin-top: 4rem;
        margin-bottom: 4rem;
      `}>Havamal Merch</h1>

    <MerchLink 
      href="https://havamal.bandcamp.com/merch" 
      target="_blank" 
      rel="noreferrer" 
      aria-label="Havamal merch on Bandcamp"
    >
      <p>Havamal Merch on Bandcamp</p>
    </MerchLink>

    <MerchLink 
      href="https://artgatesrecords.com/store/en/havamal" 
      target="_blank" 
      rel="noreferrer" 
      aria-label="Havamal merch on Art Gates records"
    >
      <p>Havamal Merch on Art Gates Records</p>
    </MerchLink>
    </MerchWrapper>
  )
}


