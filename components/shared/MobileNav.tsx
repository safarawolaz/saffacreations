'use client'

import { AlignRight } from 'lucide-react'

import Link from 'next/link'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose,
}
from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

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

const MobileNav = () => {
    const pathname = usePathname()
  return (
    <Sheet>
        <SheetTrigger><AlignRight className='w-7 h-7 text-white lg:hidden' /></SheetTrigger>
        <SheetContent>
            <SheetHeader>
                <SheetDescription>
                    <div className="text-center">
                        <SheetClose asChild>
                            <Link href='/' className='text-4xl font-bold mt-6'>webency</Link>
                        </SheetClose>
                    </div>
                    <div className="flex flex-col space-y-4 items-start w-full text-lg mt-10 font-semibold">
                        {
                            links.map(link => (
                                <SheetClose asChild key={link.id}>
                                    <Link href={link.url}  className={cn('uppercase text-sm font-semibold text-muted-foreground tracking-widest hover:translate-x-2 hover:text-[#fecb32] transition-all',
                                        {
                                            'text-[#c59402] font-bold transition-all' : pathname === link.url
                                        }
                                    )}>
                                        {link.name}
                                    </Link>
                                </SheetClose>
                            ))
                        }
                    </div>
                </SheetDescription>
            </SheetHeader>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav