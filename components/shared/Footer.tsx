import { CheckCircle2, DribbbleIcon, FacebookIcon, InstagramIcon, SendIcon, XIcon } from 'lucide-react'
import Link from 'next/link'


const Footer = () => {
  return (
    <section className='min-h-[50vh] bg-[#1a1a1a] w-full py-20 lg:py-32 px-4 lg:px-10 grid grid-cols-l sm:grid-cols-2 lg:grid-cols-4 gap-10'>
      <div className="">
        <Link href='/' className='text-[#cfcece] font-medium text-3xl tracking-wider'><span className='text-[#c59402]'>Saffa</span> Creations</Link>
        <p className='text-muted-foreground text-base leading-[1.7] mt-6'>We believe in the transformative power of design and technology, and we're passionate about translating that belief into results for our clients.</p>
        <div className="mt-6 py-6 flex items-center gap-3 border-t border-[#2e2e2e]">
          <div className="w-12 h-12 bg-[#232323] flex items-center justify-center rounded-full">
            <FacebookIcon className='w-6 h-6 text-muted-foreground' />
          </div>
          <div className="w-12 h-12 bg-[#232323] flex items-center justify-center rounded-full">
            <XIcon className='w-6 h-6 text-muted-foreground' />
          </div>
          <div className="w-12 h-12 bg-[#232323] flex items-center justify-center rounded-full">
            <InstagramIcon className='w-6 h-6 text-muted-foreground' />
          </div>
          <div className="w-12 h-12 bg-[#232323] flex items-center justify-center rounded-full">
            <DribbbleIcon className='w-6 h-6 text-muted-foreground' />
          </div>
        </div>
      </div>
      <div className="">
        <h3 className='text-base text-[#cfcece] font-semibold uppercase tracking-widest mb-8'>explore</h3>
        <p className='text-base text-muted-foreground capitalize mt-4'>about</p>
        <p className='text-base text-muted-foreground capitalize mt-4'>meet our team</p>
        <p className='text-base text-muted-foreground capitalize mt-4'>case stories</p>
        <p className='text-base text-muted-foreground capitalize mt-4'>latest news</p>
        <p className='text-base text-muted-foreground capitalize mt-4'>contact</p>
      </div>
      <div className="">
        <h3 className='text-base text-[#cfcece] font-semibold uppercase tracking-widest mb-8'>explore</h3>
        <p className='text-base text-muted-foreground capitalize mt-4'>1466 Chris Hani Street, Kanyamazane,  <br /> Mbombela</p>
        <p className='text-base text-[#cfcece] font-semibold tracking-widest mt-12'>(+27) 65 923 6199</p>
        <p className='text-base text-[#cfcece] font-semibold tracking-widest mt-2'>admin@saffa.co.za</p>
      </div>
      <div className="">
        <div className="bg-[#222222] px-5 py-6 whitespace-nowrap max-h-fit rounded-2xl">
        <h3 className='text-base text-[#cfcece] font-semibold uppercase tracking-widest '>
          sigup for newsletter
        </h3>
        <form action="">
          <div className="flex items-center relative">
            <input type="text" className='bg-transparent py-3 border-b border-[#504f4f] w-full mt-6 text-white px-2' placeholder='E-mail Address' /> <SendIcon className='text-white w-5 h-5 absolute right-2 bottom-3' />
          </div>
        </form>
        <div className="flex items-center gap-2 mt-6">
          <CheckCircle2 className='w-4 h-4 text-white mr-2' />
          <p className='text-[12px] text-white'>I agree to all terms and policies</p>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Footer