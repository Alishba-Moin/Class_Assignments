import Image from "next/image";

function WorkTogether() {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-20 py-16 lg:py-36 my-16">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start w-full gap-12 lg:gap-24">
        
        {/* Left Column */}
        <div className="relative w-full h-[300px] lg:w-[455px] lg:h-[430px]">
          {/* Ellipses for Decoration */}
          <div className="absolute border-2 border-dashed border-[#A7CEFC] rounded-full w-[260px] h-[260px] lg:w-[330px] lg:h-[330px] left-4 top-0"></div>
          <div className="absolute border-2 border-dashed border-[#A7CEFC] rounded-full w-[150px] h-[150px] lg:w-[194px] lg:h-[194px] left-[50px] lg:left-[86px] top-[40px] lg:top-[68px]"></div>
          <div className="absolute bg-[#FF5758] rounded-full w-[25px] h-[25px] lg:w-[35px] lg:h-[35px] left-0 top-[90px] lg:top-[148px]"></div>
          <div className="absolute bg-[#37A3FF] rounded-full w-[25px] h-[25px] lg:w-[35px] lg:h-[35px] left-[170px] lg:left-[262px] top-[90px] lg:top-[148px]"></div>
          <div className="absolute bg-[#FFBF60] rounded-full w-[25px] h-[25px] lg:w-[35px] lg:h-[35px] left-[120px] lg:left-[165px] top-[180px] lg:top-[244px]"></div>
          <div className="absolute bg-[#37A3FF] rounded-full w-[25px] h-[25px] lg:w-[35px] lg:h-[35px] left-[50px] lg:left-[69px] top-[90px] lg:top-[148px]"></div>
          <div className="absolute bg-[#37A3FF] rounded-full w-[25px] h-[25px] lg:w-[35px] lg:h-[35px] left-[50px] lg:left-[69px] top-[200px] lg:top-[284px]"></div>
          <div className="absolute bg-[#37A3FF] rounded-full w-[25px] h-[25px] lg:w-[35px] lg:h-[35px] left-[180px] lg:left-[282px] top-[20px] lg:top-[36px]"></div>
          <div className="absolute bg-[#C4C4C4] rounded-full w-[25px] h-[25px] lg:w-[35px] lg:h-[35px] left-[220px] lg:left-[320px] top-[120px] lg:top-[200px]"></div>
          <div className="absolute bg-[#00CA75] rounded-full w-[25px] h-[25px] lg:w-[35px] lg:h-[35px] left-[120px] lg:left-[166px] top-[30px] lg:top-[51px]"></div>
          <div className="absolute bg-[#FFDC4D] rounded-full w-[25px] h-[25px] lg:w-[35px] lg:h-[35px] left-[50px] lg:left-[70px] top-[0px] lg:top-[12px]"></div>

          {/* Rectangle with Logo Icon */}
          <div className="absolute w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] shadow-lg rounded-lg left-[100px] lg:left-[158px] top-[100px] lg:top-[140px]">
            <div >
              <Image src="/img/Logo.png" alt="logo" width={50} height={50} />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-[672px] gap-6">
          <h1 className="text-[40px] lg:text-[70px] font-bold leading-tight lg:leading-[87px] text-[#212529] tracking-tight">
            Work together
          </h1>
          <p className="text-[16px] lg:text-[18px] leading-[28px] lg:leading-[30px] text-[#212529] tracking-tight">
            With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.
          </p>

          <button className="flex items-center justify-center gap-2 py-4 lg:py-5 px-8 lg:px-10 bg-[#4F9CF9] rounded-lg text-white font-medium text-[16px] lg:text-[18px] leading-6">
            Try it now
            <Image src="/img/arrow.png" alt="Arrow" width={25} height={25} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default WorkTogether;
