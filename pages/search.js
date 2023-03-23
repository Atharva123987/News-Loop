import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { useState } from "react";
import NewsBox from "@/components/NewsBox";
import SearchBar from "@/components/SearchBar";
import SkeletonBox from "@/components/SkeletonBox";
import {BsArrow90DegUp} from 'react-icons/bs';
import Paginator from "@/components/Paginator";
export const Search = () =>{
    const [results, setResults] = useState(null);
    const [flag, setFlag] = useState(1);

    function handleMouseUp(){
      setFlag(0);
    }
    function handleMouseDown(){
      setFlag(1);
    }

    async function handleData(dataFromChild){
      console.log("DATA HERE!!",dataFromChild);
      setResults(dataFromChild);
    }
    if(!results){
      return(
        <>
        <div className="bg-black min-h-screen" >
        <NavBar/>
       
        <div className="mt-5 w-1/2 mx-auto" >
        <SearchBar setData={handleData} />
        </div>
        <div className="text-white flex justify-center mt-10 animate-bounce"  >
        <span><BsArrow90DegUp/></span> Enter above to search for articles...
        </div>
        {/* <Paginator/> */}
        
        </div>
        </>
      )
    }
   
    return(
        <>
        <div className="bg-black">
        <NavBar sendData={handleData}/>
        <div className="my-5 w-1/2 mx-auto">
        <SearchBar setData={handleData} flag={flag}/>
        </div>
        <div className="grid grid-cols-3 2xl:flex 2xl:flex-row bg-black" >
        
          {
            results?.map((e, i) => {
              return (<>
                <NewsBox key={i} title={e.title} description={e.description} url={e.link} urlToImage={e.image_url} data={handleData} />
              </>
              )
            })
          }
        </div>
        <Paginator/>
        <Footer/>
        </div>
        </>
    )
}
export default Search;