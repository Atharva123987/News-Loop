import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { useState } from "react";
import NewsBox from "@/components/NewsBox";
import SearchBar from "@/components/SearchBar";
import SkeletonBox from "@/components/SkeletonBox";
import { BsArrow90DegUp } from 'react-icons/bs';
export const Search = () => {
  const [results, setResults] = useState(null);
  const [flag, setFlag] = useState(1);
  const [pageNo, setPageNo] = useState(1);
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(10);
   const [change, setChange] = useState(1);
   const[nextPage, setNextPage] = useState(null);
  function prevPageLoad(){
      if(pageNo > 1){
          setPageNo(pageNo-1);
          setStart(start-10);
          setEnd(end-10);
      }
      else{
      }
  }
  function nextPageLoad(){
      if(pageNo === 10){
      }
      else{
          setPageNo(pageNo+1);
          setStart(start+10);
          setEnd(end+10);
      }
  }

  function handleNext(){
    nextPageLoad();
    setChange(!change);
    
  }

  async function handleData(dataFromChild) {
    setResults(dataFromChild);
  }
  
  if (!results) {
    return (
      <>
        <div className="bg-black min-h-screen" >
          <NavBar />

          <div className="mt-5 w-1/2 mx-auto" >
            <SearchBar setData={handleData} nextPage={nextPage} />
          </div>
          <div className="text-white flex justify-center mt-10 animate-bounce"  >
            <span><BsArrow90DegUp /></span> Enter above to search for articles...
          </div>

        </div>
      </>
    )
  }

  return (
    <>
      <div className="bg-black">
        <NavBar sendData={handleData} />
        <div className="my-5 w-1/2 mx-auto">
          <SearchBar setData={handleData} change={change} />
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

        <div>
          <div class="flex flex-col items-center bg-black">
            <span class="text-sm text-white ">
              Showing <span class="font-semibold text-white">{start}</span> to <span class="font-semibold text-white ">{end}</span> of <span class="font-semibold text-white ">100</span> Entries
            </span>
            <div class="inline-flex mt-2 xs:mt-0">
              <button class="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900   " onClick={prevPageLoad} >
                Prev
              </button>
              <button class="px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 " onClick={handleNext} >
                Next
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}
export default Search;