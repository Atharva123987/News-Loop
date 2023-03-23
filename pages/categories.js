import NavBar from "@/components/NavBar";
import NewsBox from "@/components/NewsBox";
import Sidebar from "@/components/Sidebar";
import { animateScroll } from 'react-scroll';
import { useState, useEffect } from "react";
import axios from "axios";
import SkeletonBox from "@/components/SkeletonBox";
import Footer from "@/components/Footer";
export const Categories = () => {

  const [category, setCategory] = useState('');
  const [country, setCountry] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(1);
  const [flag, setFlag] = useState(1);
  const [pageNo, setPageNo] = useState(1); // PAGE NUMBER VARIABLE
  const [nextPage, setNextPage] = useState(null);
  const [change, setChange] = useState(0);
  const [pageAddress, setPageAddress] = useState([0]); // ARRAY OF PAGE NUMBERS
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(10);

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

  function handleData(dataFromChild) {
    if (dataFromChild === 'in' || dataFromChild === 'us') {
      setCountry(dataFromChild);
    }
    else if(dataFromChild !== 'in' || dataFromChild !== 'us') {
      setCategory(dataFromChild)
    }
  }

  function handleNext(){
    nextPageLoad();
    setChange(!change);
    animateScroll.scrollToTop();
  }
  useEffect(() => {
    async function fetchCategoryData() {
      setLoading(1);
      const response = await axios.get(`https://newsdata.io/api/1/news?apikey=pub_193939041275f751217f8a716cf574c903412&category=${category}&page=${nextPage}&language=en`);
      setNextPage(await response.data.nextPage)
      setPageAddress(current => [... current, nextPage])
      setPageNo(pageNo+1);
      setData(response.data.results);
      setLoading(0);
    }
    if (category !== '') {
      fetchCategoryData();
    }
  }, [category, change]);
 
  useEffect(() => {
    async function fetchCountryData() {
      setLoading(1);
      const response = await axios.get(`https://newsdata.io/api/1/news?apikey=pub_193939041275f751217f8a716cf574c903412&country=${country}&page=${nextPage}&language=en`);
        setData(response.data.results);
        setNextPage(response.data.nextPage)
        setLoading(0);
        
    }
    
  
    async function firstFetch(){
      const response = await axios.get(`https://newsdata.io/api/1/news?apikey=pub_193939041275f751217f8a716cf574c903412&country=in&page&language=en`);
      setNextPage(await response.data.nextPage);
      setPageAddress(current => [... current, nextPage])
      setData(response.data.results);
    }

    if (country !== '') {
      fetchCountryData();
    }
    if(flag){
      setFlag(0);
      firstFetch();
      setCountry('in')
    }
  }, [country, change]);


  if (!data || loading) {
    return (
      <>
        <NavBar />

        <div className="flex bg-black w-auto ">
          <Sidebar sendData={handleData} />
          <div>
            <h1 className="ml-10 text-white text-xl font-bold animate-pulse">Loading...</h1>
            <div className="ml-10 mt-10 md:grid md:grid-cols-3 md:gap-[5vw]  ">

              <span className="w-72 "><SkeletonBox/></span>
              <span className="w-72"><SkeletonBox/></span>
              <span className="w-72 mb-12" ><SkeletonBox/></span>

              <span className="w-72"><SkeletonBox/></span>
              <span className="w-72"><SkeletonBox/></span>
              <span className="w-72 mb-12" ><SkeletonBox/></span>


              <span className="w-72"><SkeletonBox/></span>
              <span className="w-72"><SkeletonBox/></span>
              <span className="w-72 mb-12" ><SkeletonBox/></span>

            </div>
            <Footer/>
          </div>
        </div>

      </>
    )
  }

  
  return (
    <>
      <NavBar />

      <div className="flex bg-black ">
        <Sidebar sendData={handleData} />
       
        <div className="grid grid-cols-3 2xl:flex 2xl:flex-row">
        
          {
            data.map((e, i) => {
              return (<>
                <NewsBox key={i} title={e.title} description={e.description} url={e.link} urlToImage={e.image_url} />
              </>
              )
            })
          }
        </div>
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
        
      <Footer/>
      



    </>
  )
}
export default Categories;