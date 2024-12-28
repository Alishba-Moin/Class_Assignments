import Image from "next/image"
export default function ClientTestimonials() {
  return (
   <div className="flex flex-col items-center gap-16 w-full mx-auto my-16">
  {/* Title */}
  <div className="flex flex-col items-center gap-6">
    <h1 className="text-[62px] font-bold leading-[87px] text-[#212529] tracking-tight">
      What Our Clients Says
    </h1>
  </div>

  {/* Testimonials Section */}
  <div className="flex flex-row justify-center gap-10 mt-5 flex-wrap">
    {/* Frame 1 */}
    <main className="w-[400px] h-[429.57px] border-t-[1px] border-r-2 border-b-2 border-gray-200 shadow-sm rounded-lg">
      <div className="text-slate-900 p-10">
        <div className="flex flex-row">
          <Image src="/img/Bthumb.png" alt="" width={50} height={50} />
        </div>
        <p className="mt-7 mb-7">
          Whitespace is designed as a collaboration tool for businesses that is a full project management solution.
        </p>
        <hr className="w-72 h-1 border-[1] border-gray-800 content-center" />
      </div>
      <div className="flex flex-row justify-center gap-5">
        <div>
          <Image
            src="/img/girl.png"
            alt=""
            width={80}
            height={80}
            className="border border-gray-500 shadow-stone-600 rounded-full"
          />
        </div>
        <div>
          <h1 className="text-black">
            <b>Oberon Shaw, MCH</b>
          </h1>
          <p className="text-black">
            Head of Talent Acquisition, <br />
            North America
          </p>
        </div>
      </div>
    </main>

    {/* Frame 2 */}
    <main className="w-[400px] h-[429.57px] border border-blue-400 rounded bg-blue-400 shadow-lg">
      <div className="text-white p-10">
        <div className="flex flex-row">
          <Image src="/img/Wthumb.png" alt="" width={50} height={50} />
        </div>
        <p className="mt-7 mb-7">
          Whitespace is designed as a collaboration tool for businesses that is a full project management solution.
        </p>
        <hr className="w-72 h-1 border-[1] border-blue-200 content-center" />
      </div>
      <div className="flex flex-row justify-center gap-5">
        <div>
          <Image
            src="/img/boy1.png"
            alt=""
            width={80}
            height={80}
            className="border border-white rounded-full"
          />
        </div>
        <div>
          <h1 className="text-blue-900">
            <b>Oberon Shaw, MCH</b>
          </h1>
          <p className="text-white">
            Head of Talent Acquisition, <br />
            North America
          </p>
        </div>
      </div>
    </main>

    {/* Frame 3 */}
    <main className="w-[400px] h-[429.57px] border border-blue-400 rounded bg-blue-400 shadow-lg">
      <div className="text-white p-10">
        <div className="flex flex-row">
          <Image src="/img/Wthumb.png" alt="" width={50} height={50} />
        </div>
        <p className="mt-7 mb-7">
          Whitespace is designed as a collaboration tool for businesses that is a full project management solution.
        </p>
        <hr className="w-72 h-1 border-[1] border-blue-200 content-center" />
      </div>
      <div className="flex flex-row justify-center gap-5">
        <div>
          <Image
            src="/img/boy2.png"
            alt=""
            width={80}
            height={80}
            className="border border-gray-500 shadow-stone-600 rounded-full"
          />
        </div>
        <div>
          <h1 className="text-blue-900">
            <b>Oberon Shaw, MCH</b>
          </h1>
          <p className="text-white">
            Head of Talent Acquisition, <br />
            North America
          </p>
        </div>
      </div>
    </main>
  </div>

  <div className="flex justify-center gap-2 mt-8">
    <span className="w-3 h-3 rounded-full bg-blue-500 opacity-100"></span>
    <span className="w-3 h-3 rounded-full bg-blue-500 opacity-50"></span>
    <span className="w-3 h-3 rounded-full bg-blue-500 opacity-50"></span>
  </div>
</div>

  );
}
