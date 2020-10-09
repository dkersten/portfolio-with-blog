import React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"
import Container from "../components/container"
import "../styles/global.scss"

const Home = ({ data }) => {
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
          <Link to="/blog/">My Blog</Link>
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

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`

export default Home
