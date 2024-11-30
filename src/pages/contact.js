import Head from 'next/head'
import styles from '../styles/contact.module.css'
import ContactForm from '../components/ContactForm/ContactForm'
import ContactLinks from '../components/ContactLinks/ContactLinks'
import Merch from '../components/Merch/Merch'
import Horde from '../components/Horde/Horde'
import HavamalLinks from '../components/linkLayout/HavamalLinks'


export default function Contact() {
  return (
    <>
      <Head>
        <title>
          HAVAMAL | Contact
        </title>
      </Head>
      <h1 className={styles.pageTitle}>
        Contact Information
      </h1>

      <section id="contactArea">
        <div className={styles.contactContainer}>
          <div className={styles.contactBox}>
            <ContactForm />
          </div>
          <div className={styles.contactBox}>
            <ContactLinks />
          </div>
        </div>
      </section>

      <section id="merch_horde">
        <div className={styles.merchHorde}>
          <Merch />
          <Horde />
        </div>
      </section>

      <section className={styles.links}>
        <HavamalLinks />
      </section>
    </>
  )
}
