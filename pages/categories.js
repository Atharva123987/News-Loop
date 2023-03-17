import NavBar from "@/components/NavBar";
import Sidebar from "@/components/Sidebar";
export const categories = () => {
  return (
    <>
      <NavBar />

      <div className="flex">
        <Sidebar />
        <main className="py-8 px-4 ml-64 mr-4">
          <h1 className="text-3xl font-bold">Main content goes here</h1>
        </main>
      </div>
    </>
  )
}
export default categories;