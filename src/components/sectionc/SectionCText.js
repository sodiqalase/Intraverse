import React from 'react'

function SectionCText({text}) {
  const { title, body } = text; 
  return (
    <div >
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  )
}

export default SectionCText
