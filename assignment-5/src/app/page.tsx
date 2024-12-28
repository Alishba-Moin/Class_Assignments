export default function Home() {
  return (
    <div className="grid grid-rows-[100px_200px_200px_100px] grid-cols-3 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-black py-8 px-8 min-h-screen overflow-hidden">

    <div className="bg-purple-800 col-span-3 text-center border-2 md:text-[40px]">
      Header
    </div>
  
    <div className="bg-teal-400 row-span-2 text-center border-2 md:text-[40px] sm:col-span-1 md:col-span-1">
      Sidebar
    </div>
  
    <div className="bg-blue-600 col-span-1 text-center  border-2 md:text-[40px] md:col-span-2">
      Content 1
    </div>
  
    <div className="bg-blue-600 text-center  border-2 md:text-[40px]  sm:col-span-1 md:col-span-1">
      Content 2
    </div>
  
    <div className="bg-blue-600 text-center  border-2  md:text-[40px] sm:col-span-1 md:col-span-1">
      Content 3
    </div>
  
    <div className="bg-purple-800 col-span-3 text-center  border-2  md:text-[40px]">
      Footer
    </div>
  </div>
  
  );
}
