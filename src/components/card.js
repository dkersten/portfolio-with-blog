import React from "react"
import cardStyles from "./styling/card.module.scss"

const Card = props => {
  return (
    <div className={cardStyles.card}>
      <h3>Card</h3>
      <p>Card content</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}

export default Card
