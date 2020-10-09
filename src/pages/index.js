import React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/header"
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
      <section className="hero">
        <Container>
          <Header headerText="Daniel Kersten, Web Developer" />
        </Container>
      </section>
      <section className="blog">
        <Container>
          <p>
            Check out my blog where I write about web development and the tech
            industry in general.
          </p>
          <div>{Posts}</div>
        </Container>
      </section>
    </Layout>

    // <div style={{ color: `purple` }}>
    //   <Header headerText="Home Page" />
    //   <Link to="/blog/">To Blog</Link>

    //   <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
    //   {data.allMarkdownRemark.edges.map(({ node }) => (
    //     <div key={node.id}>
    //       <h3>
    //         {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
    //       </h3>
    //       <p>{node.excerpt}</p>
    //     </div>
    //   ))}
    // </div>
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
