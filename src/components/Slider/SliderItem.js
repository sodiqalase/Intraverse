import React from 'react'



function SliderItem({img}) {
  return (
    <div className="slider-item">
      <img src={img} style={{marginLeft: 'auto', marginRight: 'auto'}} alt=""/>
    </div>
  )
}

export default SliderItem
