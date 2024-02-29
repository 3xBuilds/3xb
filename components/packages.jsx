import React from 'react'
import { PinContainer } from "../components/ui/3d-pin";
import logo from '../assets/logo.png'
import Image from 'next/image'

const Packages = () => {
  return (
    <>
    <h3 className='text-white text-3xl text-center mb-4'>Our Packages</h3>
        <h3 className='text-white/50 text-base text-center w-[60%] mx-auto'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit ratione alias assumenda id odio officiis debitis aliquam velit blanditiis deleniti.</h3>
        <div className='flex flex-col gap-5'>
          <div className=" my-20 mt-20 w-[85%] mx-auto grid grid-cols-3 max-md:grid-cols-1 max-md:gap-y-10 md:gap-y-20 items-center justify-center ">
            <PinContainer
              className=""
              containerClassName=""
              title="Contact Us to know more"
              href="https://google.com"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  Minting dApp: <span className='text-red-600'>$200 - $300</span> 
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 text-sm">
                    + $50 for native token support <br />
                    + $100 for reveling collection
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 red-grad brightness-150 items-center justify-center">
                  <Image alt='logo' src={logo} width={500} height={500} className=' w-40 scale-125'/>
                </div>
              </div>
            </PinContainer>
            <PinContainer
              className=""
              containerClassName=""
              title="Contact us to make your own dapp"
              href="https://twitter.com/mannupaaji"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  Staking dApp: <span className='text-red-600'>$400 - $500</span> 
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 text-sm">
                    + Rate varies depending upon custom requirements
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 red-grad brightness-150 items-center justify-center">
                  <Image alt='logo' src={logo} width={500} height={500} className=' w-40 scale-125'/>
                </div>
              </div>
            </PinContainer>
            <PinContainer
              className=""
              containerClassName=""
              title="Contact us to make your own dapp"
              href="https://twitter.com/mannupaaji"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  Burning dApp: <span className='text-red-600'>$200 - $300</span> 
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">
                    + 150$ Trait based reward system
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 red-grad brightness-150 items-center justify-center">
                  <Image alt='logo' src={logo} width={500} height={500} className=' w-40 scale-125'/>
                </div>
              </div>
            </PinContainer>
            <PinContainer
              className=""
              containerClassName=""
              title="Contact Us to know more"
              href="https://google.com"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  Raffle dApp: <span className='text-red-600'>$400 - $500</span> 
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 text-sm">
                    + $50 for MATIC raffles <br />
                    + $50 Unlimited Raffles
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 red-grad brightness-150 items-center justify-center">
                  <Image alt='logo' src={logo} width={500} height={500} className=' w-40 scale-125'/>
                </div>
              </div>
            </PinContainer>
            <PinContainer
              className=""
              containerClassName=""
              title="Contact Us to know more"
              href="https://google.com"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  Marketplace: <span className='text-red-600'>$500 - $600</span> 
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 text-sm">
                    + $100 User upload + API costs <br />
                    + $100 Other token support
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 red-grad brightness-150 items-center justify-center">
                  <Image alt='logo' src={logo} width={500} height={500} className=' w-40 scale-125'/>
                </div>
              </div>
            </PinContainer>
            <PinContainer
              className=""
              containerClassName=""
              title="Contact Us to know more"
              href="https://google.com"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  Airdrop dApp: <span className='text-red-600'>$200</span> 
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 text-sm">
                  + Rate varies depending upon custom requirements
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 red-grad brightness-150 items-center justify-center">
                  <Image alt='logo' src={logo} width={500} height={500} className=' w-40 scale-125'/>
                </div>
              </div>
            </PinContainer>
          </div>
        </div>
    </>
  )
}

export default Packages