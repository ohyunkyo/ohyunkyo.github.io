import * as React from "react"
import {graphql, StaticQuery} from "gatsby"

const Menus = () => {
  return (
    <StaticQuery
      query={pageQuery}
      render={data => (
        <header>
          <div>{data.allMarkdownRemark.nodes.map(post => {
            return <span>{post.fields.category} / </span>
          })}</div>
        </header>
      )}
    />
  )
}

export default Menus

const pageQuery = graphql`
  query HeadingQuery {
    allMarkdownRemark {
      nodes {
        fields {
          category
        }
      }
    }
  }
`
