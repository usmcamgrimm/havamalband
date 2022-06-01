import JSONData from './raids.json'
import styles from './raids.module.css'
import styled from '@emotion/styled'

export default function Raids() {
  return (
    <>
      {JSONData.raids.map((raids, index) => {
        return (
          <div
            key={`raids_id_${index}`}
            className={styles.RaidWrapper}
          >
            <div
              className={styles.RaidContainer}
              as="a"
              href={raids.link}
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.DateTitle}>{raids.date}</div>
              <div className={styles.EventTitle}>{raids.event}</div>
              <div className={styles.LocationTitle}>{raids.location}</div>
            </div>
          </div>
        )
      })}
    </>
  )
}
