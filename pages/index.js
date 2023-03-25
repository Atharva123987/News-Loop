import Head from 'next/head'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'
import axios from 'axios';
import NewsBox from '@/components/NewsBox'
import { useState, useEffect, use } from 'react'
import SkeletonBox from '@/components/SkeletonBox'
import Footer from '@/components/Footer'
import NewsImg from '@/assets/news.jpg'
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
        const response = await axios.get(`https://newsdata.io/api/1/news?apikey=pub_19486d236a24801ce9cafd13baa82c963b1ea&country=in&language=en`);
        setTopIndia(response.data.results.slice(0,3));
      }

    // FETCHING TOP HEADLINES IN ENTERTAINMENT
    async function fetchtopEnt() {
      const response = await axios.get(`https://newsdata.io/api/1/news?apikey=pub_19486d236a24801ce9cafd13baa82c963b1ea&category=entertainment&language=en`);
        setTopEnt(response.data.results.slice(0,3));
    }

    // FETCHING TOP HEADLINES IN POLITICS
    async function fetchtopPol() {
      const response = await axios.get(`https://newsdata.io/api/1/news?apikey=pub_19486d236a24801ce9cafd13baa82c963b1ea&category=politics&language=en`);
        setTopPol(response.data.results.slice(0,3));
    }

    // FETCHING TOP HEADLINES IN BUSINESS
    async function fetchtopBus() {
      const response = await axios.get(`https://newsdata.io/api/1/news?apikey=pub_19486d236a24801ce9cafd13baa82c963b1ea&category=business&language=en`);
        setTopBus(response.data.results.slice(0,3));
    }

    // FETCHING TOP HEADLINES IN TECH
    async function fetchtopTech() {
      const response = await axios.get(`https://newsdata.io/api/1/news?apikey=pub_19486d236a24801ce9cafd13baa82c963b1ea&category=technology&language=en`);
        setTopTech(response.data.results.slice(0,3));
    }

    // FETCHING TOP HEADLINES IN SPORTS
    async function fetchtopSports() {
      const response = await axios.get(`https://newsdata.io/api/1/news?apikey=pub_19486d236a24801ce9cafd13baa82c963b1ea&category=sports&language=en`);
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
      <Head>
        <title>News Loop</title>
        <meta name='description' content={`Live news india`}/>
        <meta property='og:image' content={NewsImg}/>
        <meta property='og:title' content='Top news from categories'/>
      </Head> 

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
    <Head>
        <title>News Loop</title>
        <meta name='description' content={`Live news india`}/>
        <meta property='og:image' content={NewsImg}/>
        <meta property='og:title' content='Top news from categories'/>
      </Head>
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
