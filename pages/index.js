import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Imga from '../assets/favicon.png'
import NavBar  from '@/components/NavBar'
import NewsBox from '@/components/NewsBox'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <NavBar/>
    <div className=' bg-black flex-row justify-center h-auto overflow-hidden'>

    <div className='text-white flex justify-center text-xl font-bold p-5 animate-pulse'>Happening Now</div>
    
    <h2 className='text-white text-xl border-b border-slate-100 p-2'>Entertainment</h2>
    
    

    <div className='flex'>
    {/* Replace later with 3 newsboxes for each category */}
    <NewsBox/>
    <NewsBox/>
    <NewsBox/>
    </div>
    <h2 className='text-white text-xl border-b border-slate-100 p-2'>Business</h2>
    <div className='flex '>
    {/* Replace later with 3 newsboxes for each category */}
    <NewsBox/>
    <NewsBox/>
    <NewsBox/>
    </div>
    <h2 className='text-white text-xl border-b border-slate-100 p-2'>Sports</h2>
    <div className='flex'>
    {/* Replace later with 3 newsboxes for each category */}
    <NewsBox/>
    <NewsBox/>
    <NewsBox/>
    </div>

    </div>
    
    </>
  )
}
