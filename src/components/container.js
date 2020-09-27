import React from "react"
import containerStyles from "./styling/container.module.scss"

import { rhythm } from "../utils/typography"

const Container = ({ children }) => {
  return <div className={containerStyles.container}>{children}</div>
}

export default Container
