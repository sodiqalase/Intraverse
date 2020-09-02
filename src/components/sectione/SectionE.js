import React from 'react'
import image from './Video Game Console.H03.2k@2x.png'
import tick from './tick.svg'
import tick2 from './Group 198.svg'


function SectionE() {
  return (
    <section className="section-e">
      <div className="circle1"></div>
      <div className="circle2"></div>
      <p>PAYMENTS MADE CONVENIENT</p>
      <h3>How it works</h3>
      <div className="section-e-card">
        <span>1</span>
        <p>Simply select the items you want.</p>
        <div>
          <div className="right"><img src={image} alt=""/></div>
          <button className="left">
            Add to cart
          </button>
        </div>
      </div>
      <div className="section-e-card">
        <span>2</span>
        <p>Choose to pay in bits with Odio and setup your installments schedule.</p>
        <div className="second">
          <img src={tick2} alt=""/>
        </div>
      </div>
      <div className="section-e-card">
        <span>3</span>
        <p>With the instant credit decision, you get to know if you qualify to get the itesms immediately or later when payment is completed.</p>
        <div className="third">
          <img src={image} alt=""/>
          <img src={tick} alt=""/>
          
        </div>
      </div>

    </section>
  )
}

export default SectionE
