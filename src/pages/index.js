import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import "../styles/global.scss"

const Home = () => {
  return (
    <div style={{ color: `purple` }}>
      <Header headerText="Home Page" />
      <Link to="/blog/">To Blog</Link>
    </div>
  )
}

export default Home
