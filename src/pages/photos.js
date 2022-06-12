import Head from 'next/head'
import Layout from '../components/layout/Layout'
import styles from '../styles/photos.module.css'
import Image from 'next/image'

export default function Gallery() {
  return (
    <Layout>
      <Head>
        <title>
          HAVAMAL | Gallery
        </title>
      </Head>
      <h1 className={styles.pageTitle}>Gallery</h1>
    </Layout>
  )
}
