import React from 'react'
import SectionFCard from './SectionFCard'
import { content } from './content'

function SectionF() {
  const { a,b } = content
  return (
    <section className="section-f">
      <div className="flex-wrapper">
        <SectionFCard text={a} />
        <SectionFCard text={b}/>
      </div>
      <h4>Are you ready to shop?</h4>
      <button>Try Odiopay</button>
    </section>
  )
}

export default SectionF
