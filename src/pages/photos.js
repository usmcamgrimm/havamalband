import React from 'react'
import Layout from '../components/layout'
import MediaGallery from '../components/MediaGallery'
import SimpleReactLightbox from 'simple-react-lightbox'

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

export default function PhotosPage() {
  return (
    <Layout>
      <SectionHeader>
        Havamal Photos
      </SectionHeader>

      <SimpleReactLightbox>
        <MediaGallery />
      </SimpleReactLightbox>
    </Layout>
  )
}