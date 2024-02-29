import React from 'react'
import { PinContainer } from "../components/ui/3d-pin";

const Packages = () => {
  return (
    <>
    <h3 className='text-white text-3xl text-center mb-4'>Our Packages</h3>
        <h3 className='text-white/50 text-base text-center w-[60%] mx-auto'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit ratione alias assumenda id odio officiis debitis aliquam velit blanditiis deleniti.</h3>
        <div className='flex flex-col gap-5'>
          <div className=" my-20 mt-20 w-full flex flex-row items-center justify-center ">
            <PinContainer
              className=""
              containerClassName=""
              title="Contact us to make your own dapp"
              href="https://twitter.com/mannupaaji"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  Minting dapp
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">
                    Dapp to Mint
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 red-grad brightness-150" />
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
                  Minting dapp
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">
                    Dapp to Mint
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 red-grad brightness-150" />
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
                  Minting dapp
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">
                    Dapp to Mint
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 red-grad brightness-150" />
              </div>
            </PinContainer>
          </div>
        </div>
    </>
  )
}

export default Packages