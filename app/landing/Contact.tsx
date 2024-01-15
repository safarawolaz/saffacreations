import { Button } from '@/components/ui/button'
import React from 'react'

const Contact = () => {
  return (
    <section>
        <section className='w-full min-h-screen md:flex items-center gap-10 bg-faq bg-cover bg-center px-4 lg:px-10 py-20 lg:py-32 bg-fixed'>
        <div className="basis-1/2 w-full">
            <h3 className='text-4xl xl:text-5xl text-[#cfcece] font-regular -tracking-tighter'>
                Get in touch for more information
            </h3>
            <form className='mt-10'>
                <div className="flex gap-4">
                    <input type="text" className='py-4 bg-[#3333338f] w-full px-8 text-white' placeholder='Your Name' />
                    <input type="text" className='py-4 bg-[#3333338f] w-full px-8 text-white' placeholder='E-Mail Address' />
                </div>
                <div className="mt-4 flex gap-4">
                    <input type="text" className='py-4 bg-[#3333338f] w-full px-8 text-white' placeholder='Phone Number' />
                    <input type="text" className='py-4 bg-[#3333338f] w-full px-8 text-white' placeholder='Your Query' />
                </div>
                <div className="mt-4">
                    <textarea className='w-full bg-[#3333338f] pl-8 pt-4 text-white' placeholder='Type Your Message' rows={6}></textarea>
                </div>
                <Button className='bg-[#c59402] py-7 px-14 text-base font-semibold tracking-widest text-white hover:text-[#000000] hover:bg-white rounded-full mt-8' size='lg'>Send Message
                </Button>
            </form>
        </div>
        <div className="basis-1/2 relative w-full mt-8 md:mt-0 rounded-2xl overflow-hidden">
            
        </div>
    </section>
    </section>
  )
}

export default Contact