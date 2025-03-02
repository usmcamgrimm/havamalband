import fs from 'fs'
import matter from 'gray-matter'
import md from 'markdown-it'
import Image from "next/legacy/image";
import styles from './posts.module.css'

export default function Post({ frontmatter, content }) {
  const {title, author, date, image} = frontmatter

  return (
    <main className={styles.wrapper}>
      <div className={styles.postBody}>
        <h1 className={styles.postTitle}>{title}</h1>
        <h2 className={styles.postAuthor}>By: {author}</h2>
        <h2 className={styles.postDate}>{date}</h2>
        <div className={styles.postContent} dangerouslySetInnerHTML={{ __html: md().render(content) }} />
        <div className={styles.imageWrapper}>
          <Image
            src={image}
            alt="Havamal updates"
            layout="responsive"
            objectFit="contain"
            height="100%"
            width="100%"
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
