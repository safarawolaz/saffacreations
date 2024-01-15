'use client'

import { cn } from '@/lib/utils'
import { AlignRight, DribbbleIcon, FacebookIcon, InstagramIcon, MailCheck, MapPinIcon, SearchCheckIcon, TwitterIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'
import MobileNav from './MobileNav'

const links = [
    {
        id: 1,
        name: 'about us',
        url: '/about'
    },
    {
        id: 1,
        name: 'services',
        url: '/services'
    },
    {
        id: 1,
        name: 'projects',
        url: '/projects'
    },
    {
        id: 1,
        name: 'blogs',
        url: '/blogs'
    },
    {
        id: 1,
        name: 'contact',
        url: '/contact'
    },
]

const Navbar = () => {
    const pathname = usePathname()
  return (
    <header className='w-full sticky top-0 left-0 z-50'>
        <div className="w-full hidden lg:px-10  py-4 bg-[#232323] lg:flex justify-between">
            <div className="flex gap-8">
                <div className="flex items-center">
                    <MailCheck className='w-4 h-4 text-[#c59402] mr-2' />
                    <p className='text-gray-300 text-sm'>needhelp@company.com</p>
                </div>
                <div className="flex items-center">
                    <MapPinIcon className='w-4 h-4 text-[#c59402] mr-2' />
                    <p className='text-gray-300 text-sm'>88 Brooklyn Golden Street, New York</p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <p className='text-white text-sm'>Login</p>
                <p className='text-white text-sm'>/</p>
                <p className='text-white text-sm'>Faqs</p>
                <p className='text-white text-sm'>/</p>
                <p className='text-white text-sm'>Contact</p>
                <TwitterIcon className='w-4 h-4 text-white'/>
                <FacebookIcon className='w-4 h-4 text-white'/>
                <DribbbleIcon className='w-4 h-4 text-white'/>
                <InstagramIcon className='w-4 h-4 text-white'/>
            </div>
        </div>
        <div className="flex items-center justify-between px-4 lg:px-10 bg-[#111111]">
            <div className="flex items-center  gap-12 ">
                <div className="">
                <Link href='/' className='text-[#cfcece] font-medium text-3xl tracking-wider'><span className='text-[#c59402]'>Saffa</span> Creations</Link>
                        </div>
                        <div className="hidden lg:flex gap-5">
                                {
                                    links.map(link => (
                            <div className={cn("bg-[#111111] py-12 border-b-2 border-transparent",
                                {
                                    "border-b-2 border-[#fecb32]" : pathname === link.url
                                }
                            )} key={link.id}>
                            <Link href={link.url} className={cn("text-[#cfcece] uppercase text-sm font-bold tracking-widest hover:text-[#fecb32] transition-all",
                            {
                                'text-[#fecb32]' : pathname === link.url
                            }
                            )} >
                                {link.name}
                            </Link>
                        </div>
                        ))
                    }
                </div>
            </div>
            <div className="flex items-center gap-5  bg-[#111111]">
                <SearchCheckIcon className='w-8 h-8 text-white' />
                <div className="hidden sm:block">
                    <Button className='bg-[#c59402] py-6 px-12 text-base font-semibold tracking-widest text-white hover:text-[#000000] hover:bg-white rounded-full' size='lg'>Contact Us</Button>
                </div>
                <div className="lg:hidden">
                    <MobileNav />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar