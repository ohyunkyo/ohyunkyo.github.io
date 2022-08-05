import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Menus = () => {
  return (
    <span>테스트중입니다</span>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      nodes {
        fields {
          category
        }
      }
    }
  }
`

export default Menus