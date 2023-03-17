import NavBar from "@/components/NavBar";
import NewsBox from "@/components/NewsBox";
import Sidebar from "@/components/Sidebar";
export const categories = () => {
  return (
    <>
      <NavBar />

      <div className="flex">
        <Sidebar />

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ml-5">
          <NewsBox />
          <NewsBox />
          <NewsBox />
          <NewsBox />


        </div>


      </div>



    </>
  )
}
export default categories;