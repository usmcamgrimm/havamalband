import React from 'react'
import Layout from '../components/layout'
import HymnWeavers from '../components/HymnWeavers'

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

const SagaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: start;
  margin: 0 auto;
  width: 80%;
  @media screen and (max-width: 500px) {
    width: 90%;
  }
`;

const SagaText = styled.p`
  font-family: grenze;
  color: #ffffff;
  font-size: 1.5rem;
`;

export default function Saga() {
  return (
    <Layout>
      <SectionHeader>
        The Hymn-Weavers
      </SectionHeader>

      <section id="band-images">
        <HymnWeavers />
      </section>

      <section id="havamal-saga">
        <SectionHeader>
          The Havamal Saga
        </SectionHeader>
        <SagaContainer>
          <SagaText>
            Kjell Gilliusson and Lennie Spetze are hailed as the founders of Havamal. They formed the band in Stockholm, Sweden in 2016 and soon invited Björn Larsson. Andreas Herlogsson would join later, after the departure of Rodrigo Valenzuela. Sandra Wallo took over for Pontus Knutsson, until her departure in 2020. Now hail Tino Vesanen on bass!
          </SagaText>
          <SagaText>
            Havamal's unique sound is derived from their wide and varying musical influences. Their mix of symphonic, brutal, melodic death metal is unique and makes themn stand out as masters of their craft. Their first release, an EP titled <strong>Call of The North</strong>, was released independently in 2017, and was an overwhelming success. Conducting raids throughout Sweden, Havamal was invited to play at Northern Blasphemy and the Wacken Metal Battle.
          </SagaText>
          <SagaText>
            Signed by Art Gates Records in 2019, Havamal&apos;s first full-length album, <strong>Tales From Yggdrasil</strong>, was released. Once again proving their musical prowess, Havamal unleashed many raids throughout their home country and spread their music. 
          </SagaText>
          <SagaText>
            Havamal signed once more with Art Gates Records, and their second full-length album, <strong>The Shadow Chapter</strong>, was released in May 2021. Entering into a new alliance with HellFrog Promotion, Havamal raided at <strong>Raise Your Horns</strong>. Now, the hymn-weavers look to expand their influence even further! Havamal will be invading Europe later this year, starting with Germany, raiding at <strong>Thorshammer Festival</strong>, followed the next day by an appearance at <strong>Coastrock Festival</strong>! These shows will be followed by more shows across Europe, and hopefully we will soon see Havamal set sail on their longships, expanding their reach and raiding across the globe!
          </SagaText>
          <SectionHeader>
            Hail Havamal!
          </SectionHeader>
        </SagaContainer>
      </section>
    </Layout>
  )
}