import HeroSm from '@/components/shared/HeroSm'
import React from 'react'
import Blogs from '../landing/Blogs'

const page = () => {
  return (
    <section>
        <HeroSm header='News & Articles' subHeader='Home > Blogs' />
        <Blogs />
    </section>
  )
}

export default page