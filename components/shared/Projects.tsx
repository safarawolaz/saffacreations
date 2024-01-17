import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Projects = () => {
  return (
    <section className='w-full min-h-screen bg-[#111111] flex flex-col items-center justify-center px-4 lg:px-10 gap-16 py-20 lg:py-32'>
            <h3 className='text-4xl xl:text-5xl text-[#cfcece] font-regular -tracking-tighter text-center'>
                Our Most Recent <br /> Projects
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3  w-full gap-8 lg:h-[400px] sm:h-[800px] h-[1200px]">
                <Link href="https://divineacademy.co.za/" target="_blank"   className="bg-black rounded-2xl overflow-hidden relative  transition-all duration-300 w-full h-full">
                  <Image src='/divine.png' width={2976} height={3456}  alt='project 1 image' className='hover:scale-110 transition-all duration-300 cursor-pointer z-10 absolute w-full h-full' objectFit='cover'/>
                  <div className="bg-[#c59402]  p-6 rounded-xl absolute z-20 bottom-2 left-2 cursor-pointer shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <h3 className='text-lg font-bold tracking=widest text-white'>
                      WEB DESIGN
                    </h3>
                    <p className='text-black text-base tracking-widest mt-1'>
                      www.divineacademy.co.za
                    </p>
                  </div>
                </Link>
                <Link href="https://mxprinters.vercel.app/" target='_blank' className="bg-black rounded-2xl overflow-hidden relative">
                  <Image src='/mxprinters.png' width={2000} height={3000}  alt='project 1 image'  className='hover:scale-110 transition-all duration-300 cursor-pointer z-10 absolute' objectFit='cover'/>
                  <div className="bg-[#c59402]  p-6 rounded-xl absolute z-20 bottom-2 left-2 cursor-pointer shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <h3 className='text-lg font-bold tracking=widest text-white'>
                      WEB DESIGN
                    </h3>
                    <p className='text-black text-base tracking-widest mt-1'>
                      www.mxprinters.co.za
                    </p>
                  </div>
                </Link>
                <div className="bg-black rounded-2xl overflow-hidden relative">
                  <Image src='/projects3.jpg' width={2000} height={3000}  alt='project 1 image' className='hover:scale-110 transition-all duration-300 cursor-pointer z-10 absolute' objectFit='cover' />
                  <div className="bg-[#c59402]  p-6 rounded-xl absolute z-20 bottom-2 left-2 cursor-pointer shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <h3 className='text-lg font-bold tracking=widest text-white'>
                      WEB DESIGN
                    </h3>
                    <p className='text-black text-base tracking-widest mt-1'>
                      www.billsgroup.co.za
                    </p>
                  </div>
                </div>
            </div>
    </section>
  )
}

export default Projects