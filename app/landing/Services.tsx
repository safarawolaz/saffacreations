import { Button } from '@/components/ui/button'
import { ArrowRight, LucideCode2, LucideLaptop2, LucideStore } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <section className='w-full min-h-screen flex flex-col items-center justify-center bg-serviceBg1 bg-cover bg-center px-4 lg:px-10 py-20 lg:py-32'>
        <div className="text-center">
            <h3 className='text-4xl xl:text-5xl text-[#cfcece] font-regular -tracking-tighter'>
                Services We Are Offering To
            </h3>
            <h3 className='text-4xl xl:text-5xl text-[#cfcece] font-regular -tracking-tighter'>
                Our Customers
            </h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-[#111111] rounded-2xl overflow-hidden">
                <div className="relative">
                    <Image src='/ourServicesImg1.jpg' width={1000} height={667} alt='service image 1' />
                    <div 
                        className="w-24 h-24 bg-[#c59402] flex items-center justify-center bottom-0 left-6 absolute rounded-full">
                        <LucideStore className='w-14 h-14 text-white' />
                    </div>
                </div>
                <div className="p-8">
                    <div className="text-2xl font-regular text-[#cfcece] tracking-wider">
                        Web Marketing
                    </div>
                    <div className="text-base text-muted-foreground leading-[1.9] mt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, quas. Voluptates aperiam cumque reiciendis fugit.
                    </div>
                    <div className="">
                        <Button className='bg-[#232323] text-muted-foreground rounded-full w-full text-lg flex items-center justify-between mt-8 py-7' size='lg'><span>View More</span> <ArrowRight className='w-5 h-5' /> </Button>
                    </div>
                    </div>
                </div>
            <div className="bg-[#111111] rounded-2xl overflow-hidden">
                <div className="relative">
                    <Image src='/ourServicesImg2.jpg' width={1000} height={667} alt='service image 1' />
                    <div 
                        className="w-24 h-24 bg-[#c59402] flex items-center justify-center bottom-0 left-6 absolute rounded-full">
                        <LucideLaptop2 className='w-14 h-14 text-white' />
                    </div>
                </div>
                <div className="p-8">
                    <div className="text-2xl font-regular text-[#cfcece] tracking-wider">
                        Website Design
                    </div>
                    <div className="text-base text-muted-foreground leading-[1.9] mt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, quas. Voluptates aperiam cumque reiciendis fugit.
                    </div>
                    <div className="">
                        <Button className='bg-[#232323] text-muted-foreground w-full text-lg flex items-center justify-between mt-8 py-7 rounded-full' size='lg'><span>View More</span> <ArrowRight className='w-5 h-5' /> </Button>
                    </div>
                    </div>
                </div>
            <div className="bg-[#111111] rounded-2xl overflow-hidden">
                <div className="relative">
                    <Image src='/ourServicesImg3.jpg' width={1000} height={667} alt='service image 1' />
                    <div 
                        className="w-24 h-24 bg-[#c59402] flex items-center justify-center bottom-0 left-6 absolute rounded-full">
                        <LucideCode2 className='w-14 h-14 text-white' />
                    </div>
                </div>
                <div className="p-8">
                    <div className="text-2xl font-regular text-[#cfcece] tracking-wider">
                        Web Applications
                    </div>
                    <div className="text-base text-muted-foreground leading-[1.9] mt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, quas. Voluptates aperiam cumque reiciendis fugit.
                    </div>
                    <div className="">
                        <Button className='bg-[#232323] text-muted-foreground rounded-full w-full text-lg flex items-center justify-between mt-8 py-7' size='lg'><span>View More</span> <ArrowRight className='w-5 h-5' /> </Button>
                    </div>
                    </div>
                </div>
                
        </div>
    </section>
  )
}

export default Services