import Head from 'next/head'
import Image from 'next/image'
import HavamalVideo from '../components/video/HavamalVideo'
import Raids from '../components/raids/Raids'
import HavamalLinks from '../components/linkLayout/HavamalLinks'
import styles from '../styles/Home.module.css'
import havamalPhoto from '../../public/images/bandPhoto.jpg'
import havamalLogo from '../../public/images/havamal.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HAVAMAL | Home</title>
        <meta name="description" content="Website for the Swedish band Havamal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section id={styles.mainImage}>
          <div className={styles.bandPhoto}>
            <Image
              src={havamalPhoto}
              sizes="100vw"
              alt="The members of Havamal"
              priority
              style={{
                width: '80vw',
                height: '40vw',
              }}
            />
          </div>
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