import React from 'react'
import { Link } from 'react-router-dom'

function SectionFCard({text}) {
  const { body, link, title } = text
  return (
    <div>
      <div className="inner">
        <h3>{title}</h3>
        <p>{body}</p>
        <Link to="#">{link}</Link>
      </div>
    </div>
  )
}

export default SectionFCard
