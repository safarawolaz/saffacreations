'use client'
import { PuffLoader } from 'react-spinners'

const Spinner = () => {
  return (
    <div  className='flex items-center justify-center h-screen bg-[#111111]'>
        <PuffLoader color="#c59402" /> 
    </div>
  )
}

export default Spinner