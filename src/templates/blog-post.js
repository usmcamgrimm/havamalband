import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from "../components/layout"
import Seo from "../components/seo"
import { css } from '@emotion/react'

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 
            css={css`
              text-align:center;
              color: #66add9;
              font-family: grenze;
              font-weight: normal;
            `}
            itemProp="headline"
          >{post.frontmatter.title}</h1>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
          css={css`
            color: #ffffff;
            font-family: grenze;
            padding: 12px 72px;
            font-size: 1.4rem;
          `}
        />
        <hr />
      </article>
      <nav className="blog-post-nav">
        <ul
          css={css`
            display: flex;
            flex-wrap: nowrap;
            justify-content: space-evenly;
            align-items: center;
            list-style: none;
            padding: 24px;
          `}
        >
          <li>
            {previous && (
              <Link css={css`text-decoration: none`} to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link css={css`text-decoration: none`} to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
