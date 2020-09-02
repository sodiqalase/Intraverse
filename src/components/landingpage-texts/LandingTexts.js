import React from 'react'
import { Link } from 'react-router-dom'

function LandingTexts() {
  return (
    <section className="landing-texts">
      <h5>This september, the way you make payment is going to change</h5>
      <h2>Let's help you pay for the things you need now</h2>
      <h3>While you pay back later</h3>
      <p>Odio offers you the freedom to pay for the things you need by advancing payments to the merchants while you pay back in bits</p>
      <Link to="/register">Sign up to pay with Odio</Link>


    </section>
  )
}

export default LandingTexts
