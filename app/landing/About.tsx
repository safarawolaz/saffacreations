import { Button } from '@/components/ui/button'
import { CheckIcon, Users2Icon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section className='w-full min-h-screen bg-[#111111] lg:flex items-center px-4 lg:px-10 gap-16 py-20 lg:py-32'>
        <div className="relative basis-1/2 w-full rounded-2xl overflow-hidden">
            <Image src='/aboutImage.jpg' height={960} width={1172} alt='about image' className='' />
            <div className="flex gap-4 bg-[#c59402] p-7 w-max rounded-xl absolute top-8 left-8">
                <div className="">
                    <Users2Icon className='w-14 h-14 text-white' />
                </div>
                <div className="">
                    <p className='text-xl text-white font-bold'>20+</p>
                    <div className="text-base text-white">Years of <br /> experience</div>
                </div>
            </div>
        </div>
        <div className="basis-1/2 mt-8 lg:mt-0">
            <h3 className='text-4xl xl:text-5xl text-[#cfcece] font-regular -tracking-tighter'>We provide the best web services</h3>
            <p className='text-muted-foreground mt-10 text-base leading-[1.7]'>Welcome to Saffa Creations, a dynamic team of creative minds and dedicated to shaping digital experiences that resonate and inspire. Founded on the principles of innovation, collaboration, and client success.</p>
            <div className="mt-8 bg-[#232323] p-6 border-l-4 border-[#c59402]">
                <div className="flex items-center">
                    <CheckIcon className='w-5 h-5 text-[#c59402] mr-2' />
                    <p className='text-base text-muted-foreground font-semibold'>Innovation: We use latest technologies and design trends</p>
                </div>
                <div className="flex items-center mt-2">
                    <CheckIcon className='w-5 h-5 text-[#c59402] mr-2' />
                    <p className='text-base text-muted-foreground font-semibold'>Work closely with our clients to understand their unique needs</p>
                </div>
                <div className="flex items-center mt-2">
                    <CheckIcon className='w-5 h-5 text-[#c59402] mr-2' />
                    <p className='text-base text-muted-foreground font-semibold'>Focus on tangible results ie conversion, user engagement.</p>
                </div>
            </div>
            <div className="mt-12 flex gap-10 items-center">
                    <Button className=' bg-[#c59402] py-7 px-12 text-base font-semibold tracking-wider text-white rounded-full hover:text-black hover:bg-[#ffffff]' size='lg'>Discover More
                    </Button>
                <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 bg-white rounded-full relative overflow-hidden border-2 border-[#c59402]">
                        <Image src='/founderImg.jpg' fill alt='founder image' />
                    </div>
                    <div className="flex-col gap-2">
                        <p className='text-base font-bold text-[#cfcece] tracking-wider text-center'>Lazarus Safarawo</p>
                        <p className='text-sm text-muted-foreground text-center'>CEO & Founder</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About