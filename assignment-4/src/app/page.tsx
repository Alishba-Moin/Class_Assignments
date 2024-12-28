import Hero from "@/components/hero";
import Image from "next/image";
import Pricing from "@/components/card"
import ClientTestimonials from "@/components/clients"
import ProjectMangment from "./project-managment/page";
import WorkTogether from "./work-together/page";
import UseExtension from "./use-extension/page";
import Customize from "./customize/page";
import Work from "./work/page";
import Sponsers from "./sponsers/page";
export default function Home() {
  return (
    <main>
     <Hero/>

     <ProjectMangment/>

<WorkTogether/>

<UseExtension/>
    
<Customize/>

<Pricing/>

<Work/>



<div className="relative flex items-center gap-16 w-full max-w-5xl mx-auto my-16">

{/* Headline Section */}
<div className="flex flex-col items-start gap-16 w-[672px] h-[411px] relative z-1">
  <div className="flex flex-col items-start gap-6 w-[672px] h-[288px] isolate">
    <h1 className="text-[62px] font-bold leading-[87px] text-[#212529] tracking-tight">
    100% Your Data
    </h1>
    <p className="text-[18px] leading-[30px] text-[#212529] tracking-tight">
    The app is open source and notes are saved to an open format, you'll always have access to them. Uses End-To_End Encription (E2EE) to secure your notes and ensure no-one but yourself can access them.
    </p>

  <button className="flex items-center justify-center gap-2 py-5 px-10 bg-[#4F9CF9] rounded-lg text-white font-medium text-[18px] leading-6">
  Read more
    <Image src="/img/arrow.png" alt="Arrow" width={25} height={2}/>
  </button>
  </div>
</div>
 {/* Image Section */}
 <div className="relative w-[1000px] h-[300px] z-1 mb-20">
    <Image 
      src="/img/dataElem.png" 
      alt="" 
      fill
    />
  </div>
</div>

<Sponsers/>


<div className="relative flex items-center gap-16 w-full px-20 py-36 mx-auto my-16 bg-[#043873]">
  {/* Image container */}
<div >
        <Image 
        src="/img/Apps.png" 
        alt="" 
        width={600}
        height={600}
        className="transparent"
        />
      </div>
{/* Headline Section */}
<div className="flex flex-col items-start gap-16 w-[672px] h-[411px] relative z-1">
  <div className="flex flex-col items-start gap-6 w-[672px] h-[288px] isolate">
    <h1 className="text-[62px] font-bold leading-[87px] text-white tracking-tight">
    Work With Your <br /> Favourite Apps Using  <br /> whitepace
    </h1>
    <p className="text-[18px] leading-[30px] text-white tracking-tight">
    whitepace teams up with your favourite software. Integrate with over 1000+ apps
    with Zapier to have all the tools you need for your projects success.
    </p>
  <button className="flex items-center justify-center gap-2 py-5 px-10 bg-[#4F9CF9] rounded-lg text-white font-medium text-[18px] leading-6">
  Read more
    <Image src="/img/arrow.png" alt="Arrow" width={25} height={2}/>
  </button>
</div>
</div>
</div>

<div><ClientTestimonials/></div>
 
  </main>
  );
}
