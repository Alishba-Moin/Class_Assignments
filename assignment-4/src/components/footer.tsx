import Image from "next/image"
import Link from 'next/link';
import { ImAndroid } from "react-icons/im";
import { GrApple } from "react-icons/gr";


function Footer() {
  return (
    <main className="bg-[#043873] flex flex-col items-center justify-center gap-16 md:px-16 lg:px-32 relative z-10">

  {/* Upper Section: Heading, Button, and App Icons */}
  <div className="w-full flex flex-col items-center gap-[20px] mt-16">
    <h1 className="text-white text-center font-bold text-[72px] leading-[87px] tracking-[-0.02em]">
      Try Whitepace today
    </h1>
    <p className="text-white text-center text-[24px] leading-[32px] tracking-[-0.02em] w-[550px]">
      Get started for free. Add your whole team as your needs grow.
    </p>

    {/* Button Section */}
    <button className="flex items-center justify-center px-10 py-5 bg-[#4F9CF9] rounded-lg text-white font-medium text-[16px] leading-[19px] tracking-[-0.02em]">
      Try Taskey free
      <Image src="/img/arrow.png" alt="Arrow" width={25} height={25} />
    </button>

    {/* Contact Sales Section */}
    <p className="text-white text-center text-[24px] leading-[32px] tracking-[-0.02em]">
      On a big team? Contact sales
    </p>

    {/* App Icon Section */}
    <div className="flex items-start gap-[40px]">
      <div className="w-[60px] h-[60px] rounded text-white">
      <Image src="/img/apple.svg" alt="icon" width={50} height={50} />
      </div>
      <div className="w-[60px] h-[60px] rounded text-white">
        <Image src="/img/windows.svg" alt="icon" width={50} height={50} />
      </div>
      <div className="w-[60px] h-[60px] rounded text-white">
      <Image src="/img/android.svg" alt="icon" width={50} height={50} />
      </div>
    </div>
  </div>

  {/* Footer Section: Logo, Product, Resources, Company Links */}
  <div className="w-full max-w-screen-xl flex flex-col md:flex-row items-start justify-between gap-12 lg:gap-24 mt-16">
    
    {/* Logo and Description Section */}
    <div className="flex flex-col w-full md:w-1/4">
      <div className="relative">
        
        <h1 className="text-4xl font-bold text-white">whitepace</h1>
      </div>
      <p className="text-[#F7F7EE] text-lg">
        whitepace was created for the new ways we live and work. We make a better workspace around the world.
      </p>
    </div>

    {/* Product Section */}
    <div className="flex flex-col gap-4 w-full md:w-1/4">
      <h2 className="text-white text-xl font-semibold">Product</h2>
      <Link href="#" className="text-[#FFE492] text-lg">Overview</Link>
      <Link href="#" className="text-white text-lg">Pricing</Link>
      <Link href="#" className="text-white text-lg">Customer stories</Link>
    </div>

    {/* Resources Section */}
    <div className="flex flex-col gap-4 w-full md:w-1/4">
      <h2 className="text-white text-xl font-semibold">Resources</h2>
      <Link href="#" className="text-white text-lg">Blog</Link>
      <Link href="#" className="text-white text-lg">Guides & tutorials</Link>
      <Link href="#" className="text-white text-lg">Help center</Link>
    </div>

    {/* Company Section */}
    <div className="flex flex-col gap-4 w-full md:w-1/4">
      <h2 className="text-white text-xl font-semibold">Company</h2>
      <Link href="#" className="text-white text-lg">About us</Link>
      <Link href="#" className="text-white text-lg">Careers</Link>
      <Link href="#" className="text-white text-lg">Media kit</Link>
    </div>

     {/* Try it Today Section */}
     <div className="flex flex-col items-start gap-6 w-full md:w-1/4">
          <h2 className="text-white text-xl font-semibold">Try It Today</h2>
          <p className="text-white text-lg">
            Get started for free. Add your whole team as your needs grow.
          </p>
          <button className="flex items-center justify-center gap-2 px-6 bg-[#4F9CF9] rounded-lg text-white font-medium text-[18px] leading-6">
          Start it Today      
         <Image src="/img/arrow.png" alt="Arrow" width={25} height={2}/>
        </button>
        </div>
  </div>

</main>
  )
}

export default Footer;