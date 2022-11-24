import Head from 'next/head'
import Image from "next/legacy/image";
import HavamalVideo from '../components/video/HavamalVideo'
import Raids from '../components/raids/Raids'
import HavamalLinks from '../components/linkLayout/HavamalLinks'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HAVAMAL | Home</title>
        <meta name="description" content="Website for the Swedish band Havamalp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section id={styles.mainImage}>
          <div className={styles.bandPhoto}>
            <Image
              src="/images/bandPhoto.jpg"
              height={710}
              width={1080}
              alt="The members of Havamal"
            />
          </div>
          <div className={styles.logo}>
            <Image
              src="/images/havamal.png"
              height={539}
              width={1024}
              alt="The Havamal logo"
            />
          </div>
        </section>
        <h1 className={styles.title}>
          Hail, Hordes of Havamal!
        </h1>

        <section className={styles.VideoContainer}>
          <HavamalVideo
            videoURL="https://www.youtube.com/embed/w6Gy4ZGG5eg"
            videoTitle="Nidhöggr"
          />
        </section>

        <section className={styles.raids} id="raids">
          <h2 className={styles.sectionTitle}>
            Upcoming Raids
          </h2>
          <Raids />
        </section>

        <section className={styles.links}>
          <h2 className={styles.sectionTitle}>
            Follow Havamal
          </h2>
          <HavamalLinks />
        </section>
      </main>
    </div>
  )
}