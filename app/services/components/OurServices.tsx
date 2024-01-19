import { Button } from '@/components/ui/button'
import { AppWindowIcon, ArrowRight, LucideArrowUpRight, LucideCode2, LucideFileCode2, PenLine, PenToolIcon, Settings2Icon, Users2Icon } from 'lucide-react'
import React from 'react'

const OurServices = () => {
  return (
    <section className='w-full min-h-screen flex flex-col items-center justify-center  bg-[#171717] px-4 lg:px-10 py-20 lg:py-32'>
        <div className="text-center">
            <h3 className='text-4xl xl:text-5xl text-[#cfcece] font-regular -tracking-tighter'>
                Services We Are Offering 
            </h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-[#111111] rounded-2xl overflow-hidden">
                <div className="flex items-center justify-between">
                    <div className="ml-8 mt-8 w-20 h-20  flex items-center justify-center rounded-full">
                        <Users2Icon className='w-12 h-12 rounded-xl text-[#c59402]' />
                    </div>
                    <div className="text-[#c59402] text-2xl mr-8 mt-8">
                        01
                    </div>
                </div>
                <div className="p-8">
                    <div className="text-2xl font-regular text-[#cfcece] tracking-wider">
                        Digital Marketing
                    </div>
                    <div className="text-base text-muted-foreground leading-[1.9] mt-4">
                    From social media management to targeted advertising, we leverage the latest trends and data-driven insights to ensure your business stands out in the digital landscape.
                    </div>
                    <div className="">
                        <Button className='text-muted-foreground text-lg flex items-center justify-between mt-8 px-3 hover:bg-[#161616] hover:text-muted-foreground rounded-full' size='lg' variant='ghost'>
                            <div className="h-12 w-12 bg-[#c59402] flex items-center justify-center rounded-full mr-4">
                                <ArrowRight className='w-5 h-5 text-[#000000]' /> 
                            </div>
                            <span className='text-[#c59402]'>View More</span> 
                        </Button>
                    </div>
                    </div>
                </div>

            <div className="bg-[#111111] rounded-2xl overflow-hidden">
                <div className="flex items-center justify-between">
                    <div className="ml-8 mt-8 w-20 h-20  flex items-center justify-center rounded-full">
                        <LucideCode2 className='w-12 h-12 rounded-xl text-[#c59402]' />
                    </div>
                    <div className="text-[#c59402] text-2xl mr-8 mt-8">
                        02
                    </div>
                </div>
                <div className="p-8">
                    <div className="text-2xl font-regular text-[#cfcece] tracking-wider">
                        Website Design
                    </div>
                    <div className="text-base text-muted-foreground leading-[1.9] mt-4">
                    Our team of skilled designers combines aesthetics with user-centric functionality to create visually stunning and highly responsive websites.
                    </div>
                    <div className="">
                        <Button className='text-muted-foreground text-lg flex items-center justify-between mt-8 px-3 hover:bg-[#161616] hover:text-muted-foreground rounded-full' size='lg' variant='ghost'>
                            <div className="h-12 w-12 bg-[#c59402] flex items-center justify-center rounded-full mr-4">
                                <ArrowRight className='w-5 h-5 text-[#000000]' /> 
                            </div>
                            <span className='text-[#c59402]'>View More</span> 
                        </Button>
                    </div>
                    </div>
                </div>
            <div className="bg-[#111111] rounded-2xl overflow-hidden">
                <div className="flex items-center justify-between">
                    <div className="ml-8 mt-8 w-20 h-20  flex items-center justify-center rounded-full">
                        <LucideFileCode2 className=' w-12 h-12 rounded-xl text-[#c59402]' />
                    </div>
                    <div className="text-[#c59402] text-2xl mr-8 mt-8">
                        03
                    </div>
                </div>
                <div className="p-8">
                    <div className="text-2xl font-regular text-[#cfcece] tracking-wider">
                        Web Applications
                    </div>
                    <div className="text-base text-muted-foreground leading-[1.9] mt-4">
                    Bespoke web application development. Whether you need a dynamic e-commerce platform, a robust content management system, or a custom solution.
                    </div>
                    <div className="">
                        <Button className='text-muted-foreground text-lg flex items-center justify-between mt-8 px-3 hover:bg-[#161616] hover:text-muted-foreground rounded-full' size='lg' variant='ghost'>
                            <div className="h-12 w-12 bg-[#c59402] flex items-center justify-center rounded-full mr-4">
                                <ArrowRight className='w-5 h-5 text-[#000000]' /> 
                            </div>
                            <span className='text-[#c59402]'>View More</span> 
                        </Button>
                    </div>
                    </div>
                </div>
            <div className="bg-[#111111] rounded-2xl overflow-hidden">
                <div className="flex items-center justify-between">
                    <div className="ml-8 mt-8 w-20 h-20  flex items-center justify-center rounded-full">
                        <AppWindowIcon className='w-12 h-12 rounded-xl text-[#c59402]' />
                    </div>
                    <div className="text-[#c59402] text-2xl mr-8 mt-8">
                        04
                    </div>
                </div>
                <div className="p-8">
                    <div className="text-2xl font-regular text-[#cfcece] tracking-wider">
                        UI/UX Design
                    </div>
                    <div className="text-base text-muted-foreground leading-[1.9] mt-4">
                    Intuitive and visually appealing user interfaces UI coupled with an outstanding user experience UX. Our UI/UX designers create designs that look great, enhancing user satisfaction and engagement.
                    </div>
                    <div className="">
                        <Button className='text-muted-foreground text-lg flex items-center justify-between mt-8 px-3 hover:bg-[#161616] hover:text-muted-foreground rounded-full' size='lg' variant='ghost'>
                            <div className="h-12 w-12 bg-[#c59402] flex items-center justify-center rounded-full mr-4">
                                <ArrowRight className='w-5 h-5 text-[#000000]' /> 
                            </div>
                            <span className='text-[#c59402]'>View More</span> 
                        </Button>
                    </div>
                    </div>
                </div>
            <div className="bg-[#111111] rounded-2xl overflow-hidden">
                <div className="flex items-center justify-between">
                    <div className="ml-8 mt-8 w-20 h-20  flex items-center justify-center rounded-full">
                        <PenLine className='w-12 h-12 rounded-xl text-[#c59402]' />
                    </div>
                    <div className="text-[#c59402] text-2xl mr-8 mt-8">
                        05
                    </div>
                </div>
                <div className="p-8">
                    <div className="text-2xl font-regular text-[#cfcece] tracking-wider">
                        Copywriting
                    </div>
                    <div className="text-base text-muted-foreground leading-[1.9] mt-4">
                    Our expert copywriters craft compelling content that speaks directly to your target audience. Whether it is website copy, blog posts, or marketing collateral to convey your unique brand story.
                    </div>
                    <div className="">
                        <Button className='text-muted-foreground text-lg flex items-center justify-between mt-8 px-3 hover:bg-[#161616] hover:text-muted-foreground rounded-full' size='lg' variant='ghost'>
                            <div className="h-12 w-12 bg-[#c59402] flex items-center justify-center rounded-full mr-4">
                                <ArrowRight className='w-5 h-5 text-[#000000]' /> 
                            </div>
                            <span className='text-[#c59402]'>View More</span> 
                        </Button>
                    </div>
                    </div>
                </div>
            <div className="bg-[#111111] rounded-2xl overflow-hidden">
                <div className="flex items-center justify-between">
                    <div className="ml-8 mt-8 w-20 h-20  flex items-center justify-center rounded-full">
                        <LucideArrowUpRight className='w-10 h-10 rounded-xl text-[#c59402]' />
                    </div>
                    <div className="text-[#c59402] text-2xl mr-8 mt-8">
                        06
                    </div>
                </div>
                <div className="p-8">
                    <div className="text-2xl font-regular text-[#cfcece] tracking-wider">
                        SEO Marketing
                    </div>
                    <div className="text-base text-muted-foreground leading-[1.9] mt-4">
                    Elevate your websites ranking on search engines with our comprehensive SEO services. We employ white-hat techniques and industry best practices to optimize your site, ensuring it ranks higher in search results.
                    </div>
                    <div className="">
                        <Button className='text-muted-foreground text-lg flex items-center justify-between mt-8 px-3 hover:bg-[#161616] hover:text-muted-foreground rounded-full' size='lg' variant='ghost'>
                            <div className="h-12 w-12 bg-[#c59402] flex items-center justify-center rounded-full mr-4">
                                <ArrowRight className='w-5 h-5 text-[#000000]' /> 
                            </div>
                            <span className='text-[#c59402]'>View More</span> 
                        </Button>
                    </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default OurServices