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


  const [topIndia, setTopIndia] = useState(null);
  const [topEnt, setTopEnt] = useState(null);
  const [topPol, setTopPol] = useState(null);
  const [topBus, setTopBus] = useState(null);
  const [topTech, setTopTech] = useState(null);
  const [topSports, setTopSports] = useState(null);

  useEffect(() => {

    // FETCHING TOP HEADLINES IN INDIA
    async function fetchtopIndia() {

      const options = {
        method: 'GET',
        url: 'https://bing-news-search1.p.rapidapi.com/news',
        params: {
          count: '3',
          originalImg: 'true',
          cc: 'in',
          safeSearch: 'Off',
          textFormat: 'Raw'
        },
        headers: {
          'X-BingApis-SDK': 'true',
          'X-RapidAPI-Key': '91559ed112mshb8f361437369b5ap10f7d2jsn868baad3e673',
          'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
        }
      };
      
      const response = await axios.request(options);
      setTopIndia(response.data.value);
      console.log("DATA : ",response.data.value)
      
      
    }

    // FETCHING TOP HEADLINES IN ENTERTAINMENT
    async function fetchtopEnt() {
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?category=entertainment&country=in&apiKey=${process.env.NEXT_PUBLIC_NEWS_KEY}&pageSize=3&language=en`);
      setTopEnt(response.data);
      // console.log(response.data)
    }

    // FETCHING TOP HEADLINES IN POLITICS
    async function fetchtopPol() {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=politics&sortBy=publishedAt&apiKey=${process.env.NEXT_PUBLIC_NEWS_KEY}&pageSize=3&language=en`);
      setTopPol(response.data);
      // console.log(response.data)
    }

    // FETCHING TOP HEADLINES IN BUSINESS
    async function fetchtopBus() {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=business&sortBy=publishedAt&apiKey=${process.env.NEXT_PUBLIC_NEWS_KEY}&pageSize=3&language=en`);
      setTopBus(response.data);
      // console.log(response.data)
    }

    // FETCHING TOP HEADLINES IN TECH
    async function fetchtopTech() {
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?category=technology&apiKey=${process.env.NEXT_PUBLIC_NEWS_KEY}&pageSize=3&language=en`);
      setTopTech(response.data);
      // console.log(response.data)
    }

    // FETCHING TOP HEADLINES IN SPORTS
    async function fetchtopSports() {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=sports&sortBy=publishedAt&apiKey=${process.env.NEXT_PUBLIC_NEWS_KEY}&pageSize=3&language=en`);
      setTopSports(response.data);
      // console.log(response.data)
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

          <span><SkeletonBox width={"30vw"} /></span>
          <span><SkeletonBox width={"30vw"} /></span>
          <span><SkeletonBox width={"30vw"} /></span>

        </div>

        <h2 className='text-white text-xl border-slate-100 p-2 animate-pulse'>Loading...</h2>
        <div className='grid grid-cols-3 justify-evenly'>

          <span><SkeletonBox width={"30vw"} /></span>
          <span><SkeletonBox width={"30vw"} /></span>
          <span><SkeletonBox width={"30vw"} /></span>

        </div>
        <h2 className='text-white text-xl border-slate-100 p-2 animate-pulse'>Loading...</h2>
        <div className='grid grid-cols-3 justify-evenly'>

          <span><SkeletonBox width={"30vw"} /></span>
          <span><SkeletonBox width={"30vw"} /></span>
          <span><SkeletonBox width={"30vw"} /></span>

        </div>
        <h2 className='text-white text-xl border-slate-100 p-2 animate-pulse'>Loading...</h2>
        <div className='grid grid-cols-3 justify-evenly'>

          <span><SkeletonBox width={"30vw"} /></span>
          <span><SkeletonBox width={"30vw"} /></span>
          <span><SkeletonBox width={"30vw"} /></span>

        </div>
        <h2 className='text-white text-xl border-slate-100 p-2 animate-pulse'>Loading...</h2>
        <div className='grid grid-cols-3 justify-evenly'>

          <span><SkeletonBox width={"30vw"} /></span>
          <span><SkeletonBox width={"30vw"} /></span>
          <span><SkeletonBox width={"30vw"} /></span>

        </div>
        <h2 className='text-white text-xl border-slate-100 p-2 animate-pulse'>Loading...</h2>
        <div className='grid grid-cols-3 justify-evenly'>

          <span><SkeletonBox width={"30vw"} /></span>
          <span><SkeletonBox width={"30vw"} /></span>
          <span><SkeletonBox width={"30vw"} /></span>

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
        <div className='grid grid-cols-3 grid-rows-1 grid-flow-col'>
          {
            topIndia.map((e, i) => {
              if(i===3)return;
              return (<>
                <NewsBox key={i} title={e.name} description={e.description} url={e.url} urlToImage={e.image?.thumbnail?.contentUrl} />
              </>
              )
            })
          }
        </div>


        <h2 className='text-white text-xl border-b border-slate-100 p-2'>Top in Entertainment</h2>
        <div className='grid grid-cols-3 grid-rows-1 grid-flow-col'>
          {
            topEnt.articles.map((e, i) => {

              return (<>
                <NewsBox key={i} title={e.title} description={e.description} url={e.url} urlToImage={e.urlToImage} />
              </>
              )
            })
          }

        </div>

        <h2 className='text-white text-xl border-b border-slate-100 p-2'>Top in Politics</h2>
        <div className='grid grid-cols-3 grid-rows-1 grid-flow-col'>
          {
            topPol.articles.map((e, i) => {

              return (<>
                <NewsBox key={i} title={e.title} description={e.description} url={e.url} urlToImage={e.urlToImage} />
              </>
              )
            })
          }
        </div>

        <h2 className='text-white text-xl border-b border-slate-100 p-2'>Top in Business</h2>
        <div className='grid grid-cols-3 grid-rows-1 grid-flow-col'>
          {
            topBus.articles.map((e, i) => {

              return (<>
                <NewsBox key={i} title={e.title} description={e.description} url={e.url} urlToImage={e.urlToImage} />
              </>
              )
            })
          }
        </div>

        <h2 className='text-white text-xl border-b border-slate-100 p-2'>Top in Technology</h2>
        <div className='grid grid-cols-3 grid-rows-1 grid-flow-col'>
          {
            topTech.articles.map((e, i) => {

              return (<>
                <NewsBox key={i} title={e.title} description={e.description} url={e.url} urlToImage={e.urlToImage} />
              </>
              )
            })
          }
        </div>

        <h2 className='text-white text-xl border-b border-slate-100 p-2'>Top in Sports</h2>
        <div className='grid grid-cols-3 grid-rows-1 grid-flow-col'>
          {
            topSports.articles.map((e, i) => {

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
