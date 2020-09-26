import React from "react"
// import { Link } from "gatsby"
import Header from "../components/header"
import "../styles/global.scss"
import Card from "../components/card"

const Home = () => {
  return (
    <div style={{ color: `purple` }}>
      <Header headerText="Hello Gatsby" />
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
      <Card />
    </div>
  )
}

export default Home
