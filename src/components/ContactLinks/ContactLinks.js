import styles from './contactLinks.module.css'

export default function ContactLinks() {
  return (
    <div className={styles.contact}>
      <a
        href="https://www.facebook.com/Havamalofficial"
        target="_blank" 
        rel="noreferrer" 
        aria-label="Official Facebook page of Havamal"
        className={styles.siteLinks}
      >
        <p className={styles.contactText}>Havamal Official on Facebook</p>
      </a>
      <a
        href="mailto:havamal@email.com"
        aria-label="Havamal Email"
        className={styles.messageLinks}
      >
        <p className={styles.contactText}>havamal[at]email.com</p>
      </a>

      <a
        href="https://artgatesrecords.com/"
        target="_blank" 
        rel="noreferrer" 
        aria-label="Art Gates Records website"
        className={styles.siteLinks}
      >
        <p className={styles.contactText}>Art Gates Records</p>
      </a>
      <a
        href="mailto:info@artgatesrecords.com"
        aria-label="Email Art gates Records"
        className={styles.messageLinks}
      >
        <p className={styles.contactText}>info[at]artgatesrecords.com</p>
      </a>

      <a
        href="https://www.facebook.com/HellFrogPromotion/"
        target="_blank" 
        rel="noreferrer" 
        aria-label="Official Facebook page of Hell Frog Promotion"
        className={styles.siteLinks}
      >
        <p className={styles.contactText}>Hell Frog Promotion</p>
      </a>
      <a
        href="mailto:hellfrog.prom@hotmail.com"
        aria-label="Email Hell Frog Promotion"
        className={styles.messageLinks}
      >
        <p className={styles.contactText}>hellfrog.prom[at]hotmail.com</p>
      </a>
    </div>
  )
}