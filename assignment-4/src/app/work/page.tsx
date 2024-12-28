import Image from "next/image";

function Work() {
  return (
   <div className="relative flex flex-col items-center justify-center gap-16 w-full mx-auto px-10 py-16 my-16 bg-[#043873]">
     {/* Headline Section */}
     <div className="flex flex-col items-center gap-6 w-full max-w-[672px] h-auto relative z-1">
       <h1 className="text-[40px] text-center font-extrabold leading-[87px] text-white tracking-tight">
         Your work, Everywhere you are
       </h1>
       <p className="text-[18px] leading-[30px] text-center text-white tracking-tight">
         Access your notes from your computer, phone, or tablet by synchronizing
         with various services, including Whitespace, Dropbox, and OneDrive. The app is available on Windows, macOS, Linux, Android, and iOS. A terminal app is also available!
       </p>
       <button className="flex items-center justify-center gap-2 py-5 px-10 bg-[#4F9CF9] rounded-lg text-white font-medium text-[18px] leading-6">
         Try Taskey
         <Image src="/img/arrow.png" alt="Arrow" width={25} height={2} />
       </button>
     </div>
   </div>
  )
}

export default Work