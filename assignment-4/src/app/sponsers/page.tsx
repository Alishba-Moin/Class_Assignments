import Image from "next/image";

function Sponsers() {
  return (
    <div className="relative flex flex-col items-center gap-10 w-full max-w-5xl mx-auto my-16">
      <h1 className="text-[70px] text-center font-bold leading-[87px] text-[#212529] tracking-tight">
        Our Sponsors
      </h1>
      
      <div className="flex justify-center mt-6">
        <Image src="/img/sponsors.png" alt="" width={1000} height={1200} />
      </div>
    </div>
  )
}

export default Sponsers