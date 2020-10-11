import React from "react"
import heroStyles from "./styling/hero.module.scss"
import Header from "./header"
import Container from "./container"

const Hero = ({ children }) => {
  return (
    <section className={heroStyles.hero}>
      <Container>
        <Header headerText="Daniel Kersten, Web Developer" />
      </Container>
    </section>
  )
}

export default Hero
