"use client"
import React from 'react'
import {LampContainer} from '../components/ui/lamp'
import { motion } from 'framer-motion'

import taco from "@/assets/clients/taco.png"
import chums from "@/assets/clients/chums.jpg"
import jlema from "@/assets/clients/jlema.png"
import creative from "@/assets/clients/creative.jpg"
import notjp from "@/assets/clients/notjp.jpg"
import icegirls from "@/assets/clients/icegirl.jpg"
import jim from "@/assets/clients/jim.jpg"
import bpp from "@/assets/clients/bpp.jpg"
import baos from "@/assets/clients/baos.jpg"

import { ClientHolder } from './ui/clientHolder'

const clients = [
  {
    image: taco,
    name: "Taco Tribe",
    twitter: "https://x.com/TheTacoTribe",
    twitterId: "TheTacoTribe",
  },
  {
    image: chums,
    name: "Chum Chums",
    twitter: "https://x.com/chumchumsnft",
    twitterId: "chumchumsnft",
  },
  {
    image: jlema,
    name: "Jlema",
    twitter: "https://x.com/JlemaNFT",
    twitterId: "JlemaNFT",
  },
  {
    image: creative,
    name: "Creative Owl",
    twitter: "https://x.com/MyCreativeOwls",
    twitterId: "MyCreativeOwls",
  },
  {
    image: notjp,
    name: "NotJP",
    twitter: "https://x.com/_notjp",
    twitterId: "_notjp",
  },
  {
    image: icegirls,
    name: "IceGirls",
    twitter: "https://x.com/IceGirlzNFT",
    twitterId: "IceGirlzNFT"
  },
  {
    image: jim,
    name: "Jims RPG",
    twitter: "https://x.com/jimsrpg",
    twitterId: "jimsrpg"
  },
  {
    image: bpp,
    name: "Ballpark Punks",
    twitter: "https://x.com/BallParkPunks",
    twitterId: "BallParkPunks"
  },
  {
    image: baos,
    name: "Baos",
    twitter: "https://x.com/LittleBaoNFT",
    twitterId: "LittleBaoNFT"
  }

]

const OurClients = () => {
  return (
    <div className='pb-20'>
      <div>

      </div>
    {/* <LampContainer className={" h-screen "}> */}
      {/* <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 0.8, y: 50 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      > */}
        <div className='mt-20 mb-10'>
          <h3 className='text-white  text-3xl text-center mb-4'>Our Clients</h3>
        </div>
      {/* </motion.div> */}

        <div className='flex flex-wrap gap-4 items-center justify-center'>
          {clients.map((client, index) => (
            <ClientHolder image={client.image} name={client.name} twitter={client.twitter} twitterId={client.twitterId} />
          ))}
        </div>

    {/* </LampContainer> */}

    </div>
  )
}

export default OurClients
