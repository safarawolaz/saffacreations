import HeroSm from '@/components/shared/HeroSm'
import { Button } from '@/components/ui/button'
import { MailCheckIcon, MapPinIcon, PhoneIncoming, SendIcon } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <section className='w-full  bg-[#171717]  '>
      <HeroSm header='Contact Us' subHeader='Home > Contact'/>
      <div className="sm:flex items-center  py-20 lg:py-32 px-4 lg:px-10 min-h-screen gap-10">
        <div className="basis-1/2 w-full">
            <h3 className='text-4xl xl:text-5xl text-[#cfcece] font-regular -tracking-tighter'>
                Send Us An E-mail 
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
        <div className="basis-1/2 w-full mt-10 sm:mt-0">
          <h3 className='text-4xl xl:text-5xl text-[#cfcece] font-regular -tracking-tighter'>
                Feel Free To Contact Us Using Details Below
          </h3>
          <p className='mt-6 text-muted-foreground text-base leading-[1.8]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis sit veniam voluptatum quis dolore, aliquid magni? Nisi quasi animi, libero iusto sequi quaerat. Vel, odit.
            Lorem ipsum dolor sit amet consectetur adipisicing 
          </p>
          <div className="flex items-center gap-4 mt-8">
            <div className="w-14 h-14 bg-[#c59402] flex items-center justify-center rounded-lg">
              <PhoneIncoming className='w-7 h-7 text-black' />
            </div>
            <div className="">
              <p className='text-base text-white'>Have a question?</p>
              <p className='text-muted-foreground text-base'>Free (+27) 65 923 6199</p>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <div className="w-14 h-14 bg-[#c59402] flex items-center justify-center rounded-lg">
              <MailCheckIcon className='w-7 h-7 text-black' />
            </div>
            <div className="">
              <p className='text-base text-white'>Write an E-mail</p>
              <p className='text-muted-foreground text-base'>admin@saffa.co.za</p>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <div className="w-14 h-14 bg-[#c59402] flex items-center justify-center rounded-lg">
              <MapPinIcon className='w-7 h-7 text-black' />
            </div>
            <div className="">
              <p className='text-base text-white'>Visit us at</p>
              <p className='text-muted-foreground text-base'>20 Bester St Mbombela</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full min-h-[70vh] bg-[#111111]">

      </div>
    </section>
  )
}

export default page