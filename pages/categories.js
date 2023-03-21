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
  const [pageNumber, setPageNumber] = useState(1);
  function handleData(dataFromChild) {
    if (dataFromChild === 'in' || dataFromChild === 'us') {
      setCountry(dataFromChild);
    }
    if(dataFromChild !== 'in' || dataFromChild !== 'us') {
      setCategory(dataFromChild)
    }
  }

  // useEffect(() => {
  //   async function fetchCategoryData() {
  //     const response = await axios.get(`https://newsapi.org/v2/top-headlines?category=${category}&sortBy=publishedAt&apiKey=${process.env.NEXT_PUBLIC_NEWS_KEY}&pageSize=30&language=en`);
  //     setData(response.data)
  //     // set the state for category data
  //   }

  //   if (category !== '') {
  //     fetchCategoryData();
  //   }
  // }, [category]);

  // useEffect(() => {
  //   async function fetchCountryData() {
  //     const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&sortBy=publishedAt&apiKey=${process.env.NEXT_PUBLIC_NEWS_KEY}&pageSize=15&page=${pageNumber}&language=en`);
  //     // console.log(response.data);
  //     setData(response.data)
  //     // set the state for country data
  //   }

  //   if (country !== '') {
  //     fetchCountryData();
  //   }
  // }, [country]);


  if (!data) {
    return (
      <>
        <NavBar />

        <div className="flex bg-cyan-700">
          <Sidebar sendData={handleData} />
          <div>
            <h1 className="ml-5 text-white text-xl font-bold animate-pulse">Loading...</h1>
            <div className="ml-5 mt-10 grid grid-cols-3 w-screen">

              <span><SkeletonBox width={"25vw"} /></span>
              <span><SkeletonBox width={"25vw"} /></span>
              <span className="mb-12"><SkeletonBox width={"25vw"} /></span>

              <span><SkeletonBox width={"25vw"} /></span>
              <span><SkeletonBox width={"25vw"} /></span>
              <span className="mb-12"><SkeletonBox width={"25vw"} /></span>

              <span><SkeletonBox width={"25vw"} /></span>
              <span><SkeletonBox width={"25vw"} /></span>
              <span className="mb-12"><SkeletonBox width={"25vw"} /></span>
            </div>
          </div>
        </div>

      </>
    )
  }

  console.log(data);
  return (
    <>
      <NavBar />

      <div className="flex bg-black">
        <Sidebar sendData={handleData} />

        <div className="grid grid-cols-3">

          {data.articles.map((article, index) => (
            <NewsBox
              key={index}
              title={article.title}
              description={article.description}
              url={article.url}
              urlToImage={article.urlToImage}
            />
          ))}
        </div>



      </div>

      {/* <Paginator/> */}

      <Footer/>


    </>
  )
}
export default categories;