import Head from 'next/head'
import styles from '../styles/lyrics.module.css'
import CallOfTheNorth from '../components/Lyrics/CallOfTheNorth'

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

      <section id="Album1">
        <h2 className={styles.albumTitle}>
          Call of The North
        </h2>
        <CallOfTheNorth />
      </section>
    </>
  )
}