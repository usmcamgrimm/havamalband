import Head from 'next/head'
import Layout from '../components/layout/Layout'
import styles from '../styles/resources.module.css'
import ContactForm from '../components/ContactForm/ContactForm'
import ContactLinks from '../components/ContactLinks/ContactLinks'


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

      <section id="contactArea">
        <p className={styles.contactHeader}>
          Submit the form or click a link to send a message to Havamal!
        </p>
        <div className={styles.contactContainer}>
          <div className={styles.contactBox}>
            <ContactForm />
          </div>
          <div className={styles.contactBox}>
            <ContactLinks />
          </div>
        </div>
      </section>
    </Layout>
  )
}
