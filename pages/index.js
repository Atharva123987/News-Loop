import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Imga from '../assets/favicon.png'
import NavBar from '@/components/NavBar'
import axios from 'axios';
import NewsBox from '@/components/NewsBox'
import { useState, useEffect, use } from 'react'
import SkeletonBox from '@/components/SkeletonBox'
import Footer from '@/components/Footer'
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
  //   return response.topIndia.articles;
  // }

  // const Articles1 = async () => {
  //   const articles =  await getNews();
  // };
  // const a = Articles1();

  
  const [topIndia, setTopIndia] = useState(null);
  const [topEnt, setTopEnt] = useState(null);
  const [topPol, setTopPol] = useState(null);
  const [topBus, setTopBus] = useState(null);
  const [topTech, setTopTech] = useState(null);
  const [topSports, setTopSports] = useState(null);

  useEffect(() => {
   
    // FETCHING TOP HEADLINES IN INDIA
    async function fetchtopIndia() {
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.NEXT_PUBLIC_NEWS_KEY}&pageSize=3&language=en`);
      setTopIndia(response.data);
      console.log(response.data)
    }

    // FETCHING TOP HEADLINES IN ENTERTAINMENT
    async function fetchtopEnt() {
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?category=entertainment&country=in&apiKey=${process.env.NEXT_PUBLIC_NEWS_KEY}&pageSize=3&language=en`);
      setTopEnt(response.data);
      console.log(response.data)
    }

    // FETCHING TOP HEADLINES IN POLITICS
    async function fetchtopPol() {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=politics&sortBy=publishedAt&apiKey=${process.env.NEXT_PUBLIC_NEWS_KEY}&pageSize=3&language=en`);
      setTopPol(response.data);
      console.log(response.data)
    }

    // FETCHING TOP HEADLINES IN BUSINESS
    async function fetchtopBus() {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=business&sortBy=publishedAt&apiKey=${process.env.NEXT_PUBLIC_NEWS_KEY}&pageSize=3&language=en`);
      setTopBus(response.data);
      console.log(response.data)
    }

    // FETCHING TOP HEADLINES IN TECH
    async function fetchtopTech() {
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?category=technology&apiKey=${process.env.NEXT_PUBLIC_NEWS_KEY}&pageSize=3&language=en`);
      setTopTech(response.data);
      console.log(response.data)
    }

    // FETCHING TOP HEADLINES IN SPORTS
    async function fetchtopSports() {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=sports&sortBy=publishedAt&apiKey=${process.env.NEXT_PUBLIC_NEWS_KEY}&pageSize=3&language=en`);
      setTopSports(response.data);
      console.log(response.data)
    }

    fetchtopSports();
    fetchtopTech();
    fetchtopBus();
    fetchtopPol();
    fetchtopEnt();
    fetchtopIndia();
  }, []);

  if (!topIndia || !topEnt || !topPol || !topBus || !topTech || !topSports) return (
    <>
    
      <NavBar />
      <div className=' bg-black flex-row justify-center h-auto overflow-hidden'>

      <div className='text-black flex justify-center text-xl font-bold m-5 relative'>
          <div className='border-2 border-white text-white rounded-xl inline-flex items-center relative p-2'>
            Live Now
            <span className='absolute top-0 right-0 transform translate-x-0 translate-y-0 h-2 w-2 rounded-full bg-red-500 animate-ping'></span>
          </div>
        </div>

        <h2 className='text-white text-xl border-slate-100 p-2 animate-pulse'>Loading...</h2>
        <div className='grid grid-cols-3 justify-evenly'>

          <span><SkeletonBox /></span>
          <span><SkeletonBox /></span>
          <span><SkeletonBox /></span>

        </div>
      
        <h2 className='text-white text-xl border-slate-100 p-2 animate-pulse'>Loading...</h2>
        <div className='grid grid-cols-3 justify-evenly'>

          <span><SkeletonBox /></span>
          <span><SkeletonBox /></span>
          <span><SkeletonBox /></span>

        </div>
        <h2 className='text-white text-xl border-slate-100 p-2 animate-pulse'>Loading...</h2>
        <div className='grid grid-cols-3 justify-evenly'>

          <span><SkeletonBox /></span>
          <span><SkeletonBox /></span>
          <span><SkeletonBox /></span>

        </div>
        <h2 className='text-white text-xl border-slate-100 p-2 animate-pulse'>Loading...</h2>
        <div className='grid grid-cols-3 justify-evenly'>

          <span><SkeletonBox /></span>
          <span><SkeletonBox /></span>
          <span><SkeletonBox /></span>

        </div>
        <h2 className='text-white text-xl border-slate-100 p-2 animate-pulse'>Loading...</h2>
        <div className='grid grid-cols-3 justify-evenly'>

          <span><SkeletonBox /></span>
          <span><SkeletonBox /></span>
          <span><SkeletonBox /></span>

        </div>
        <h2 className='text-white text-xl border-slate-100 p-2 animate-pulse'>Loading...</h2>
        <div className='grid grid-cols-3 justify-evenly'>

          <span><SkeletonBox /></span>
          <span><SkeletonBox /></span>
          <span><SkeletonBox /></span>

        </div>


      </div>
    </>
  )

  return (
    <>
      <NavBar />
      <div className=' bg-black flex-row justify-center h-auto overflow-hidden'>

      <div className='text-black flex justify-center text-xl font-bold m-5 relative'>
          <div className='border-2 border-white text-white rounded-xl inline-flex items-center relative p-2'>
            Live Now
            <span className='absolute top-0 right-0 transform translate-x-0 translate-y-0 h-2 w-2 rounded-full bg-red-500 animate-ping'></span>
          </div>
        </div>


        <h2 className='text-white text-xl border-b border-slate-100 p-2'>Top in India</h2>
        <div className='flex'>
          {
            topIndia.articles.map((e,i) => {

              return (<>
                <NewsBox key={i}title={e.title} description={e.description} url={e.url} urlToImage={e.urlToImage} />
              </>
              )
            })
          }


        </div>

        <h2 className='text-white text-xl border-b border-slate-100 p-2'>Top in Entertainment</h2>
        <div className='flex'>
          {
            topEnt.articles.map((e,i) => {

              return (<>
                <NewsBox key={i} title={e.title} description={e.description} url={e.url} urlToImage={e.urlToImage} />
              </>
              )
            })
          }

        </div>

        <h2 className='text-white text-xl border-b border-slate-100 p-2'>Top in Politics</h2>
        <div className='flex'>
          {
            topPol.articles.map((e,i) => {

              return (<>
                <NewsBox key={i} title={e.title} description={e.description} url={e.url} urlToImage={e.urlToImage} />
              </>
              )
            })
          }
        </div>

        <h2 className='text-white text-xl border-b border-slate-100 p-2'>Top in Business</h2>
        <div className='flex'>
          {
            topBus.articles.map((e,i) => {

              return (<>
                <NewsBox key={i} title={e.title} description={e.description} url={e.url} urlToImage={e.urlToImage} />
              </>
              )
            })
          }
        </div>

        <h2 className='text-white text-xl border-b border-slate-100 p-2'>Top in Technology</h2>
        <div className='flex'>
          {
            topTech.articles.map((e,i) => {

              return (<>
                <NewsBox key={i}title={e.title} description={e.description} url={e.url} urlToImage={e.urlToImage} />
              </>
              )
            })
          }
        </div>

        <h2 className='text-white text-xl border-b border-slate-100 p-2'>Top in Sports</h2>
        <div className='flex'>
          {
            topSports.articles.map((e,i) => {

              return (<>
                <NewsBox key={i} title={e.title} description={e.description} url={e.url} urlToImage={e.urlToImage} />
              </>
              )
            })
          }
        </div>

        <Footer />

      </div>

    </>
  )
}
