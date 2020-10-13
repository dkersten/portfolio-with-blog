import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/hero"
import Layout from "../components/layout"
import Container from "../components/container"
import "../styles/global.scss"
import PostLink from "../components/post-link"

const Home = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <Hero></Hero>
      <section className="blog-index">
        <Container>
          <p>
            Check out my blog. Here I write about my experiences as a web
            developer and the general tech industry in general. I also have the
            same stories posted on Medium.
          </p>
          <div>{Posts}</div>
        </Container>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`

export default Home
