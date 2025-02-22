import Head from 'next/head'
import Image from 'next/image'
import HavamalVideo from '../components/video/HavamalVideo'
import Raids from '../components/raids/Raids'
import styles from '../styles/Home.module.css'
import havamalPhoto from '../../public/images/bandPhoto2025.jpg'
import havamalLogo from '../../public/images/havamal.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HAVAMAL | Home</title>
        <meta name="description" content="Havamal: Epic melodic death metal from the heart of Sweden, inspired by Viking lore and Norse mythology. Currently in the studio, recording their third full-length album." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section id={styles.mainImage}>
          <Image
            src={havamalPhoto}
            alt="The members of Havamal"
            quality={100}
            priority={true}
            className={styles.havamalPhoto}
          />
          <div className={styles.logo}>
            <Image
              src={havamalLogo}
              alt="The Havamal logo"
              className={styles.havamalLogo}
            />
          </div>
        </section>
        <h1 className={styles.title}>
          Hail, Hordes of Havamal!
        </h1>

        <section className={styles.VideoContainer}>
          <HavamalVideo
            videoURL="https://www.youtube.com/embed/cX9duzn8BaM"
            videoTitle="The Storm King"
          />
        </section>

        <section className={styles.raids} id="raids">
          <h2 className={styles.sectionTitle}>
            Upcoming Raids
          </h2>
          <Raids />
        </section>
      </main>
    </div>
  )
}