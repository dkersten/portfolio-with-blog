import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <div className="blog-index-card">
    <Link to={post.frontmatter.slug}>
      {post.frontmatter.title} ({post.frontmatter.date})
    </Link>
  </div>
)

export default PostLink
