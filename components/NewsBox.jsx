import Image from 'next/image';
import Img from '../assets/news.jpeg'
import Link from 'next/link'
import { useState,useEffect } from 'react';
import SkeletonBox from './SkeletonBox';

//,url,urlToImage,description
export const NewsBox = ({title, description, url, urlToImage}) =>{
    
    return(
        <>
        
            <div className="
            m-2 border border-cyan-500 hover:border-cyan-200 active:border-cyan-300 text-white hover:cursor-pointer
            transition ease-in-out delay-50 bg-black hover:scale-105 hover:text-cyan-100 active:text-cyan-600 duration-300
            p-5  text-ellipsis overflow-hidden
            ">     
            <Link href={`${url}`} >
            <Image
        src={urlToImage}
        alt="Example Image"
        width={500}
        height={500}
        className="w-72"
        unoptimized
      />
            <span className='text-xl  border-white'>{title}</span>
            
            <p className='mt-2 '>{description}</p>
            </Link>
            </div>
           
         
           
            
        </>
    )
}
export default NewsBox;