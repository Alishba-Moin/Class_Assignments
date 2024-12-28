import Image from "next/image";

function UseExtension() {
  return (
    <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 w-full px-8 md:px-16 lg:px-20 py-16 lg:py-36 mx-auto my-8 lg:my-16 bg-[#043873]">
      {/* Headline Section */}
      <div className="flex flex-col items-start gap-8 md:gap-16 w-full lg:w-[672px] text-center lg:text-left">
        <div className="flex flex-col items-start gap-4 md:gap-6 w-full">
          <h1 className="text-[32px] md:text-[48px] lg:text-[72px] font-bold leading-tight text-white">
            Use as Extension
          </h1>
          <p className="text-[16px] md:text-[18px] leading-[28px] md:leading-[30px] text-white">
            Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
          </p>
          <button className="flex items-center justify-center gap-2 py-4 px-6 md:py-5 md:px-10 bg-[#4F9CF9] rounded-lg text-white font-medium text-[16px] md:text-[18px] leading-6">
            Let’s Go
            <Image src="/img/arrow.png" alt="Arrow" width={25} height={25} />
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative w-full lg:w-[648px] h-[240px] md:h-[300px] lg:h-[380px] flex-shrink-0">
        <Image 
          src="/img/extension.avif" 
          alt="Extension Image" 
          fill 
          className="rounded-lg object-cover" 
        />
      </div>
    </div>
  );
}

export default UseExtension;
