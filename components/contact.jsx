import { FaInstagram } from "react-icons/fa";
import { FaDiscord, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { IoIosMailOpen } from "react-icons/io";


const Contact = () => {
  return (
    <div className='bg-black w-full py-40'>
        <h3 className='text-white text-3xl text-center mb-4'>Contact Us</h3>
        <h3 className='text-white/50 text-base text-center w-[60%] mx-auto'>Just ask us and we will answer all your queries</h3>
        <div className=' flex flex-row flex-wrap items-center justify-center mt-10 gap-2 md:px-20 max-md:px-10'>
            <a href="mailto:3xbuilds@gmail.com" target="_blank">
                <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <IoIosMailOpen className="mr-2 text-xl max-md:mr-0" /> <span className="max-md:hidden">Mail us at </span>
                </button>
            </a>
            <a href="https://discord.gg/BAR43BhupQ" target="_blank">
                <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <FaDiscord className="mr-2 text-xl max-md:mr-0" /> <span className="max-md:hidden">Join Our Discord </span>
                </button>
            </a>
            <a href="https://twitter.com/3xBuilds" target="_blank">
                <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <FaXTwitter className="mr-2 text-xl max-md:mr-0" /> <span className="max-md:hidden">Twitter</span>
                </button>
            </a>
            <a href="https://www.linkedin.com/company/3xbuilds" target="_blank">
                <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <FaLinkedin className="mr-2 text-xl max-md:mr-0" /> <span className="max-md:hidden">Linkedin</span>
                </button>
            </a>
            <a href="https://www.instagram.com/3xbuilds" target="_blank">
                <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <FaInstagram className="mr-2 text-xl max-md:mr-0" /> <span className="max-md:hidden">Instagram</span>
                </button>
            </a>
        </div>
    </div>
  )
}

export default Contact