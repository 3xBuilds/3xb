"use client"
import React from 'react'
import {LampContainer} from '../components/ui/lamp'
import { motion } from 'framer-motion'

const Clients = () => {
  return (
    <>
    <LampContainer className={""}>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        <h3 className='text-white text-3xl text-center mb-4'>Our Clients</h3>
        <h3 className='text-white/50 text-base text-center w-[60%] mx-auto'>Some products we have worked on</h3>
      </motion.div>
    </LampContainer>

    </>
  )
}

export default Clients