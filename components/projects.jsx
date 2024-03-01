import React from 'react'
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import banner1 from '../assets/tacoBanner.png'
import banner2 from '../assets/divBanner.png'
import banner3 from '../assets/oysterBanner.png'
import banner4 from '../assets/simplyBanner.png'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

const Projects = () => {

  const router = useRouter();

  return (
    <>
        <h3 className='text-white text-3xl text-center mb-4 mt-40'>Our Works</h3>
        <h3 className='text-white/50 text-base text-center w-[60%] mx-auto'>Take a look at the current works we have served our clients with</h3>
        <div className='flex flex-row flex-wrap mt-20 w-[85%] mx-auto items-center justify-center text-white'>
          <ProjectCard title="TacoTribe" description="Revamped the website for TacoTribe, a community driven NFT project." image={banner1} link="https://dapps.tacotribe.shop"/> 
          <ProjectCard title="Diversion" description="A complete AI integrated website for an international Hackthon" image={banner2} link="https://diversion.tech"/>   
          <ProjectCard title="Pearls NFT" description="Revamped the website for Pearls NFT, a community driven NFT project." image={banner3} link="https://oysterbar.tacotribe.shop/"/>
          <ProjectCard title="Simply Dapps" description="Provided utilities and features to their website." image={banner4} link="https://dapps-simply.vercel.app/"/>
        </div>
    </>
  )
}

const ProjectCard = ({title, description, image, link}) => {
  return (
    <div className='flex items-center justify-center overflow-y-hidden px-5 h-[400px]'>
    <CardContainer>
        <CardBody>
        <div onClick={()=>{router.push(link)}} className="flex cursor-pointer group shadow-black/80 shadow-2xl red-grad backdrop-blur-sm border-[1px] border-white/10 hover:border-white/30 transition-all duration-300 rounded-xl basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 ">
        <CardItem>
          <h3 className="max-w-xs group-hover:text-red-600 transition-all duration-300 text-xl !pb-2 !m-0 font-bold text-slate-100">
            {title}
          </h3>
        </CardItem>
        <CardItem>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-red-200/70 text-sm">
              {description}
            </span>
          </div>
        </CardItem>
            <CardItem>
          <div className="flex w-full transform group-hover:scale-105 transition-all duration-300 group-hover rounded-lg mt-4 red-grad overflow-hidden items-center justify-center">
              {image && <Image src={image} width={500} height={500} className='h-full object-cover '/>}
          </div>
            </CardItem>
        </div>
        </CardBody>
    </CardContainer>
    </div>
  )
}

export default Projects