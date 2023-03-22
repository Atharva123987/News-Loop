import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { useState } from "react";
export const searchresult = ({articles}) =>{
    const [results, setResults] = useState(data);

    function handleData(){
      
    }
    return(
        <>
        <NavBar/>
        <div className="grid grid-cols-3 2xl:flex 2xl:flex-row">
        
          {/* {
            results.map((e, i) => {
              return (<>
                <NewsBox key={i} title={e.title} description={e.description} url={e.link} urlToImage={e.image_url} data={handleData} />
              </>
              )
            })
          } */}
        </div>
        <Footer/>

        </>
    )
}
export default searchresult;