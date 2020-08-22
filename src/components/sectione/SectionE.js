import React from 'react'
import image from './Video Game Console.H03.2k@2x.png'
import tick from './tick.svg'

function SectionE() {
  return (
    <section className="section-e">
      <div className="circle1"></div>
      <div className="circle2"></div>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
      <h3>Lorem ipsum dolor sit amet</h3>
      <div className="section-e-card">
        <span>1</span>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et !</p>
        <div>
          <div className="right"><img src={image} alt=""/></div>
          <button className="left">
            Add to cart
          </button>
        </div>
      </div>
      <div className="section-e-card">
        <span>2</span>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et !</p>
        <div className="second">
          <img src={image} alt=""/>
        </div>
      </div>
      <div className="section-e-card">
        <span>3</span>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et !</p>
        <div className="third">
          <img src={image} alt=""/>
          <img src={tick} alt=""/>
          
        </div>
      </div>

    </section>
  )
}

export default SectionE
