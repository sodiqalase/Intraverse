import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import SliderWrapper from '../../components/Slider/SliderWrapper'
import LandingTexts from '../../components/landingpage-texts/LandingTexts'
import SectionB from '../../components/sectionb/SectionB'
import SectionC from '../../components/sectionc/SectionC'
import SectionD from '../../components/sectiond/SectionD'
import SectionE from '../../components/sectione/SectionE'
import SectionF from '../../components/sectionf/SectionF'

function LandingPage() {
  return (
    <div className="landing-page-background">
      <Navbar />
      <SliderWrapper />
      <LandingTexts />
      <SectionB />
      <SectionC />
      <SectionD />
      <SectionE />
      <SectionF />
    </div>
  )
}

export default LandingPage
