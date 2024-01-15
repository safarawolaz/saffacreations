import BlogCards from '@/components/shared/BlogCards'
import React from 'react'

const Blogs = () => {
  return (
    <section className='w-full min-h-screen bg-[#111111] flex flex-col items-center justify-center px-4 lg:px-10 gap-16 py-20 lg:py-32'>
            <h3 className='text-4xl xl:text-5xl text-[#cfcece] font-regular -tracking-tighter text-center'>
                News & Articles
            </h3>
            <BlogCards />
    </section>
  )
}

export default Blogs