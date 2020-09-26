import React from "react"
import Header from "../components/header"
import Container from "../components/container"
import Card from "../components/card"

const Blog = () => {
  return (
    <Container>
      <Header headerText="Blog page" />
      <p>Lorem ipsum dolor</p>
      <Card />
    </Container>
  )
}

export default Blog
