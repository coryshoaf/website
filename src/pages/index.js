import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Container from "../components/container"


export default () => (
  <Container>
    <div style={{ color: `blue`}}>
      <Link to="/contact/">Contact</Link>
      <Link to="/about-css-modules">About CSS Modules</Link>
      <Header headerText="Hello! This is my site." />
      <p>I am learning to code.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    
    <p>fixed the duplicated images callout.</p>
  </div> 
  </Container>

)

