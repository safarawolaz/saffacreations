import { DribbbleIcon, GithubIcon, InstagramIcon, LinkedinIcon, XIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Team = () => {
  return (
    <section className='w-full min-h-screen flex flex-col items-center justify-center  bg-[#171717] px-4 lg:px-10 py-20 lg:py-32'>
        <div className="text-center">
            <h3 className='text-4xl xl:text-5xl text-[#cfcece] font-regular -tracking-tighter'>
                Our Team
            </h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="">
                <div className="relative rounded-2xl overflow-hidden">
                    <Image src='/lazarus3.png' width={1000} height={1330} alt='team member1' />
                    <div className="mt-2 flex items-center justify-center gap-3 absolute z-10 bg-[#0e0a00dc] bottom-5 left-5 p-3 rounded-lg">
                        <Link href="#" >
                            <InstagramIcon className='w-5 h-5 text-[#c59402]'/>
                        </Link>
                        <Link href="#" >
                            <GithubIcon className='w-5 h-5 text-[#c59402] mr-2'/>
                        </Link>
                        <Link href="#" >
                            <DribbbleIcon className='w-5 h-5 text-[#c59402]'/>
                        </Link>
                        <Link href="#" >
                            <LinkedinIcon className='w-5 h-5 text-[#c59402]'/>
                        </Link>
                    </div>
                </div>
                <div className="mt-4 text-center">
                    <h3 className='text-[#cfcece] text-2xl font-medium'>Lazarus Safarawo</h3>
                    <h3 className='text-muted-foreground mt-1'>Tech Lead</h3>
                </div>
            </div>
            <div className="">
                <div className="relative rounded-2xl overflow-hidden">
                    <Image src='/terence1.jpg' width={1000} height={1330} alt='team member1' />
                    <div className="mt-2 flex items-center justify-center gap-3 absolute z-10 bg-[#0e0a00dc] bottom-5 left-5 p-3 rounded-lg">
                        <Link href="#" >
                            <InstagramIcon className='w-5 h-5 text-[#c59402]'/>
                        </Link>
                        <Link href="#" >
                            <XIcon className='w-5 h-5 text-[#c59402] mr-2'/>
                        </Link>
                        <Link href="#" >
                            <DribbbleIcon className='w-5 h-5 text-[#c59402]'/>
                        </Link>
                        <Link href="#" >
                            <LinkedinIcon className='w-5 h-5 text-[#c59402]'/>
                        </Link>
                        <Link href="#" >
                            <GithubIcon className='w-5 h-5 text-[#c59402]'/>
                        </Link>
                    </div>
                </div>
                <div className="mt-4 text-center">
                    <h3 className='text-[#cfcece] text-2xl font-medium'>Terence Shabangu</h3>
                    <h3 className='text-muted-foreground mt-1'>Developer</h3>
                </div>
            </div>
            <div className="">
                <div className="relative rounded-2xl overflow-hidden">
                    <Image src='/juliet1.jpg' width={1000} height={1330} alt='team member1' />
                    <div className="mt-2 flex items-center justify-center gap-3 absolute z-10 bg-[#0e0a00dc] bottom-5 left-5 p-3 rounded-lg">
                        <Link href="#" >
                            <InstagramIcon className='w-5 h-5 text-[#c59402]'/>
                        </Link>
                        <Link href="#" >
                            <XIcon className='w-5 h-5 text-[#c59402] mr-2'/>
                        </Link>
                        <Link href="#" >
                            <DribbbleIcon className='w-5 h-5 text-[#c59402]'/>
                        </Link>
                        <Link href="#" >
                            <LinkedinIcon className='w-5 h-5 text-[#c59402]'/>
                        </Link>
                    </div>
                </div>
                <div className="mt-4 text-center">
                    <h3 className='text-[#cfcece] text-2xl font-medium'>Juliet Dlamini</h3>
                    <h3 className='text-muted-foreground mt-1'>UI/UX Designer</h3>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Team