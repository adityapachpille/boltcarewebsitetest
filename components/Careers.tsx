import Image from "next/image";

const Careers = () => {
  return (
    <>
    <div className="relative w-full">
      {/* Desktop Image (Full Width, Cropped for Cover Look) */}
      <div className="hidden sm:block mt-16">
        <Image
          src="/careersimg.png"
          alt="Hero"
          width={1920}
          height={962}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Mobile Image (Show Full Image Without Cropping) */}
      <div className="sm:hidden relative h-[300px] mt-4">
        <Image
          src="/careersimg.png"
          alt="Hero Mobile"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>

    <div>
        <h1 className="text-4xl font-bold text-gray-800  py-10 sm:py-20 text-center">Sorry! We don't have Open Positions!</h1>
    </div>

    </>
  );
};

export default Careers;
