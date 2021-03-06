import React from "react"
import { graphql } from "gatsby"
import Container from "../components/container"

const Template = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Container>
      <div className="blog-post-container">
        <div className="blog-post">
          <div className="blog-info">
            <h1>{frontmatter.title}</h1>
            <h2>{frontmatter.date}</h2>
          </div>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Container>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`

export default Template
