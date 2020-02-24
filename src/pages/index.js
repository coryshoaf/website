import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: `blue`}}>
    <Link to="/contact/">Contact</Link>
    <Header headerText="Hello! This is my site." />
    <p>I am learning to code.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div> 
)

