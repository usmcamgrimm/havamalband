import Head from 'next/head'
import styles from '../styles/news.module.css'
import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import Image from 'next/image'

export default function News({ posts }) {
  return (
    <>
      <Head>
        <title>
          HAVAMAL | News
        </title>
      </Head>
      <h1 className={styles.pageTitle}>Havamal Updates</h1>

      <main>
        <div className={styles.postGrid}>
          {posts.map(post => {
            const { slug, frontmatter } = post
            const { title, author, image } = frontmatter

            return (
              <article key={title}>
                <div className={styles.postLink}>
                  <Link href={`/posts/${slug}`}>
                    <h2 className={styles.postTitle}>{title}</h2>
                  </Link>
                  <h3 className={styles.postAuthor}>By: {author}</h3>
                  <Image 
                    src={post.frontmatter.image}
                    layout="responsive"
                    objectFit="contain"
                    alt="Image from post"
                    height="100%"
                    width="100%"
                  />
                </div>
              </article>
            )
          })}
        </div>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync('posts')

  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '')
    const readFile = fs.readFileSync(`posts/${filename}`, 'utf-8')
    const { data: frontmatter } = matter(readFile)

    return { slug, frontmatter }
  })

  return {
    props: {
      posts,
    },
  }
}