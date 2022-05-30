import Head from 'next/head'
import Layout from '../components/layout/Layout'
import styles from '../styles/Home.module.css'

export default function Music() {
  return (
    <Layout>
      <Head>
        <title>
          HAVAMAL | Music
        </title>
      </Head>
      <h1 className={styles.pageTitle}>The Hymns of Havamal</h1>
    </Layout>
  )
}
