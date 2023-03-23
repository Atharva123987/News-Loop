import NavBar from "@/components/NavBar";
import NewsBox from "@/components/NewsBox";
import Sidebar from "@/components/Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import SkeletonBox from "@/components/SkeletonBox";
import Footer from "@/components/Footer";
import Paginator from "@/components/Paginator";
export const Categories = () => {

  const [category, setCategory] = useState('');
  const [country, setCountry] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(1);
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
      setLoading(1);
      const response = await axios.get(`https://newsdata.io/api/1/news?apikey=pub_19377c4d210b1017dd0913533850ee2791d15&category=${category}&language=en`);
      setData(response.data.results);
      setLoading(0);
      // set the state for category data
    }

    if (category !== '') {
      fetchCategoryData();
    }
  }, [category]);
 
  useEffect(() => {
    async function fetchCountryData() {
      setLoading(1);
      const response = await axios.get(`https://newsdata.io/api/1/news?apikey=pub_19377c4d210b1017dd0913533850ee2791d15&country=${country}&language=en`);
        setData(response.data.results);
        setLoading(0);
    }
    async function firstFetch(){
      const response = await axios.get(`https://newsdata.io/api/1/news?apikey=pub_19377c4d210b1017dd0913533850ee2791d15&country=in&language=en`);

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
        <Paginator/>
      <Footer/>
      



    </>
  )
}
export default Categories;