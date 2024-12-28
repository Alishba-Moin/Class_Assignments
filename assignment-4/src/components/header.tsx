import Image from "next/image";

function Header() {
  return (
    <header className="flex items-center justify-between px-20 py-4 bg-[#043873] w-full h-[92px] fixed top-0 left-0 z-10">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
      <Image src="/img/Logo.png" alt="icon" width={25} height={25}/>  
        <h1 className="text-2xl font-bold text-white">Whitepace</h1>
      </div>

      <nav  className= "flex justify-between gap-16">
      <ul className= "flex justify-center gap-[50px] text-white ">
                      <li>Products</li>
                      <li>Solutions</li>
                      <li>Pricing</li>                   
                      <li>Resources</li>
                  </ul>           
      </nav>
        <div  className= "flex items-center gap-6">
           {/* Login Button */}
        <button className="px-10 py-4 bg-[#FFE492] rounded-md text-[#043873] font-medium text-lg">
          Login
        </button>

        {/* Free Trial Button */}
        <button className="px-6 py-4 bg-[#4F9CF9] rounded-md text-white font-medium text-lg flex items-center gap-2">
          Try Whitepace free
          <Image src="/img/arrow.png" alt="" width={25} height={2}/>
        </button>
        </div>
    </header>
  )
}

export default Header;