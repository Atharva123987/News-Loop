import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { useState } from "react";
import NewsBox from "@/components/NewsBox";
export const Searchresult = ({}) =>{
    const [results, setResults] = useState(null);

    async function handleData(dataFromChild){
      setResults(await dataFromChild);
      console.log("RESULTS IN FINAL PAGE :",results)
    }
   
    return(
        <>
        <NavBar sendData={handleData}/>
        <div className="grid grid-cols-3 2xl:flex 2xl:flex-row">
        
          {
            results?.map((e, i) => {
              return (<>
                <NewsBox key={i} title={e.title} description={e.description} url={e.link} urlToImage={e.image_url} data={handleData} />
              </>
              )
            })
          }
        </div>
        <Footer/>

        </>
    )
}
export default Searchresult;