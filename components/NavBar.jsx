import Img from '../assets/favicon.png'
import Image from 'next/image';
export const NavBar =()=> {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Image src={Img} alt="Logo" className="h-12 w-12"/>
        <span className="ml-2 font-semibold text-xl tracking-tight text-black ">News Loop</span>
      </div>
      <div className="flex items-center">
        <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black  hover:bg-slate-200 active:bg-slate-300 hover:bg-white mt-4 lg:mt-0 mr-4">Home</button>
        <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black  hover:bg-slate-200 active:bg-slate-300 hover:bg-white mt-4 lg:mt-0">Categories</button>
      </div>
    </nav>
  );
}

export default NavBar;
