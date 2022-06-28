import Head from 'next/head'
import styles from '../styles/Home.module.css'
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
        {posts.map(post => {
          const { slug, frontmatter } = post
          const { title, author, date, image } = frontmatter

          return <article key={title}>
            <Link href={`/posts/${slug}`}>
              <h2>{title}</h2>
            </Link>
              <h3>By: {author}</h3>
          </article>
        })}
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