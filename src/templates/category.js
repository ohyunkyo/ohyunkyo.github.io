import React from "react"
import { graphql } from "gatsby"
import { Container } from "react-bootstrap"

import NavBar from "../components/NavBar"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PostsList from "../components/PostsList"

const CategoryTemplate = ({ location, pageContext, data }) => {
  const { category } = pageContext
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={`"${category}" 카테고리 목록`} />
      <NavBar />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">Category: {category}</h1>
        </header>
        <PostsList postEdges={data.allMarkdownRemark.edges} />
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query CategoryPage($category: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      filter: { fields: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            category
          }
          excerpt
          timeToRead
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

export default CategoryTemplate