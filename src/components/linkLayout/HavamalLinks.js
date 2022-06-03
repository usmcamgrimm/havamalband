import Image from 'next/image'
import styles from './havamalLinks.module.css'

export default function HavamalLinks() {
  return (
    <div className={styles.LinkGrid}>
      <div className={linkItem}>
        <a
          href="https://havamal.bandcamp.com/" 
          target="_blank" 
          rel="noreferrer" 
          aria-label="Bandcamp"
        >
          <Image
            src="/images/icons/bandcamp.png"
            alt="bandcamp icon"
            width={96}
            height={96}
          />
        </a>
      </div>
    </div>
  )
}