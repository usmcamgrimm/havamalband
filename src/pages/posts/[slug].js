import fs from 'fs'
import matter from 'gray-matter'
import md from 'markdown-it'
import Image from "next/image";
import styles from './posts.module.css'

export default function Post({ frontmatter, content }) {
  const {title, author, date, image} = frontmatter

  return (
    <main className={styles.wrapper}>
      <div className={styles.postBody}>
        <h1 className={styles.postTitle}>{title}</h1>
        <h2 className={styles.postAuthor}>{author}</h2>
        <h2 className={styles.postDate}>{date}</h2>
        <div className={styles.postContent} dangerouslySetInnerHTML={{ __html: md().render(content) }} />
        <div className={styles.imageWrapper} style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
          <Image
            src={image}
            alt="Havamal updates"
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
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
