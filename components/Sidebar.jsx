import React from "react";
import {GiIndianPalace} from 'react-icons/gi'
import {GiWorld} from 'react-icons/gi'
import {MdOutlineLocalMovies} from 'react-icons/md'
import {RiGovernmentLine} from 'react-icons/ri'
import {GiLightBulb} from 'react-icons/gi'
import {MdOutlineSportsCricket} from 'react-icons/md'
import {GiMoneyStack} from 'react-icons/gi'
import {MdOutlineHealthAndSafety} from 'react-icons/md'
const Sidebar = (props) => {

    function handleClick(e){
        props.sendData(e.target.getAttribute('data-name').trim()) 
    }

    return (
        <div className="2xl:h-screen bg-black text-white w-42">

            <div className="py-4 px-2">
                <h1 className="text-3xl font-bold uppercase">Categories</h1>
            </div>

            <nav className="mt-8">

                <ul className="space-y-2">

                    <li>
                        <a href='#' data-name="in" onClick={handleClick} className="block py-2 px-4 rounded text-white bg-black hover:bg-blue-800 transform transition hover:-translate-y-1 hover:scale-110 active:bg-gray-900 ">
                        <GiIndianPalace/>India
                        </a>
                    </li>
                   
                    <li>
                        <a href='#' data-name="us" onClick={handleClick} className="block py-2 px-4 rounded text-white bg-black hover:bg-blue-800 transform transition hover:-translate-y-1 hover:scale-110 active:bg-gray-900 ">
                        <GiWorld/> World
                        </a>
                    </li>

                    <li>
                        <a  href="#" data-name="entertainment" onClick={handleClick} className="block py-2 px-4 rounded text-white bg-black hover:bg-blue-800 transform transition hover:-translate-y-1 hover:scale-110 active:bg-gray-900">
                           <MdOutlineLocalMovies/> Entertainment
                        </a>
                    </li>

                    <li>
                        <a href="#" data-name="politics" onClick={handleClick} className="block py-2 px-4 rounded text-white bg-black hover:bg-blue-800 transform transition hover:-translate-y-1 hover:scale-110 active:bg-gray-900">
                           <RiGovernmentLine/> Politics
                        </a>
                    </li>

                    <li>
                        <a href="#" data-name="technology" onClick={handleClick}  className="block py-2 px-4 rounded text-white bg-black hover:bg-blue-800 transform transition hover:-translate-y-1 hover:scale-110 active:bg-gray-900">
                            <GiLightBulb/>Technology
                        </a>
                    </li>

                    <li>
                        <a href="#" data-name="sports" onClick={handleClick}  className="block py-2 px-4 rounded text-white bg-black hover:bg-blue-800 transform transition hover:-translate-y-1 hover:scale-110 active:bg-gray-900">
                           <MdOutlineSportsCricket/> Sports
                        </a>
                    </li>

                    <li>
                        <a href="#" data-name="business" onClick={handleClick}  className="block py-2 px-4 rounded text-white bg-black hover:bg-blue-800 transform transition hover:-translate-y-1 hover:scale-110 active:bg-gray-900">
                            <GiMoneyStack/>Business
                        </a>
                    </li>

                    <li>
                        <a href="#" data-name="health" onClick={handleClick}  className="block py-2 px-4 rounded text-white bg-black hover:bg-blue-800 transform transition hover:-translate-y-1 hover:scale-110 active:bg-gray-900">
                        <MdOutlineHealthAndSafety/>   Health
                        </a>
                    </li>
                    


                    

                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
