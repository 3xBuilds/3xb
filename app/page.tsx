"use client"
import Home from '../components/home'
import Packages from '../components/packages'
import Clients from '../components/Clients'


const page = () => {
  return (
    <div className='red-grad'>
      <Home/>


      <div className='bg-gradient-to-br from-black via-slate-900/60 to-black pt-20 border-x-0 rounded-t-3xl border-white/80 border-2'>
        <Packages/>
        <Clients/>
      </div>
    </div>
  )
}

export default page