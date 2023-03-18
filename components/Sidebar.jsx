import React from "react";
import {GiIndianPalace} from 'react-icons/gi'
import {GiWorld} from 'react-icons/gi'
import {MdOutlineLocalMovies} from 'react-icons/md'
import {RiGovernmentLine} from 'react-icons/ri'
import {GiLightBulb} from 'react-icons/gi'
import {MdOutlineSportsCricket} from 'react-icons/md'
import {GiMoneyStack} from 'react-icons/gi'
import {MdOutlineHealthAndSafety} from 'react-icons/md'
import Link  from "next/link";
const Sidebar = () => {
    return (
        <div className="h-screen bg-black text-white w-42">

            <div className="py-4 px-2">
                <h1 className="text-3xl font-bold uppercase">Categories</h1>
            </div>

            <nav className="mt-8">

                <ul className="space-y-2">

                    <li>
                        <Link href='https://github.com/Atharva123987' className="block py-2 px-4 rounded text-white bg-black hover:bg-blue-800 transform transition hover:-translate-y-1 hover:scale-110 active:bg-gray-900 ">
                        <GiIndianPalace/>India
                        </Link>
                    </li>

                    <li>
                        <a href="#" className="block py-2 px-4 rounded text-white bg-black hover:bg-blue-800 transform transition hover:-translate-y-1 hover:scale-110 active:bg-gray-900">
                        <GiWorld/> World
                        </a>
                    </li>

                    <li>
                        <a href="#" className="block py-2 px-4 rounded text-white bg-black hover:bg-blue-800 transform transition hover:-translate-y-1 hover:scale-110 active:bg-gray-900">
                           <MdOutlineLocalMovies/> Entertainment
                        </a>
                    </li>

                    <li>
                        <a href="#" className="block py-2 px-4 rounded text-white bg-black hover:bg-blue-800 transform transition hover:-translate-y-1 hover:scale-110 active:bg-gray-900">
                           <RiGovernmentLine/> Politics
                        </a>
                    </li>

                    <li>
                        <a href="#" className="block py-2 px-4 rounded text-white bg-black hover:bg-blue-800 transform transition hover:-translate-y-1 hover:scale-110 active:bg-gray-900">
                            <GiLightBulb/>Technology
                        </a>
                    </li>

                    <li>
                        <a href="#" className="block py-2 px-4 rounded text-white bg-black hover:bg-blue-800 transform transition hover:-translate-y-1 hover:scale-110 active:bg-gray-900">
                           <MdOutlineSportsCricket/> Sports
                        </a>
                    </li>

                    <li>
                        <a href="#" className="block py-2 px-4 rounded text-white bg-black hover:bg-blue-800 transform transition hover:-translate-y-1 hover:scale-110 active:bg-gray-900">
                            <GiMoneyStack/>Business
                        </a>
                    </li>

                    <li>
                        <a href="#" className="block py-2 px-4 rounded text-white bg-black hover:bg-blue-800 transform transition hover:-translate-y-1 hover:scale-110 active:bg-gray-900">
                         <MdOutlineHealthAndSafety/>   Health
                        </a>
                    </li>



                    

                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
