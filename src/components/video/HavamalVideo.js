import styled from '@emotion/styled'
import styles from './havamalVideo.module.css'

const VideoContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 10%;
  margin-bottom: 2rem;
  ::after {
    padding-top: 56.25%;
    display: block;
    content: '';
  }
  @media screen and (min-width: 1025px) {
    width: 60%;
  }
  @media screen and (max-width: 1024px) {
    width: 80%;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  } 
`;

export default function HavamalVideo({ videoURL, videoTitle  }) {
  return (
    <VideoContainer>
      <iframe
        className={styles.iframe}
        src={videoURL}
        title={videoTitle}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </VideoContainer>
  )
}

