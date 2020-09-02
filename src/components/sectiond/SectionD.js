import React from 'react'
import { content } from './text'
import SectionDParagraph from './SectionDParagraph'


function SectionD() {
  const { a, b, c, d, e } = content
  return (
    <section className="section-d">
      <h5>Frequently asked questions</h5>
      <div className="section-d-inner">
        <SectionDParagraph  text={a} />
        <SectionDParagraph  text={b} />
        <SectionDParagraph  text={c} />
        <SectionDParagraph  text={d} />
        <SectionDParagraph  text={e} />

      </div>
    </section>
  )
}

export default SectionD
