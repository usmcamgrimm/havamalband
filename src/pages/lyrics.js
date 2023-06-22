import Head from 'next/head'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../styles/lyrics.module.css'
import CallOfTheNorth from '../components/Lyrics/CallOfTheNorth'
import TalesFromYggdrasil from '../components/Lyrics/TalesFromYggdrasil'
import TheShadowChapter from '../components/Lyrics/TheShadowChapter'

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

      <Container fluid>
        <Row>
          <Col sm={12} lg={4}>
            <h2 className={styles.albumTitle}>
              Call of The North
            </h2>
            <CallOfTheNorth />
          </Col>
          <Col sm={12} lg={4}>
            <h2 className={styles.albumTitle}>
              Tales From Yggdrasil
            </h2>
            <TalesFromYggdrasil />
          </Col>
          <Col sm={12} lg={4}>
            <h2 className={styles.albumTitle}>
              The Shadow Chapter
            </h2>
            <TheShadowChapter />
          </Col>
        </Row>
      </Container>
    </>
  )
}