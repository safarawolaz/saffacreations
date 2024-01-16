import HeroSm from '@/components/shared/HeroSm'
import React from 'react'
import OurServices from './components/OurServices'

const page = () => {
  return (
    <section>
        <HeroSm header='Services' subHeader='Home > Services' />
        <OurServices />
    </section>
  )
}

export default page