import Head from 'next/head'
import Layout from '../components/layout/Layout'
import styles from '../styles/Home.module.css'

export default function Saga() {
  return (
    <Layout>
      <Head>
        <title>
          HAVAMAL | Saga
        </title>
      </Head>
      <h1 className={styles.pageTitle}>The Havamal Saga</h1>
    </Layout>
  )
}
