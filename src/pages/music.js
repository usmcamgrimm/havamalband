import Head from 'next/head'
import Image from "next/legacy/image";
import styles from '../styles/music.module.css'
import styled from '@emotion/styled'
import { css } from '@emotion/css'

const AlbumImage = styled.span`
  & > span {
    box-shadow: 2px 4px 12px #000000;
    border-radius: 5px;
  }
  @media screen and (max-width: 500px) {
    margin: 0 auto;
    max-width: 90%;
  }
`;

const Line = styled.hr`
  width: 48%;
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid rgba(147, 147, 147, 0.4);
`;

export default function Music() {
  return (
    <>
      <Head>
        <title>
          HAVAMAL | Music
        </title>
      </Head>
      <h1 className={styles.pageTitle}>
        The Hymns of Havamal
      </h1>

      <section id="singleHymnsOfTheFallen">
        <div className={styles.albumContainer}>
          <AlbumImage>
            <Image
              src="/images/albums/hotf.jpg"
              height={500}
              width={500}
              alt="Hymns of the Fallen single cover"
            />
          </AlbumImage>
          <div className="albumDetails">
            <h2 className={styles.albumTitle}>
              Hymns of the Fallen
            </h2>
            <h3 className={styles.releaseInfo}>
              Art Gates Records | October 2025
            </h3>
            <iframe
              title="Hymns of the Fallen Sample on Spotify"
              src="https://open.spotify.com/embed/album/4KsEz7fAUhijJ8XTLzJTL7"
              width="325"
              height="360"
              allowtransparency="true"
              allow="encrypted-media"
              className={css`
                margin-left: 2rem;
                @media screen and (max-width: 768px){
                  margin-left: 0;
                }
              `}
            ></iframe>
          </div>
        </div>

        <Line />
      </section>

      <section id="singleSongOfNine">
        <div className={styles.albumContainer}>
          <AlbumImage>
            <Image
              src="/images/albums/son.jpg"
              height={500}
              width={500}
              alt="Song of Nine single image"
            />
          </AlbumImage>
          <div className="albumDetails">
            <h2 className={styles.albumTitle}>
              Song of Nine
            </h2>
            <h3 className={styles.releaseInfo}>
              Art Gates Records | March 2024
            </h3>
            <iframe
              title="Song of Nine Sample on Spotify"
              src="https://open.spotify.com/embed/album/0ZreewK1YIxSjezHMW3BxR"
              width="325"
              height="360"
              allowtransparency="true"
              allow="encrypted-media"
              className={css`
                margin-left: 2rem;
                @media screen and (max-width: 768px){
                  margin-left: 0;
                }
              `}
            ></iframe>
          </div>
        </div>

        <Line />
      </section>

      <section id="singleStormKing">
        <div className={styles.albumContainer}>
          <AlbumImage>
            <Image
              src="/images/albums/tsk.jpg"
              height={500}
              width={500}
              alt="The Storm King single image"
            />
          </AlbumImage>
          <div className="albumDetails">
            <h2 className={styles.albumTitle}>
              The Storm King
            </h2>
            <h3 className={styles.releaseInfo}>
              Art Gates Records | March 2024
            </h3>
            <iframe
              title="The Storm King Sample on Spotify"
              src="https://open.spotify.com/embed/album/119RbrOHLYst3nCOW87eWa"
              width="325"
              height="360"
              allowtransparency="true"
              allow="encrypted-media"
              className={css`
                margin-left: 2rem;
                @media screen and (max-width: 768px){
                  margin-left: 0;
                }
              `}
            ></iframe>
          </div>
        </div>

        <Line />
      </section>

      <section id="albumTSC">
        <div className={styles.albumContainer}>
          <AlbumImage>
            <Image
              src="/images/albums/tsc.jpg"
              height={500}
              width={500}
              alt="The Shadow Chapter album cover"
            />
          </AlbumImage>
          <div className="albumDetails">
            <h2 className={styles.albumTitle}>
              The Shadow Chapter
            </h2>
            <h3 className={styles.releaseInfo}>
              Art Gates Records | May 2021
            </h3>
            <iframe
              title="The Shadow Chapter Sample on Spotify"
              src="https://open.spotify.com/embed/album/1I4MAMVeh0dqfe0tz1f5Gh"
              width="325"
              height="360"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
              className={css`
                margin-left: 2rem;
                @media screen and (max-width: 768px){
                  margin-left: 0;
                }
              `}
            ></iframe>
          </div>
        </div>

        <Line />
      </section>

      <section id="albumTFY">
        <div className={styles.albumContainer}>
         <AlbumImage>
          <Image
              src="/images/albums/tfy.jpg"
              height={500}
              width={500}
              alt="Tales From Yggdrasil album cover"
            />
         </AlbumImage>
          <div className="albumDetails">
            <h2 className={styles.albumTitle}>
              Tales From Yggdrasil
            </h2>
            <h3 className={styles.releaseInfo}>
              Art Gates Records | June 2019
            </h3>
            <iframe
              title="Tales From Yggdrasil on Spotify"
              src="https://open.spotify.com/embed/album/6WIQW0JtBAgoKuUuuwclcP"
              width="325"
              height="360"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
              className={css`
                margin-left: 2rem;
                @media screen and (max-width: 768px){
                  margin-left: 0;
                }
              `}
            ></iframe>
          </div>
        </div>

        <Line />
      </section>

      <section id="albumCOTN">
        <div className={styles.albumContainer}>
          <AlbumImage>
            <Image
              src="/images/albums/cotn.jpg"
              height={500}
              width={500}
              alt="Call of The North album cover"
            />
          </AlbumImage>
          <div className="albumDetails">
            <h2 className={styles.albumTitle}>
              Call of The North
            </h2>
            <h3 className={styles.releaseInfo}>
              Independent | June 2017
            </h3>
            <iframe
              title="Cal of The North on Spotify"
              src="https://open.spotify.com/embed/album/2GrDVeDkYT0IEIHiwNeaQz"
              width="325"
              height="360"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
              className={css`
                margin-left: 2rem;
                @media screen and (max-width: 768px){
                  margin-left: 0;
                }
              `}
            ></iframe>
          </div>
        </div>
      </section>
    </>
  )
}
