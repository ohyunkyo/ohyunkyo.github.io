import * as React from "react"
import { Link, graphql, useStaticQuery} from "gatsby"

const NavBar = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
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
  )

  const categorySet = new Set();

  allMarkdownRemark.nodes.forEach(({
    fields
  }) => {
    if (fields && fields.category) {
      categorySet.add(fields.category);
    }
  });

  const categoryArr = Array.from(categorySet)

  return (
    <div class="nav-bar">
      Categories : &nbsp;&nbsp;&nbsp;&nbsp;
      {categoryArr.map(category => {
        return <span><Link to={`/category/${category}`}>{category}</Link>&nbsp;&nbsp;&nbsp;&nbsp;</span>
      })}
    </div>
  )

}

export default NavBar