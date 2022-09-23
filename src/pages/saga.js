import Head from 'next/head'
import styles from '../styles/saga.module.css'
import HymnWeavers from '../components/hymnWeavers/HymnWeavers'

export default function Saga() {
  return (
    <>
      <Head>
        <title>
          HAVAMAL | Saga
        </title>
      </Head>
      <h1 className={styles.sectionHeader}>The Hymn-Weavers</h1>
      
      <section id="hymnWeavers">
        <HymnWeavers />
      </section>

      <section id="HavamalSaga">
        <h2 className={styles.sectionHeader}>
          The Saga of Havamal
        </h2>
        <div className={styles.sagaContainer}>
          <p className={styles.sagaText}>
            Kjell Gilliusson and Lennie Spetze are hailed as the founders of Havamal. They formed the band in Stockholm, Sweden in 2016 and soon invited Björn Larsson. Andreas Herlogsson would join later, after the departure of Rodrigo Valenzuela. Sandra Wallo took over for Pontus Knutsson, until her departure in 2020. Now hail Tino Vesanen on bass!
          </p>

          <p className={styles.sagaText}>
            The unique sound of Havamal is derived from their wide and varying musical influences. Their mix of symphonic, brutal, melodic death metal is unique and makes themn stand out as masters of their craft. Their first release, an EP titled <strong>Call of The North</strong>, was released independently in 2017, and was an overwhelming success. Conducting raids throughout Sweden, Havamal was invited to play at Northern Blasphemy and the Wacken Metal Battle.
          </p>
                  
          <p className={styles.sagaText}>
            Signed by Art Gates Records in 2019, Havamal&apos;s first full-length album, <strong>Tales From Yggdrasil</strong>, was released. Once again proving their musical prowess, Havamal unleashed many raids throughout their home country and spread their music. 
          </p>

          <p className={styles.sagaText}>
            Havamal signed once more with Art Gates Records, and their second full-length album, <strong>The Shadow Chapter</strong>, was released in May 2021. Entering into a new alliance with HellFrog Promotion, Havamal raided at <strong>Raise Your Horns</strong>. Now, the hymn-weavers look to expand their influence even further! Havamal is now in the midst of The Shadow ChapTour, conducting raids throughout Europe! Hopefully we will soon see Havamal set sail on their longships, expanding their reach and raiding across the globe!
          </p>
        </div>

        <p className={styles.hail}>
          Hail Havamal!
        </p>
      </section>
    </>
  )
}
