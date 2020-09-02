import React from 'react'

function SectionDParagraph({text}) {
  const { title, body } = text
  return (
    <div className="section-d-paragraph">
      <h6>{title}</h6>
      <p>{body}</p>
    </div>
  )
}

export default SectionDParagraph
