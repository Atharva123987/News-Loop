import Image from 'next/image';
import Img from '../assets/news.jpeg'
import Link from 'next/link'

import SkeletonBox from './SkeletonBox';
export const NewsBox = () =>{
    return(
        <>
        <div className=' m-2 border border-cyan-500 hover:border-cyan-200 active:border-cyan-300 text-white w-1/3 hover:cursor-pointer
            p-5'>

            <SkeletonBox /> 
            </div>
            {/* <div className="
            m-2 border border-cyan-500 hover:border-cyan-200 active:border-cyan-300 text-white w-1/3 hover:cursor-pointer
            transition ease-in-out delay-50 bg-black hover:scale-105 hover:text-cyan-100 active:text-cyan-600 duration-300
            p-5
            ">     
            <Link href="http://google.com">
            <Image src={Img} alt="Logo" className="w-72"/>
            <span className='text-xl border-b border-white'>Title of news article</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quidem deleniti quam, inventore ea rerum error facere asperiores. Vero nulla fuga voluptates eligendi architecto modi at optio porro, perferendis provident.</p>
            </Link>
            </div> */}
           
         
           
            
        </>
    )
}
export default NewsBox;