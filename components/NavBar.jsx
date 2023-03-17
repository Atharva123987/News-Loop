import Img from '../assets/favicon.png'
import Img1 from '../assets/git.png'
import Image from 'next/image';
import Link from 'next/link'
export const NavBar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href='/'><Image src={Img} alt="Logo" className="h-12 w-12 hover:cursor-pointer " /></Link>
        <span className="ml-2 font-semibold text-xl tracking-tight text-black ">News Loop</span>
      </div>
      <div className="flex items-center">

        <Link href='/'><button className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black  hover:bg-slate-200 active:bg-slate-300 hover:bg-white mt-4 lg:mt-0 mr-4 hover:border-cyan-500">Home</button></Link>

        <Link href='/categories'><button className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black  hover:bg-slate-200 active:bg-slate-300 hover:bg-white mt-4 lg:mt-0 hover:border-cyan-500">Categories</button></Link>

        <div id="git-logo" className=''>
          <a href="https://github.com/Atharva123987/News-Loop" target="_blank">
            <Image src={Img1} width={50} alt="github logo "className='ml-5 hover:cursor-pointer transition  delay-50 hover:scale-125 hover:hue-rotate-60 duration-150'/>
          </a>
        </div>

      </div>
    </nav>
  );
}

export default NavBar;
