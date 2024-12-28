import Image from "next/image"

export default function Home() {
  return (
    <div className="flex items-center">
      <div className="flex flex-col flex-1 gap-4 justify-center px-14 w-1/2 mt-20">
      <h1 className="font-bold text-[44px]">Welcome To Our Website</h1>
      <p className="font-normal text-[32px]"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard</p>
      <button className="text-white bg-black w-[237px] h-[66px] p-4 text-xl">Contact Us</button>
      </div>
      <div className="px-20 mt-20">
        {/* image from public folder */}
        <Image
        src="/img.avif" 
        alt="image" 
        width={502}
        height={800}
        />
      </div>
      <div>
      </div>
    </div>
  )
}
