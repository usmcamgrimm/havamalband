import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout/Layout'
import HavamalVideo from '../components/video/HavamalVideo'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
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
        </main>
      </div>
    </Layout>
  )
}