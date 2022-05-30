import Head from 'next/head'
import Layout from '../components/layout/Layout'
import styles from '../styles/Home.module.css'

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
