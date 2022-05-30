import Head from 'next/head'
import Layout from '../components/layout/Layout'
import styles from '../styles/Home.module.css'

export default function Resources() {
  return (
    <Layout>
      <Head>
        <title>
          HAVAMAL | Resources
        </title>
      </Head>
      <h1 className={styles.pageTitle}>Resources</h1>
    </Layout>
  )
}
