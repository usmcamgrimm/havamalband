import Head from 'next/head'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../styles/lyrics.module.css'
import CallOfTheNorth from '../components/Lyrics/CallOfTheNorth'
import TalesFromYggdrasil from '../components/Lyrics/TalesFromYggdrasil'
import TheShadowChapter from '../components/Lyrics/TheShadowChapter'
import TheStormKing from '../components/Lyrics/TheStormKing'
import SongOfNine from '../components/Lyrics/SongOfNine'

export default function Lyrics() {
  return (
    <>
      <Head>
        <title>
          HAVAMAL | Lyrics
        </title>
      </Head>
      <h1 className={styles.pageTitle}>
        Havamal Lyrics
      </h1>

      <Container>
        <Row>
          <Col sm={12} lg={6} className={styles.albumBlock}>
            <h2 className={styles.albumTitle}>
              The Storm King
            </h2>
            <TheStormKing />
          </Col>
          <Col sm={12} lg={6} className={styles.albumBlock}>
            <h2 className={styles.albumTitle}>
              Song of Nine
            </h2>
            <SongOfNine />
          </Col>
          <Col sm={12} lg={6} className={styles.albumBlock}>
            <h2 className={styles.albumTitle}>
              The Shadow Chapter
            </h2>
            <TheShadowChapter />
          </Col>
          <Col sm={12} lg={6} className={styles.albumBlock}>
            <h2 className={styles.albumTitle}>
              Tales From Yggdrasil
            </h2>
            <TalesFromYggdrasil />
          </Col>
          <Col sm={12} lg={6} className={styles.albumBlock}>
            <h2 className={styles.albumTitle}>
              Call of The North
            </h2>
            <CallOfTheNorth />
          </Col>
        </Row>
      </Container>
    </>
  )
}