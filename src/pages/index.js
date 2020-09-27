import React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/header"
import "../styles/global.scss"

const Home = ({ data }) => {
  return (
    <div style={{ color: `purple` }}>
      <Header headerText="Home Page" />
      <p>{data.site.siteMetadata.title}</p>
      <Link to="/blog/">To Blog</Link>
    </div>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Home
