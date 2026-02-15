import Image from "next/image";
import styles from './hymnWeavers.module.css'
import styled from '@emotion/styled'

const BandImage = styled.div`
  max-width: 500px;
  border-radius: 5px;
  box-shadow: 0 2px 6px #000000;
  overflow: hidden;
`;

export default function HymnWeavers() {
  return (
    <div className={styles.band}>
      <BandImage>
        <Image
          src="/images/band-photos/lennie.jpg"
          alt="Lennie Spetze"
          height={540}
          width={810}
          style={{ width: "100%", height: "auto" }}
        />
      </BandImage>
      <BandImage>
        <Image
          src="/images/band-photos/stefan.jpg"
          alt="Stefan Peltonen"
          height={540}
          width={540}
          style={{ width: "100%", height: "auto" }}
        />
      </BandImage>
      <BandImage>
        <Image
          src="/images/band-photos/bjorn.jpg"
          alt="Björn Larsson"
          height={540}
          width={364}
          style={{ width: "100%", height: "auto" }}
        />
      </BandImage>
      <BandImage>
        <Image
          src="/images/band-photos/kjell.jpg"
          alt="Kjell Gilliusson"
          height={540}
          width={539}
          style={{ width: "100%", height: "auto" }}
        />
      </BandImage>
      <BandImage>
        <Image
          src="/images/band-photos/tino.jpg"
          alt="Tino Vesanen"
          height={540}
          width={810}
          style={{ width: "100%", height: "auto" }}
        />
      </BandImage>
    </div>
  )
}