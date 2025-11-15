import styles from './albumRelease.module.css'
import styled from '@emotion/styled'

const ReleaseLink = styled.div`
  margin: 48px 0;
  text-align: center;
   @media screen and (max-width: 600px) {
    margin: 24px 0 0 0;
  } 
`;

const ReleaseButton = styled.button`
  background: #070707;
  border: none;
`;

export default function AlbumRelease() {
  return (
    <div className={styles.AlbumRelease}>
      <h1 className={styles.releaseHeading}>Age of The Gods<br></br>releases 21 November</h1>
      <ReleaseLink>
        <ReleaseButton>
          <a
            href="https://artgatesrecords.com/store/en/havamal"
            target="_blank"
            rel="noopener noreferrer"
            title="Pre-order Age of The Gods from Art Gates Records"
            className={styles.preOrderButton}
          >
            Pre-Order Age of The Gods
          </a>
        </ReleaseButton>
      </ReleaseLink>
    </div>
  )
}