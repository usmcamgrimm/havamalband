import Image from 'next/image'
import styles from './hymnWeavers.module.css'

export default function HymnWeavers() {
  return (
    <span className={styles.band}>
      <Image
        src="/images/band-photos/lennie.jpg"
        alt="Lennie Spetze"
        height={405}
        width={270}
      />
    </span>
  )
}