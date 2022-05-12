import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from "../components/layout"
import LinkLayout from '../components/LinkLayout'
import Raids from '../components/Raids/Raids'
import HavamalVideo from '../components/SingleVideo'

import { css } from '@emotion/react'
import styled from '@emotion/styled'

export default function Index() {
  return (
    <Layout>
      <Container>
        <StaticImage
          src="../resources/band-photos/bandPhoto.jpg"
          alt="photo of the band"
          placeholder="blurred"
          layout="constrained"
          css={css`
            max-width: 80%;
            margin-top: 2rem;
            border-radius: 12px;
            box-shadow: 12px 12px 18px #000000, -12px -12px 18px #000000;
          `}
        />
        <StaticImage
          src="../resources/images/havamal_logo.png"
          alt="Havamal logo"
          placeholder="blurred"
          layout="constrained"
          css={css`
            margin-top: -400px;
            max-width: 800px;
            height: auto;
            z-index: 1;
            @media screen and (max-width: 1025px) {
              margin-top: -300px;
            }
            @media screen and (max-width: 768px) {
              margin-top: -350px;
            }
            @media screen and (max-width: 500px) {
              margin-top: -100px;
            }
          `}
        />
        <Welcome>
          Hail, Hordes of Havamal!
        </Welcome>
      </Container>
      <VideoContainer>
        <HavamalVideo
          videoURL="https://www.youtube.com/embed/w6Gy4ZGG5eg"
          videoTitle="Nidhöggr"
        />
      </VideoContainer>

      <section id="raids"
        css={css`
            padding-bottom: 48px;
        `}
      >
        <Raids />
      </section>

      <section id="linksSection">
        <SectionHeader>
          Follow Havamal
        </SectionHeader>
        <LinkLayout />
      </section>

    </Layout>
  )
}

const Welcome = styled.h1`
  font-family: norse;
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: normal;
  text-align: center;
  color: #66add9;
  padding: 2rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionHeader = styled.h2`
  font-family: Norse;
  font-size: 3rem;
  font-weight: normal;
  color: #66add9;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;