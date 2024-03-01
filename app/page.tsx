"use client"
import Home from '../components/home'
import Packages from '../components/packages'
import Projects from '../components/projects'



const page = () => {
  return (
    <div className='red-grad noscr'>
      <Home/>
      <div className='bg-gradient-to-br from-black via-slate-900/60 to-black pt-20 noscr border-x-0 noscr overflow-hidden rounded-t-3xl border-white/80 border-2 w-screen'>
        <Packages/>
        <Projects/>
      </div>
    </div>
  )
}

export default page