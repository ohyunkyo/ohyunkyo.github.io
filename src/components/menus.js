import * as React from "react"
import {graphql, useStaticQuery} from "gatsby"

const Menus = () => {
  const { data } = useStaticQuery(
    graphql`
      query MenuQuery{
        allMarkdownRemark {
          nodes {
            fields {
              category
            }
          }
        }
      }
    `
  )

  const posts = data.allMarkdownRemark.nodes

  return (
    <span>{posts}</span>
    // <span>
    //   {posts.map(post => {
    //     return (
    //       <span>{post.fields.category}</span>
    //     )
    //   })}
    // </span>
  )
}

export default Menus