import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: `black`}}>
    <Link to="/">Home</Link>
    <Header headerText="Contact" />
    <p>Send me a message!</p>
  </div> 
)