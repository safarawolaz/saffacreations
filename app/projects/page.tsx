import HeroSm from '@/components/shared/HeroSm'
import Projects from '@/components/shared/Projects'
import React from 'react'

const page = () => {
  return (
    <section>
      <HeroSm header='Projects' subHeader='Home > Projects' />
      <Projects />
    </section>
  )
}

export default page