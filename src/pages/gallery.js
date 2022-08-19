import Head from 'next/head'
import styles from '../styles/gallery.module.css'
import Image from 'next/image'
import Masonry from 'react-smart-masonry'

export default function Gallery({ photos }) {
  return (
    <>
      <Head>
        <title>
          HAVAMAL | Gallery
        </title>
      </Head>
      <h1 className={styles.pageTitle}>Gallery</h1>

      <section id="gallery">
        <ul className={styles.photos}>
          <Masonry columns={5} gap={20}>
            {photos.map(photo => {
              return (
                <li key={photo.id}>
                  <div className={styles.havamalPhoto}>
                    <Image
                      src={photo.photo}
                      width={photo.width} 
                      height={photo.height}  
                      alt="Havamal photos"
                    />
                  </div>
                </li>
              )
            })}
          </Masonry>
          
        </ul>
      </section>
    </>
  )
}

export async function getStaticProps() {
  const results = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image/?max_results=150`, {
    headers: {
      Authorization: `Basic ${Buffer.from(process.env.CLOUDINARY_API_KEY + ':' + process.env.CLOUDINARY_API_SECRET).toString('base64')}`
    }
  }).then(r => r.json());
  
  const { resources } = results
  const photos = resources.map(resource => {
    const { width, height } = resource
    return {
      id: resource.asset_id,
      photo: resource.secure_url,
      height,
      width
    }
  })
  return {
    props: {
      photos
    }
  }
}
