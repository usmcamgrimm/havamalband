import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Havamal</title>
        <meta name="description" content="Website for the Swedish band Havamalp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hail, Hordes of Havamal!
        </h1>
      </main>
    </div>
  )
}
