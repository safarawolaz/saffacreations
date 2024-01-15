import { Button } from '@/components/ui/button'
import React from 'react'

const Hero = () => {
  return (
    <section className='w-full min-h-screen flex flex-col items-center justify-center bg-hero bg-cover bg-center bg-fixed'>
      <h1 className='text-5xl lg:text-7xl text-[#cfcece] text-center'>Website <span className='text-[#c59402]'>&</span> applications 
      </h1>
      <h1 className='text-5xl lg:text-7xl text-white text-center'>design agency</h1>
      <div className="mt-10">
            <Button className='bg-[#c59402] py-7 px-14 text-base font-semibold tracking-widest text-white hover:text-[#000000] hover:bg-white rounded-full' size='lg'>Get A Quote
            </Button>
        </div>
    </section>
  )
}

export default Hero