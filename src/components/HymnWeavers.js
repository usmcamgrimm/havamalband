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
  width: 50%;
  margin: 0 auto;
  @media screen and (max-width: 500px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 1rem 7rem;
  }
`;
export default function HymnWeavers() {
  return(
    <Band>
      <StaticImage
        src="../resources/band-photos/andreas_new.jpg"
        alt="Andreas Herlogsson"
        placeholder="blurred"
        layout="constrained"
        css={css`
          max-width: 150px;
          border-radius: 5px;
        `}
      />

      <StaticImage
        src="../resources/band-photos/bjorn_new.jpg"
        alt="Andreas Herlogsson"
        placeholder="blurred"
        layout="constrained"
        css={css`
          max-width: 150px;
          border-radius: 5px;
        `}
      />

      <StaticImage
        src="../resources/band-photos/Kjell_new.jpg"
        alt="Andreas Herlogsson"
        placeholder="blurred"
        layout="constrained"
        css={css`
          max-width: 150px;
          border-radius: 5px;
        `}
      />

      <StaticImage
        src="../resources/band-photos/lennie_new.jpg"
        alt="Andreas Herlogsson"
        placeholder="blurred"
        layout="constrained"
        css={css`
          max-width: 150px;
          border-radius: 5px;
        `}
      />

      <StaticImage
        src="../resources/band-photos/tino.jpg"
        alt="Andreas Herlogsson"
        placeholder="blurred"
        layout="constrained"
        css={css`
          max-width:150px;
          border-radius: 5px;
        `}
      />
    </Band>
  )
}