import Image from "next/image";
import styles from './horde.module.css'

export default function Horde() {
  return(
    <div className={styles.joinHorde}>
      <h2 className={styles.sectionHeader}>
        Join the HOrdes of Havamal
      </h2>

      <a
        href="https://www.facebook.com/groups/338634033565609"
        target="_blank"
        rel="noreferrer"
        aria-label="Hordes of Havamal"
      >
        <Image
          src="/images/icons/horde.png"
          width={225}
          height={75}
          alt="Hordes of Havamal Facebook banner"
        />
      </a>
    </div>
  )
}