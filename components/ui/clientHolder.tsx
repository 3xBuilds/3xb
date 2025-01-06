import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

export const ClientHolder = ({image, name, twitter, twitterId}:{image:StaticImageData, name:string, twitter:string, twitterId:string}) => {
  return (
    <Link href={twitter} target='_blank' className='bg-red-300/5 w-60 h-60 hover:scale-[1.01] duration-200 rounded-xl flex flex-col justify-center items-center'>
        <div className='flex items-center justify-center'>
            <Image alt={twitterId} src={image} className='w-24 h-24 rounded-full' />
        </div>
        <div className='text-center '>
            <h3 className='text-xl font-bold text-white'>{name}</h3>
            <a href={twitter} target='_blank' className='text-red-300'>@{twitterId}</a>
        </div>
    </Link>
  )
}
