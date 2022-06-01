import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout/Layout'
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
          <div className={styles.bandPhoto}>
            <Image
              src="/images/bandPhoto.jpg"
              height={710}
              width={1080}
              alt="The members of Havamal"
            />
          </div>
          <h1 className={styles.title}>
            Hail, Hordes of Havamal!
          </h1>
        </main>
      </div>
    </Layout>
  )
}