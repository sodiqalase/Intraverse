import React from 'react'
import SectionBCard from './SectionBCard'


function SectionB() {
  return (
    <section className="section-b">
      <div className="section-b-container">
        <h3 className="heading">Lorem ipsum now?</h3>
        <div className="flex-list">
          <SectionBCard />
          <SectionBCard />
          <SectionBCard />
        </div>
      </div>
    </section>
  )
}

export default SectionB
