import HeroSm from '@/components/shared/HeroSm'
import React from 'react'
import Faqs from '../landing/Faqs'
import Services from '../landing/Services'
import Mission from './components/Mission'
import Team from './components/Team'

const page = () => {
  return (
    <section>
      <HeroSm header='About' subHeader='Home > About'/>
      <Mission />
      <Services />
      <Faqs />
      <Team />
    </section>
  )
}

export default page