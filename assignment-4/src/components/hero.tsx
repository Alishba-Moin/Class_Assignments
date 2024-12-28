import Image from "next/image";

function Hero() {
  return (
    <section className="relative top-0 flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 py-16 lg:py-36 bg-[#043873] min-h-screen overflow-hidden">
      {/* Text Content */}
      <div className="flex flex-col items-start gap-6 lg:gap-16 w-full lg:w-[656px] text-center lg:text-left">
        <h1 className="text-white text-4xl lg:text-6xl font-semibold leading-snug lg:leading-[77px] tracking-[-0.02em]">
          Get More Done with Whitepace
        </h1>
        <p className="text-white text-base lg:text-lg leading-relaxed lg:leading-[30px] tracking-[-0.02em]">
          Project management software that enables your teams to collaborate, plan, analyze, and manage everyday tasks
        </p>
        <button className="px-6 py-4 bg-[#4F9CF9] rounded-md text-white font-medium text-lg flex items-center gap-2 self-center lg:self-start">
          Try Whitepace free
          <Image src="/img/arrow.png" alt="arrow" width={25} height={25} />
        </button>
      </div>

      {/* Image Content */}
      <div className="flex items-center justify-center w-full lg:w-auto mt-10 lg:mt-0">
        <Image
          src="/img/image.avif"
          alt="Hero Illustration"
          width={600}
          height={600}
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}

export default Hero;
