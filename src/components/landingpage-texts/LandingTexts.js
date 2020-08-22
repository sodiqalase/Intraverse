import React from 'react'
import { Link } from 'react-router-dom'

function LandingTexts() {
  return (
    <section className="landing-texts">
      <h5>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</h5>
      <h2>Lorem ipsum dolor sit amet, consectetur</h2>
      <h3>Lorem ipsum now</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod <br/> tempor invidunt ut labore et dolore magna aiquyam erat, sed diam voluptua.</p>
      <Link to="/register">Register now</Link>


    </section>
  )
}

export default LandingTexts
