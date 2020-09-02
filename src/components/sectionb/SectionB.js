import React from 'react'

import { contents } from './contents'

import Logo1 from './Logo1'
import Logo2 from './Logo2'
import Logo3 from './Logo3'

function SectionB() {
  const {a,b,c} = contents
  return (
    <section className="section-b">
      <div className="section-b-container">
        <h3 className="heading">Why pay later with Odio?</h3>
        <div className="flex-list">
          <div className="flex-item">
            <Logo2 />
            <h5>{a.head}</h5>
            <p>{a.body}</p>
          </div>
          <div className="flex-item">
            <Logo1 />
            <h5>{b.head}</h5>
            <p>{b.body}</p>
          </div>
          <div className="flex-item">
            <Logo3 />
            <h5>{c.head}</h5>
            <p>{c.body}</p>
          </div>
            
        </div>
      </div>
    </section>
  )
}

export default SectionB
