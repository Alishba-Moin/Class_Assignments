import Image from "next/image";

function Customize() {
  return (
    <div className="relative flex items-center gap-16 w-full max-w-5xl mx-auto my-16">
     {/* Image Section */}
     <div className="relative w-[714px] h-[400px] z-1">
        <Image 
          src="/img/customise.avif" 
          alt="" 
          fill
          className="rounded-lg"
        />
      </div>
    {/* Headline Section */}
    <div className="flex flex-col items-start gap-16 w-[672px] h-[411px] relative z-1">
      <div className="flex flex-col items-start gap-6 w-[672px] h-[288px] isolate">
        <h1 className="text-[70px] font-bold leading-[87px] text-[#212529] tracking-tight">
        Customise it to your needs
        </h1>
        <p className="text-[18px] leading-[30px] text-[#212529] tracking-tight">
        Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API. 
        </p>
      <button className="flex items-center justify-center gap-2 py-5 px-10 bg-[#4F9CF9] rounded-lg text-white font-medium text-[18px] leading-6">
      Let’s Go
        <Image src="/img/arrow.png" alt="Arrow" width={25} height={2}/>
      </button>
      </div>
    </div>
    </div>
  )
}

export default Customize