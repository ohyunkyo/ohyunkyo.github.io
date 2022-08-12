import * as React from "react"
import { Link, graphql, useStaticQuery} from "gatsby"

const Menus = () => {
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

  const nodes = allMarkdownRemark.nodes

  const categorySet = new Set();
  nodes.forEach(({
    fields
  }) => {
    if (fields && fields.category) {
      categorySet.add(fields.category);
    }
  });

  const categoryArr = Array.from(categorySet)

  return (
    <div>
      카테고리 : &nbsp;&nbsp;&nbsp;&nbsp;
      {categoryArr.map(category => {
        return <span><Link to={`/category/${category}`}>{category}</Link>&nbsp;&nbsp;&nbsp;&nbsp;</span>
      })}
      <br/><br/><br/>
    </div>
  )

  // return (
  //   <div>
  //     {categorySet.forEach(category => {
  //       console.log(category)
  //       return <Link to={`/category/${category}`}>{category}</Link>
  //     })}
  //   </div>
  // )
  
  return false

}

export default Menus