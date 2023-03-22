import NavBar from "@/components/NavBar";
import NewsBox from "@/components/NewsBox";
import Sidebar from "@/components/Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import SkeletonBox from "@/components/SkeletonBox";
import Footer from "@/components/Footer";
export const categories = () => {

  const [category, setCategory] = useState('');
  const [country, setCountry] = useState('');
  const [data, setData] = useState(null);
  const [flag, setFlag] = useState(1);
  
  function handleData(dataFromChild) {
    if (dataFromChild === 'in' || dataFromChild === 'us') {
      setCountry(dataFromChild);
    }
    else if(dataFromChild !== 'in' || dataFromChild !== 'us') {
      setCategory(dataFromChild)
    }
  }

  useEffect(() => {
    async function fetchCategoryData() {
      const response = await axios.get(`https://newsdata.io/api/1/news?apikey=pub_193099036b48062494a68a2dabf0ec7cb9b98&category=${category}&language=en`);
      setData(response.data.results);
      // set the state for category data
    }

    if (category !== '') {
      fetchCategoryData();
    }
  }, [category]);
 
  useEffect(() => {
    async function fetchCountryData() {
      const response = await axios.get(`https://newsdata.io/api/1/news?apikey=pub_193099036b48062494a68a2dabf0ec7cb9b98&country=${country}&language=en`);
        setData(response.data.results);
    }
    async function firstFetch(){
      const response = await axios.get(`https://newsdata.io/api/1/news?apikey=pub_193099036b48062494a68a2dabf0ec7cb9b98&country=in&language=en`);
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
  }, [country]);

  
  if (!data) {
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

  console.log(data);
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
      <Footer/>
      {/* <Paginator/> */}



    </>
  )
}
export default categories;