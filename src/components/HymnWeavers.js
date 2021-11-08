import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import { css } from '@emotion/react'
import styled from '@emotion/styled'

const Band = styled.div`
  display: grid;
  place-items: center;
  grid-gap: 12px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  padding: 0;
  width: 80%;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
  }
`;
export default function HymnWeavers() {
  return(
    <Band>
      <StaticImage
        src="../resources/band-photos/lennie.jpg"
        alt="Andreas Herlogsson"
        placeholder="blurred"
        layout="constrained"
        css={css`
          max-width: 500px;
          border-radius: 5px;
          box-shadow: 0 2px 6px #000000;
        `}
      />

      <StaticImage
        src="../resources/band-photos/andreas.jpg"
        alt="Andreas Herlogsson"
        placeholder="blurred"
        layout="constrained"
        css={css`
          max-width: 500px;
          border-radius: 5px;
          box-shadow: 0 2px 6px #000000;
        `}
      />

      <StaticImage
        src="../resources/band-photos/bjorn.jpg"
        alt="Andreas Herlogsson"
        placeholder="blurred"
        layout="constrained"
        css={css`
          max-width: 500px;
          border-radius: 5px;
          box-shadow: 0 2px 6px #000000;
        `}
      />

      <StaticImage
        src="../resources/band-photos/kjell.jpg"
        alt="Kjell Gilliusson"
        placeholder="blurred"
        layout="constrained"
        css={css`
          max-width: 500px;
          border-radius: 5px;
          box-shadow: 0 2px 6px #000000;
        `}
      />

      <StaticImage
        src="../resources/band-photos/tino.jpg"
        alt="Andreas Herlogsson"
        placeholder="blurred"
        layout="constrained"
        css={css`
          max-width: 500px;
          border-radius: 5px;
          box-shadow: 0 2px 6px #000000;
        `}
      />
    </Band>
  )
}