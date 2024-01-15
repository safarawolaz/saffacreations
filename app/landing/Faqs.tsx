import { PlusIcon, UsersRound } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Faqs = () => {
  return (
    <section className='w-full min-h-screen md:flex items-center gap-10 bg-faq bg-cover bg-center px-4 lg:px-10 py-20 lg:py-32 bg-fixed'>
        <div className="basis-1/2 w-full">
            <h3 className='text-4xl xl:text-5xl text-[#cfcece] font-regular -tracking-tighter'>
                Here are some of the most frequently asked questions
            </h3>
            <div className="mt-8 flex flex-col gap-4">
                <div className="flex items-center  justify-between border border-[#3b3b3a] py-4 px-4">
                    <p className='text-base font-semibold text-gray-300 tracking-wider'>How much is is to build a website?</p>
                    <PlusIcon className='w-5 h-5 text-[#c59402]' />
                </div>
                <div className="flex items-center  justify-between border border-[#3b3b3a] py-4 px-4">
                    <p className='text-base font-semibold text-gray-300 tracking-wider'>How does a website help us improve leads?</p>
                    <PlusIcon className='w-5 h-5 text-[#c59402]' />
                </div>
                <div className="flex items-center  justify-between border border-[#3b3b3a] py-4 px-4">
                    <p className='text-base font-semibold text-gray-300 tracking-wider'>Do we need to have our own domain first?</p>
                    <PlusIcon className='w-5 h-5 text-[#c59402]' />
                </div>
                <div className="flex items-center  justify-between border border-[#3b3b3a] py-4 px-4">
                    <p className='text-base font-semibold text-gray-300 tracking-wider'>Do you require payment upfront?</p>
                    <PlusIcon className='w-5 h-5 text-[#c59402]' />
                </div>
            </div>
        </div>
        <div className="basis-1/2 relative w-full mt-8 md:mt-0 rounded-2xl overflow-hidden">
            <Image src='/faqImg.jpg' width={2000} height={1863} alt='faq image' />
            <div className="w-40 h-40 bg-[#c59402] flex flex-col gap-2 items-center justify-center absolute bottom-20 left-4  rounded-xl">
                <UsersRound className='w-14 h-14 text-white' />
                <p className='text-base text-white text-center'>One of the most trusted design agency</p>
            </div>
        </div>
    </section>
  )
}

export default Faqs