import Head from 'next/head'
import Layout from '../components/layout/Layout'
import styles from '../styles/saga.module.css'
import HymnWeavers from '../components/hymnWeavers/HymnWeavers'
import Image from 'next/image'

export default function Saga() {
  return (
    <Layout>
      <Head>
        <title>
          HAVAMAL | Saga
        </title>
      </Head>
      <h1 className={styles.sectionHeader}>The Hymn-Weavers</h1>
      
      <section id="hymnWeavers">
        <HymnWeavers />
      </section>
    </Layout>
  )
}
