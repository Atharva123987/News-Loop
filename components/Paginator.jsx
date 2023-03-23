import { useState } from "react";



export const Paginator = ()=>{
    const [start, setStart] = useState(1);
    const [end, setEnd] = useState(10);
    const [pageNo, setPageNo] = useState(1);
    function prevPage(){
        if(pageNo > 1){
            setPageNo(pageNo-1);
            setStart(start-10);
            setEnd(end-10);
            console.log("Going to prev page")
        }
        else{
            console.log("You cannot go to prev page")
        }
    }
    function nextPage(){
        if(pageNo === 10){
            console.log("You cannot go to next page")
        }
        else{
            setPageNo(pageNo+1);
            setStart(start+10);
            setEnd(end+10);
            console.log("Going to next page")
        }
    }

    return(
        <>
        
<div class="flex flex-col items-center bg-black">
  <span class="text-sm text-white ">
      Showing <span class="font-semibold text-white">{start}</span> to <span class="font-semibold text-white ">{end}</span> of <span class="font-semibold text-white ">100</span> Entries
  </span>
  <div class="inline-flex mt-2 xs:mt-0">
      <button class="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900   " onClick={prevPage}>
          Prev
      </button>
      <button class="px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 " onClick={nextPage}>
          Next
      </button>
  </div>
</div>

        </>
    )
}
export default Paginator;