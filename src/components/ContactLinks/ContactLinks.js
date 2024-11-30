import styles from './contactLinks.module.css'

export default function ContactLinks() {
  return (
    <div className={styles.contact}>
      <p className={styles.contactText}>
        Contact Havamal
      </p>
      <a
        href="mailto:havamal@email.com"
        aria-label="Havamal Email"
        className={styles.contactsLinks}
      >
        <p className={styles.contactTextLink}>havamal@email.com</p>
      </a>

      <p className={styles.contactText}>
        Art Gates Records
      </p>
      <a
        href="mailto:info@artgatesrecords.com"
        aria-label="Email Art gates Records"
        className={styles.contactsLinks}
      >
        <p className={styles.contactTextLink}>info@artgatesrecords.com</p>
      </a>

      <a
        href="https://www.facebook.com/HellFrogPromotion/"
        target="_blank" 
        rel="noreferrer" 
        aria-label="Official Facebook page of Hell Frog Promotion"
        className={styles.contactsLinks}
      >
        <p className={styles.contactTextHF}>Hell Frog Promotion</p>
      </a>
      <a
        href="mailto:hellfrog.prom@hotmail.com"
        aria-label="Email Hell Frog Promotion"
        className={styles.contactsLinks}
      >
        <p className={styles.contactTextLink}>hellfrog.prom@hotmail.com</p>
      </a>
    </div>
  )
}