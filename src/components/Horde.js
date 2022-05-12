import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import { css } from '@emotion/react'
import styled from '@emotion/styled'

const SectionHeader = styled.h1`
  font-family: Norse;
  font-size: 3rem;
  font-weight: normal;
  color: #66add9;
  text-align: center;
  margin-top: 4rem;
  margin-bottom: 4rem;
`;

const JoinHorde = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Horde() {
  return (
    <JoinHorde>
      <SectionHeader>
        Join the Hordes of Havamal
      </SectionHeader>

      <a
        href="https://www.facebook.com/groups/338634033565609"
        target="_blank"
        rel="noreferrer"
        aria-label="Hordes of Havamal"
      >
        <StaticImage
          src="../resources/icons/horde.png"
          alt="Hordes of Havamal banner link"
          layout="constrained"
          width={250}
          css={css`border-radius: 5px;`}
        />
      </a>
    </JoinHorde>
  )
}


