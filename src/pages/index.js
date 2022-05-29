import Head from 'next/head'
import Image from 'next/image'
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
        <Image 
          src="/images/bandPhoto.jpg"
          height={533}
          width={780}
          alt="The members of Havamal"
        />
        <h1 className={styles.title}>
          Hail, Hordes of Havamal!
        </h1>
      </main>
    </div>
  )
}
