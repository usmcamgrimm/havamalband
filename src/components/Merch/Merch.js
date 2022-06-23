import styles from './merch.module.css'

export default function Merch () {
  return(
    <div className={styles.merchWrapper}>
      <h2 className={styles.sectionHeader}>
        Havamal Official Merch
      </h2>

      <a className={styles.merchLink}
        href="https://havamal.bandcamp.com/merch"
        target="_blank"
        rel="noreferrer"
        aria-label="Havamal merch on Bandcamp"
      >
        <p>Havamal Bandcamp Store</p>
      </a>

      <a className={styles.merchLink}
        href="https://artgatesrecords.com/store/en/havamal"
        target="_blank"
        rel="noreferrer"
        aria-label="Havamal merch on Art Gates Records"
      >
        <p>Havamal Store at Art Gates Records</p>
      </a>
    </div>
  )
}