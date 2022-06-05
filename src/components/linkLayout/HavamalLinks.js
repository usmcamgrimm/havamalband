import Image from 'next/image'
import styles from './havamalLinks.module.css'

export default function HavamalLinks() {
  return (
    <>
      <div className={styles.LinkContainer}>
        <div className={styles.LinkItem}>
          <a
            href="https://havamal.bandcamp.com/" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="Bandcamp"
          >
            <Image
              className={styles.LinkIcon}
              src="/images/icons/bandcamp.png"
              alt="bandcamp icon"
              width={48}
              height={48}
            />
          </a>
          <a
            href="https://bandbond.com/" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="Bandbond"
          >
            <Image
              className={styles.LinkIcon}
              src="/images/icons/bandbond.png"
              alt="bandbond icon"
              width={48}
              height={48}
            />
          </a>
          <a
            href="https://www.facebook.com/Havamalofficial" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="Facebook"
          >
            <Image
              className={styles.LinkIcon}
              src="/images/icons/facebook.png"
              alt="facebook icon"
              width={48}
              height={48}
            />
          </a>
          <a
            href="https://www.instagram.com/officialhavamal" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="Instagram"
          >
            <Image
              className={styles.LinkIcon}
              src="/images/icons/instagram.png"
              alt="instagram icon"
              width={48}
              height={48}
            />
          </a>
          <a
            href="https://open.spotify.com/artist/6ldp4tSRbPDs5VA2w9KXmD?si=2RV3id28Rems8KVYhqp4BQ&dl_branch=" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="Havamal on Spotify"
          >
            <Image
              className={styles.LinkIcon}
              src="/images/icons/spotify.png"
              alt="spotify icon"
              width={48}
              height={48}
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCmGfesgQAVTgpJqGf9dt3wA/videos" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="YouTube"
          >
            <Image
              className={styles.LinkIcon}
              src="/images/icons/youtube.png"
              alt="youtube icon"
              width={48}
              height={48}
            />
          </a>
        </div>
      </div>
      <div className={styles.linkGrid}>
        <div className={styles.BannerLink}>
          <a
            href="https://artgatesrecords.com/artists/havamal" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="Art Gates Records"
          >
            <Image
              src="/images/icons/AGR.png"
              alt="art gates records icon"
              width={400}
              height={128}
            />
          </a>
        </div>
      </div>
    </>
  )
}