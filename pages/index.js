import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Imga from '../assets/favicon.png'
import NavBar from '@/components/NavBar'
import axios from 'axios';
import NewsBox from '@/components/NewsBox'
import { useState, useEffect } from 'react'
import SkeletonBox from '@/components/SkeletonBox'
const inter = Inter({ subsets: ['latin'] })









export default function Home(articles) {
  // axios.get(`https://newsapi.org/v2/top-headlines?q=tech&apiKey=ee7ca249c1654c309372b43a4a40cf8b&pageSize=3&language=en`)


  // const getNews = async()=> {
  //   const response = await axios.get('https://newsapi.org/v2/top-headlines', {
  //     params: {
  //       country: 'us',
  //       q : 'tech',
  //       pageSize : 3,
  //       language : 'en',
  //       apiKey: process.env.NEXT_PUBLIC_NEWS_KEY
  //     }
  //   });
  //   return response.data.articles;
  // }

  // const Articles1 = async () => {
  //   const articles =  await getNews();
  // };
  // const a = Articles1();
  // console.log(a);

  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?q=tech&apiKey=ee7ca249c1654c309372b43a4a40cf8b&pageSize=3&language=en`);
      setData(response.data);
    }

    fetchData();
  }, []);
  if (!data) return (
    <>
      <NavBar />
      <div className=' bg-black flex-row justify-center h-auto overflow-hidden'>

        <div className='text-white flex justify-center text-xl font-bold p-5 animate-pulse'>Happening Now</div>

        <h2 className='text-white text-xl border-b border-slate-100 p-2'>Entertainment</h2>



        <div className='flex'>
          
          <SkeletonBox/>
          <SkeletonBox/>
          <SkeletonBox/>

        </div>


      </div>
    </>
  )




  return (
    <>
      <NavBar />
      <div className=' bg-black flex-row justify-center h-auto overflow-hidden'>

        <div className='text-white flex justify-center text-xl font-bold p-5 animate-pulse'>Happening Now</div>

        <h2 className='text-white text-xl border-b border-slate-100 p-2'>Entertainment</h2>



        <div className='flex'>


          {
            data.articles.map((e, i) => {
              console.log("here : " + i + "times")
              return (<>
                <NewsBox title={e.title} description={e.description} url={e.url} urlToImage={e.urlToImage} />
                </>
              )
            })
          }
          



        </div>


      </div>

    </>
  )
}
