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
    <div className='h-screen bg-black'>
    <NavBar/>
    <NewsBox/>
    </div>
    </>
  )
}
