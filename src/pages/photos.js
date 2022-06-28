import Head from 'next/head'
import styles from '../styles/photos.module.css'
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
    </>
  )
}
