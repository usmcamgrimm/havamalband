import Head from 'next/head'
import styles from '../styles/gallery.module.css'
import Image from 'next/image'

export default function Gallery() {
  return (
    <>
      <Head>
        <title>
          HAVAMAL | Gallery
        </title>
      </Head>
      <h1 className={styles.pageTitle}>Gallery</h1>

      <section id="gallery">
        <div className={styles.card}>
          <Image
            src="/stock_logo.jpg"
            alt="Havamal logo"
            width={433}
            height={443}
          />
          <h3>Local Image</h3>
        </div>
      </section>
    </>
  )
}
