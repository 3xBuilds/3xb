"use client"
import Image from 'next/image'

import { useScroll, useTransform } from "framer-motion";
import GoogleGeminiEffect from "./ui/google-gemini-effect";
import { useRef } from 'react';
import { motion } from "framer-motion";
import logo from '@/assets/logo.png'
import { AuroraBackground } from './ui/aurora-background';
import { IoIosMailOpen } from 'react-icons/io';
import { FaDiscord } from 'react-icons/fa6';

export default function Home() {

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 -mt-32 md:mt-0"
      >
        <button className="font-bold red-grad max-md:scale-75 backdrop-blur-sm md:mb-10 rounded-full overflow-hidden  mt-28 z-30 md:text-base text-black text-xs w-40 mx-auto ">
          <Image alt='logo' src={logo} width={500} height={500} className=' w-80 scale-125 '/>
        </button>
        <div className="w-full h-[890px] -top-60 md:-top-40 max-md:-top-52  flex items-center justify-center bg-red-transparent absolute ">
        
      </div>
        <p className="text-xl md:text-7xl font-normal md:pb-4 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300">
        We make it happen
      </p>
      <div className="text-xs md:text-xl font-normal text-center mb-20 text-red-200/60 md:mt-4 max-w-lg mx-auto">
        Tailored web solutions to your unique needs
        <div className="flex flex-row gap-3 md:mt-4 max-md:mt-4 max-md:flex-col items-center justify-center">
      <a className=" relative z-20 cursor-pointer" href="https://discord.gg/BAR43BhupQ" target="_blank">
        <button className=" cursor-pointer relative w-48 hover:scale-105 transform transition-all duration-300 hover:brightness-150 backdrop-brightness-150 inline-flex h-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full red-grad px-3 py-1 text-xs font-medium text-white backdrop-blur-3xl">
            <FaDiscord className="mr-2 text-xl" /> Join Our Discord 
          </span>
        </button>
      </a>
      <h3 className="text-white text-sm  max-md:hidden">or</h3>
      <a className=" relative z-20 cursor-pointer" href="mailto:3xbuilds@gmail.com" target="_blank">
        <button className=" cursor-pointer relative w-48 hover:scale-105 transform transition-all duration-300 hover:brightness-150 backdrop-brightness-150 inline-flex h-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full red-grad px-3 py-1 text-xs font-medium text-white backdrop-blur-3xl">
            <IoIosMailOpen className="mr-2 text-xl" /> Mail us at
          </span>
        </button>
      </a>
      </div>
      </div>
      
      </motion.div>
    </AuroraBackground>
  );
}
