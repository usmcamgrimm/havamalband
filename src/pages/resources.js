import Head from 'next/head'
import Layout from '../components/layout/Layout'
import styles from '../styles/resources.module.css'
import ContactForm from '../components/ContactForm/ContactForm'


export default function Resources() {
  return (
    <Layout>
      <Head>
        <title>
          HAVAMAL | Resources
        </title>
      </Head>
      <h1 className={styles.pageTitle}>
        Contact Information
      </h1>
      <ContactForm />
    </Layout>
  )
}
