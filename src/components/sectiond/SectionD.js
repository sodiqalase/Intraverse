import React from 'react'
import { text, title, title2} from './text'
import SectionDParagraph from './SectionDParagraph'

function SectionD() {
  
  return (
    <section className="section-d">
      <h5>Frequently asked questions</h5>
      <SectionDParagraph title={title} text={text} />
      <SectionDParagraph title={title} text={`${text}.`} />
      <SectionDParagraph title={title} text={`${text} !`} />
      <SectionDParagraph title={title} text={`${text} !`} />
      <SectionDParagraph title={title2} text={`${text} !`} />
    </section>
  )
}

export default SectionD
