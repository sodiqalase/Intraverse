import React from 'react'
import SectionCText from './SectionCText'
import { content } from './content'
function SectionC() {
  const {a,b} = content;
  return (
    <section className="section-c">
      <SectionCText text={a}/>
      <SectionCText text={b} />
      
      <button>Register to use Odiopay</button>
    </section>
  )
}

export default SectionC
