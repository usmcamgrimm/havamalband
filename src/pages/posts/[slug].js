import fs from 'fs'
import matter from 'gray-matter'
import md from 'markdown-it'
import Image from 'next/image'
import styles from './posts.module.css'

export default function Post({ frontmatter, content }) {
  const {title, author, date, image} = frontmatter

  return (
    <main className={styles.postBody}>
      <Image
        src={`/${image}`}
        alt="This is the alt text"
        height={225}
        width={225}
      />
      <h1>{title}</h1>
      <h2>By: {author}</h2>
      <h2>{date}</h2>
      <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
    </main>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync('posts')
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const filename = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(filename);
  return {
    props: {
      frontmatter,
      content,
    },
  }
}
