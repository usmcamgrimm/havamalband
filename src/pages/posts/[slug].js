import fs from 'fs'
import matter from 'gray-matter'
import md from 'markdown-it'

export default function Post({ frontmatter, content }) {
  const {title, author, date, image} = frontmatter

  return (
    <main>
      <img src={image}/>
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
