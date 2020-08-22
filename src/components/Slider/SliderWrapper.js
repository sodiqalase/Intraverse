import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import SliderItem from './SliderItem'
import img1 from './Air Conditioner.H03.2k.png'
import img2 from './Dryer.H03.2k.png'
import img3 from './iPhone XS.H03.2k.png'
import img4 from './Portable Generator.H03.2k.png'
import img5 from './Video Game Console.H03.2k@2x.png'
import img6 from './Laptop Computer.H03.2k.png'


class SliderWrapper extends React.Component {
  render(){
    let settings = {
      autoplay: true,
      fade: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return (
      <div style={{overflowX: 'hidden'}} className="sliderwrapper">
        <Slider {...settings}>
        
          <SliderItem img={img1}/>
          <SliderItem img={img2}/>
          <SliderItem img={img3}/>
          <SliderItem img={img4}/>
          <SliderItem img={img5}/>
          <SliderItem img={img6}/>
        </Slider>
      </div>
      
    )
  }

  
}

export default SliderWrapper
