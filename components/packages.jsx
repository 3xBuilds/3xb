import React from 'react'
import { PinContainer } from "../components/ui/3d-pin";
import logo from '../assets/logo.png'
import Image from 'next/image'

const Packages = () => {
  return (
    <>
    <h3 className='text-white text-3xl text-center mb-4'>Build your dream project</h3>
        <h3 className='text-white/50 text-base text-center w-[60%] mx-auto'>Let us guide you through you very own NFT project journey</h3>
        <div className='flex flex-col gap-5'>
          <div className=" my-20 mt-20 w-[85%] saturate-75 mx-auto grid grid-cols-3 max-md:grid-cols-1 max-md:gap-y-10 md:gap-y-20 items-center justify-center ">
            <PinContainer
              className=""
              containerClassName=""
              title={[" + $50 for native token support ", "+ $100 for revealing collection"]}
              href="https://google.com"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  Minting dApp: <span className='text-red-600'>$200</span> 
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 text-sm">
                    Launch your NFTs with your custom minting dApp
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 red-grad brightness-150 p-2 items-center justify-center">
                  {/* <div className='w-full h-full border-2 border-dashed border-white/20 rounded flex items-center justify-center'> */}
                  <Image alt='logo' src={logo} width={500} height={500} className=' w-40 scale-125'/>
                  {/* </div> */}
                  
                </div>
              </div>
            </PinContainer>
            <PinContainer
              className=""
              containerClassName=""
              title={["+ $50 for further customization"]}
              href="https://google.com"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  ERC-20 Token: <span className='text-red-600'>$100</span> 
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 text-sm">
                    Currency for your project to unlock unlimited utilities
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
              title={["+ $50 for hard staking", "+ $50 for further customization"]}
              href="https://twitter.com/mannupaaji"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  Staking dApp: <span className='text-red-600'>$300</span> 
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 text-sm">
                    Most basic utility, passive reward app for your loyal holders.
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
              title={["+ 100$ Trait based reward system", "+ $50 for further customization"]}
              href="https://twitter.com/mannupaaji"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  NFT Burning dApp: <span className='text-red-600'>$150</span> 
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">
                    Let holders burn assets for your native tokens
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
              title={["+ $50 for MATIC raffles", "+ $50 for further customization"]}
              href="https://google.com"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  Raffle dApp: <span className='text-red-600'>$400</span> 
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 text-sm">
                     Host periodic lotteries in your native token or MATIC
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
              title={["+ $100 User upload + API costs", "+ $50 Other token support", "+ $50 for further customization"]}
              href="https://google.com"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  Marketplace: <span className='text-red-600'>$500</span> 
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 text-sm">
                    Spice things up by allowing holders buy NFTs with your native token
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
              title={["+ $50 for further customization"]}
              href="https://google.com"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  Airdrop dApp: <span className='text-red-600'>$150</span> 
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 text-sm">
                    Automatically collect addresses and send NFTs with a simple click
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
              title={["+ $50 for further customization"]}
              href="https://google.com"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  User Profile: <span className='text-red-600'>$600</span> 
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 text-sm">
                    Provide a space for your holders to showcase their NFTs
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
              title={["Join our Discord to know more"]}
              href={"https://google.com"}
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  Custom dApps <span className='text-red-600'></span> 
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 text-sm">
                    Let us help you bring your craziest ideas to life
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 red-grad brightness-150 items-center justify-center">
                  <Image alt='logo' src={logo} width={500} height={500} className=' w-40 scale-125'/>
                </div>
              </div>
            </PinContainer>
          </div>
          <h3 className='mx-auto text-center my-5 text-[#DF759C]'>
            <span className='text-white text-xl'>BUILD more, SAVE more </span> <br /> Get awesome discounts for making multiple dapps at once
          </h3>
        </div>
    </>
  )
}

export default Packages