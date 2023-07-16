import JSONData from './raids.json'
import styles from './raids.module.css'

export default function Raids() {
  return (
    <>
      <div className={styles.EmptyRaidContainer}>
              <p className={styles.NoRaids}>
                Currently no raids are scheduled. Check back soon!
              </p>
            </div>
      {/* {JSONData.raids.map((raids, index) => {
        return (
          <div
            key={`raids_id_${index}`}
            className={styles.RaidWrapper}
          >
            <div>
              <a
                href={raids.link}
                target="_blank"
                rel="noreferrer"
                className={styles.RaidContainer}
              >
                <div className={styles.DateTitle}>{raids.date}</div>
                <div className={styles.EventTitle}>{raids.event}</div>
                <div className={styles.LocationTitle}>{raids.location}</div>
              </a>
            </div>
          </div>
        )
      })} */}
    </>
  )
}
