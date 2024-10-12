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
          Forging Legends: The Thunderous Saga of Havamal
        </h2>
        <div className={styles.sagaContainer}>
          <h3 className={styles.sagaChapter}>The Birth of Legends</h3>
          <p className={styles.sagaText}>
            In the hallowed halls of Stockholm, Sweden, 2016 witnessed the cosmic alignment that brought forth <strong>Havamal</strong>. Visionary warriors <strong>Kjell Gilliusson</strong> and <strong>Lennie Spetze</strong> joined forces, their creative energies colliding like Mjölnir striking Jörmungandr! As if summoned by the Allfather himself, the mighty <strong>Björn Larsson</strong> soon answered their call to arms. The saga grew even more epic as <strong>Andreas Herlogsson</strong> stormed into their ranks, his drumming a force of nature that shook the very roots of Yggdrasil!
          </p>

          <p className={styles.sagaText}>
            But the tale of <strong>Havamal</strong> is one of constant evolution, a shape-shifting beast that grows ever stronger. <strong>Sandra Wallo</strong>&apos;s fierce presence graced their lineup, her bass lines rumbling like Thor&apos;s chariot across storm-wracked skies. And now, as if blessed by the Norns themselves, <strong>Tino Vesanen</strong> wields the bass, his thunderous tones the very heartbeat of Havamal&apos;s unstoppable sonic onslaught!
          </p>

          <h3 className={styles.sagaChapter}>A Sound Forged in Valhalla</h3>  
          <p className={styles.sagaText}>
            Odin himself would weep with joy at the glorious racket <strong>Havamal</strong> conjures! Their sound is a maelstrom of metal mastery, drawing power from the very essence of Norse mythology and fusing it with modern brutality. Symphonic grandeur crashes against crushing riffs, while melodies soar like Valkyries across blood-soaked battlefields. <strong>Havamal</strong> doesn&apos;t just play metal – they summon the very spirit of Viking warfare through their instruments!
          </p>

          <h3 className={styles.sagaChapter}>The Saga Unfolds</h3> 
          <p className={styles.sagaText}>
            The year 2017 saw <strong>Havamal</strong>&apos;s battle cry first echo across the frozen North. Their EP, &quot;<strong>Call of the North</strong>,&quot; burst forth like wildfire, an irresistible clarion call that set the metal world ablaze! Armies of fans flocked to their banner as Havamal carved a path of glory across Sweden, laying waste to stages at Northern Blasphemy and earning the right to test their mettle at the legendary <strong>Wacken Metal Battle</strong>!
          </p>

          <p className={styles.sagaText}>
            Victory begets victory, and in 2019, the mighty Art Gates Records recognized <strong>Havamal</strong>&apos;s unstoppable potential. Under this new alliance, &quot;<strong>Tales from Yggdrasil</strong>&quot; was unleashed – a full-length opus that shook the foundations of Midgard itself! The hymn-weavers&apos; fame spread like Odin&apos;s wisdom through the cosmos, their music a triumphant war cry that echoed across their homeland and beyond, igniting the souls of all who heard it. Like a glorious tidal wave of pure Viking spirit, <strong>Havamal</strong>&apos;s renown swept across the land, leaving legions of awestruck fans in its wake!
          </p>

          <p className={styles.sagaText}>
            But <strong>Havamal</strong>&apos;s hunger for conquest knows no bounds! 2021 saw the emergence of &quot;<strong>The Shadow Chapter</strong>,&quot; a darkness given form through blasting beats and scorching riffs. <strong>Hell Frog Promotion</strong> joined their hordes, leading to a triumphant raid upon the <strong>Raise Your Horns</strong> festival – truly, no stage is safe from <strong>Havamal</strong>&apos;s sonic domination!
          </p>

          <p className={styles.sagaText}>
            The European <strong>Shadow ChapTour</strong> followed, a Viking longship of pure metal sailing across the continent, leaving audiences spellbound in their wake. France and Germany trembled before <strong>Havamal</strong>&apos;s might, as new legions of fans swore fealty to these masters of melodic death metal!
          </p>

          <h3 className={styles.sagaChapter}>The Storm Approaches</h3> 
          <p className={styles.sagaText}>
            Ragnarök itself seems to approach as <strong>Havamal</strong>&apos;s power grows ever stronger! March 2024 will see twin hammers fall – &quot;<strong>The Storm King</strong>&quot; and &quot;<strong>Song of Nine</strong>&quot; shall crash upon mortal ears like the war horns of the Æsir! And as if that weren&apos;t enough to make the heavens quake, the <strong>Hel Over Europe</strong> tour looms on the horizon, promising to reduce the continent to a smoldering crater of headbanging ecstasy!
          </p>

          <h3 className={styles.sagaChapter}>A Warrior&apos;s Farewell and a New Dawn</h3> 
          <p className={styles.sagaText}>
            Even legends must face change, and so it is with heavy hearts but unbowed spirits that Havamal bids farewell to their brother-in-arms, Andreas. His final battle alongside the band shall be etched in the annals of metal history – the <strong>Månegarm Open Air</strong> and <strong>Palatset</strong> in Linköping will bear witness to his last stand, a performance that will shake Valhalla&apos;s very gates!
          </p>

          <p className={styles.sagaText}>
            But from this glorious end springs a new beginning! Raise your horns and roar a welcome to <strong>Stefan Peltonen</strong>, the new drumserker whose thunderous beats shall drive <strong>Havamal</strong> to even greater heights of metal madness!
          </p>

          <p className={styles.sagaText}>
            Raise your horns, mortal listeners, for <strong>Havamal</strong>&apos;s journey has only just begun! The nine worlds will tremble, the World Tree will shake, and the halls of Valhalla will echo with their battle hymns for eternity!
          </p>
        </div>

        <p className={styles.hail}>
          Hail Havamal!
        </p>
      </section>
    </>
  )
}