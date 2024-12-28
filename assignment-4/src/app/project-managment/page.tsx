import Image from "next/image";

function ProjectMangment() {
  return (
    <div className="relative flex flex-col lg:flex-row items-center gap-16 w-full max-w-7xl mx-auto my-16 px-6">
      {/* Headline Section */}
      <div className="flex flex-col items-center lg:items-start gap-6 lg:gap-16 w-full lg:w-[672px] text-center lg:text-left">
        <div className="flex flex-col gap-4 lg:gap-6">
          <h1 className="text-[36px] lg:text-[72px] font-bold leading-tight lg:leading-[87px] text-[#212529] tracking-tight">
            Project <br /> Management
          </h1>
          <p className="text-[16px] lg:text-[18px] leading-[28px] lg:leading-[30px] text-[#212529] tracking-tight">
            Images, videos, PDFs, and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
          </p>
        </div>
        <button className="flex items-center justify-center gap-2 py-3 lg:py-5 px-6 lg:px-10 bg-[#4F9CF9] rounded-lg text-white font-medium text-[16px] lg:text-[18px] leading-6">
          Get Started
          <Image src="/img/arrow.png" alt="Arrow" width={25} height={25} />
        </button>
      </div>

      {/* Image Section */}
      <div className="relative w-full max-w-[300px] lg:max-w-[500px] aspect-square">
        <Image
          src="/img/project.avif"
          alt="Project Management Illustration"
          fill
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  );
}

export default ProjectMangment;
