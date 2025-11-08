import Head from 'next/head'
import styles from '../styles/news.module.css'
import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import Image from "next/image";
import { DateTime } from 'luxon'

export default function News({ posts }) {
  const sortPostsByDate = posts.sort((a, b) => {
    const beforeDate = DateTime.fromFormat(a.frontmatter.date, 'm-d-yyyy')
    const afterDate = DateTime.fromFormat(b.frontmatter.date, 'm-d-yyyy')
    return afterDate - beforeDate
  })
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
          {posts && sortPostsByDate.map(post => {
            const { slug, frontmatter } = post
            const { title, author, image } = frontmatter

            return (
              <article key={title}>
                <div className={styles.postLink}>
                  <Link
                    className={styles.linkToPost}
                    href={`/posts/${slug}`}>
                    <h2 className={styles.postTitle}>{title}</h2>
                    <h3 className={styles.postAuthor}>{author}</h3>
                    <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
                      <Image 
                        src={post.frontmatter.image}
                        fill
                        style={{ objectFit: 'contain' }}
                        alt="Image from post"
                      />
                    </div>
                  </Link>
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