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
        const response = await axios.get(`https://newsdata.io/api/1/news?apikey=${process.env.NEXT_PUBLIC_NEWS_KEY}&country=in&language=en`);
        console.log(response.data.results.slice(0,3))
        setTopIndia(response.data.results.slice(0,3));
      }

    // FETCHING TOP HEADLINES IN ENTERTAINMENT
    
    async function fetchtopEnt() {
      const response = await axios.get(`https://newsdata.io/api/1/news?apikey=${process.env.NEXT_PUBLIC_NEWS_KEY}&category=entertainment&language=en`);
      console.log(response.data.results.slice(0,3))
        setTopEnt(response.data.results.slice(0,3));
    }

    // FETCHING TOP HEADLINES IN POLITICS
    async function fetchtopPol() {
      const response = await axios.get(`https://newsdata.io/api/1/news?apikey=${process.env.NEXT_PUBLIC_NEWS_KEY}&category=politics&language=en`);
      console.log(response.data.results.slice(0,3))
        setTopPol(response.data.results.slice(0,3));
    }

    // FETCHING TOP HEADLINES IN BUSINESS
    async function fetchtopBus() {
      const response = await axios.get(`https://newsdata.io/api/1/news?apikey=${process.env.NEXT_PUBLIC_NEWS_KEY}&category=business&language=en`);
      console.log(response.data.results.slice(0,3))
        setTopBus(response.data.results.slice(0,3));
    }

    // FETCHING TOP HEADLINES IN TECH
    async function fetchtopTech() {
      const response = await axios.get(`https://newsdata.io/api/1/news?apikey=${process.env.NEXT_PUBLIC_NEWS_KEY}&category=technology&language=en`);
      console.log(response.data.results.slice(0,3))
        setTopTech(response.data.results.slice(0,3));
    }

    // FETCHING TOP HEADLINES IN SPORTS
    async function fetchtopSports() {
      const response = await axios.get(`https://newsdata.io/api/1/news?apikey=${process.env.NEXT_PUBLIC_NEWS_KEY}&category=sports&language=en`);
      console.log(response.data.results.slice(0,3))
        setTopSports(response.data.results.slice(0,3));
    }

    fetchtopSports();
    fetchtopTech();
    fetchtopBus();
    fetchtopPol();
    fetchtopEnt();
    fetchtopIndia();
  }, []);

  // 
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
      <div className=' bg-black flex-row justify-center h-auto overflow-hidden '>

        <div className='text-black flex justify-center text-xl font-bold m-5 relative'>
          <div className='border-2 border-white text-white rounded-xl inline-flex items-center relative p-2'>
            Live Now
            <span className='absolute top-0 right-0 transform translate-x-0 translate-y-0 h-2 w-2 rounded-full bg-red-500 animate-ping'></span>
          </div>
        </div>


        <h2 className='text-white text-xl border-b border-slate-100 p-2'>Top in India</h2>
        <div className='md:grid md:grid-cols-3 md:grid-rows-1 md:grid-flow-col flex flex-col'>
          {
            
            topIndia.map((e, i) => {
              return (<>
                <NewsBox key={i} title={e.title} description={e.description} url={e.link} urlToImage={e.image_url} />
              </>
              )
            })
          }
        </div>


        <h2 className='text-white text-xl border-b border-slate-100 p-2'>Top in Entertainment</h2>
        <div className='md:grid md:grid-cols-3 md:grid-rows-1 md:grid-flow-col flex flex-col'>
          {
            topEnt.map((e, i) => {

              return (<>
                <NewsBox key={i} title={e.title} description={e.description} url={e.link} urlToImage={e.image_url} />
              </>
              )
            })
          }

        </div>

        <h2 className='text-white text-xl border-b border-slate-100 p-2'>Top in Politics</h2>
        <div className='md:grid md:grid-cols-3 md:grid-rows-1 md:grid-flow-col flex flex-col'>
          {
            topPol.map((e, i) => {

              return (<>
                <NewsBox key={i} title={e.title} description={e.description} url={e.link} urlToImage={e.image_url} />
              </>
              )
            })
          }
        </div>

        <h2 className='text-white text-xl border-b border-slate-100 p-2'>Top in Business</h2>
        <div className='md:grid md:grid-cols-3 md:grid-rows-1 md:grid-flow-col flex flex-col'>
          {
            topBus.map((e, i) => {

              return (<>
                <NewsBox key={i} title={e.title} description={e.description} url={e.link} urlToImage={e.image_url} />
              </>
              )
            })
          }
        </div>

        <h2 className='text-white text-xl border-b border-slate-100 p-2'>Top in Technology</h2>
        <div className='md:grid md:grid-cols-3 md:grid-rows-1 md:grid-flow-col flex flex-col'>
          {
            topTech.map((e, i) => {

              return (<>
               <NewsBox key={i} title={e.title} description={e.description} url={e.link} urlToImage={e.image_url} />
              </>
              )
            })
          }
        </div>

        <h2 className='text-white text-xl border-b border-slate-100 p-2'>Top in Sports</h2>
        <div className='md:grid md:grid-cols-3 md:grid-rows-1 md:grid-flow-col flex flex-col'>
          {
            topSports.map((e, i) => {

              return (<>
                <NewsBox key={i} title={e.title} description={e.description} url={e.link} urlToImage={e.image_url} />
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
