import {Card, Col} from "react-bootstrap";
import {Link} from "gatsby";
import * as React from "react";

const CurrentCategory = ({ post }) => {
  return (
    <div class="current-category">
      {post.fields.category && (
        <span>
          Current Category is &nbsp;
          <Link to={`/category/${post.fields.category}`}>
            {post.fields.category}
          </Link>
        </span>
      )}
    </div>
  )
}

export default CurrentCategory