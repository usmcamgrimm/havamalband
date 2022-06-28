import Head from 'next/head'
import Layout from '../components/layout/Layout'
import styles from '../styles/Home.module.css'

export default function News() {
  return (
    <>
      <Head>
        <title>
          HAVAMAL | News
        </title>
      </Head>
      <h1 className={styles.pageTitle}>Havamal Updates</h1>
    </>
  )
}