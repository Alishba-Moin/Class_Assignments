import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex h-[465px] w-11/12">
        <div className="flex flex-col flex-1 gap-4 justify-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 mt-28">
            Governor Sindh
          </h1>
          <h2 className="text-4xl text-blue-900 ">
            Kamran Khan Tessori
          </h2>
          <div className="text-4xl font-extrabold text-blue-400 ">
            <p>Certified Cloud</p>
            <p>Applied Generative AI</p>
            <p>Engineer (GenEng)</p>
          </div>
          <p className="text-2xl font-extrabold text-blue-900 ">
            Earn up to $5,000 / month
          </p>
          <p className="text-2xl font-extrabold text-blue-900 ">
            Now admissions are open in <br />Hyderabad
          </p>
          <div className="flex gap-12 justify-center md:justify-start">
            <button className="bg-blue-900 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold">
              APPLY NOW
            </button>
            <div className="flex items-center text-lg text-blue-900 flex-col text-center">
  <span className="font-extrabold text-blue-900 text-2xl">
    562,143
  </span>
  <span className="text-blue-900 mt-2">
    Accepted Applications
  </span>
</div>

          </div>
        </div>
        <div className="flex-1 mt-10">
          <Image 
            src="/hero-img.png"
            alt="Banner Image" 
            width={1500}
            height={1500}
            className="object-cover w-[1200px] h-[500px]"

          />
          </div>
      </div>
    </div>
  );
}