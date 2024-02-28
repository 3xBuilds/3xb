import Image from 'next/image'
import logo from '@/assets/logo.png'

export default function Home() {
  return (
    <main className='w-screen h-screen red-grad flex items-center justify-center'>
      <div className='flex flex-col items-center justify-center h-fit'>
        <Image alt='logo' src={logo} width={500} height={500} className='-my-12'/>
        <h3 className='text-2xl text-[#DF759C]'>WE make it happen...</h3>
      </div>
    </main>
  )
}
