import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import SkeletonBox from './SkeletonBox';
import newsImage from '../assets/news.jpg';

export const NewsBox = ({title, description, url, urlToImage}) =>{
  const [imgSrc, setImgSrc] = useState(newsImage);

  useEffect(() => {
    if (urlToImage) {
      setImgSrc(urlToImage);
    }
  }, [urlToImage]);

  return (
    <>
      <div className="
        m-2 bg-black shadow-lg shadow-white/20 border border-white/40  hover:shadow-cyan-500/50  hover:border-cyan-300/50 text-white hover:cursor-pointer
        transition ease-in-out delay-50 bg-black hover:scale-105 hover:text-cyan-100 active:text-cyan-600 duration-300
        p-5  text-ellipsis overflow-hidden
      ">     
        <Link href={`${url}`} >
          <Image
            src={imgSrc}
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
  );
};
export default NewsBox;
