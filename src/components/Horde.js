import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import { css } from '@emotion/react'
import styled from '@emotion/styled'

const JoinHorde = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Horde() {
  return (
    <JoinHorde>
      <h1 css={css`
        font-family: Norse;
        font-size: 3rem;
        font-weight: normal;
        color: #66add9;
        text-align: center;
        margin-top: 4rem;
        margin-bottom: 4rem;
      `}>Join the Hordes of Havamal</h1>

      <a 
        href="https://www.facebook.com/groups/338634033565609" 
        target="_blank" 
        rel="noreferrer" 
        aria-label="Hordes of Havamal"
        css={css`cursor: crosshair`}
      >
        <StaticImage
          src="../resources/icons/horde.png"
          alt="Hordes of Havamal banner link"
          layout="constrained"
          width={250}
        />
      </a>
    </JoinHorde>
  )
}


