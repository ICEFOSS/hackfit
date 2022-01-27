export default function Landing() {
  return (
    <section className="ml-0"
      id="About">
      <div className="bg-landingImage bg-[length:126px_126px] animate-[wiggle_90s_scroll_infinite_linear] h-screen flex justify-items-center items-center md:justify-center lg:justify-start">
        <div className="px-5 sm:pl-10 lg:pl-44">
          <h1 className="text-6xl font-semibold font-sans mb-6">
            <span className="text-red-500">HACKFIT</span> <br />
            <span>20TH - 30TH JAN 2022</span>
          </h1>
          <p className="text-lg max-w-md">
          HACKFIT is a 36-hour Hackathon conducted as part of ICEFOSS 2022 commencing from the 3rd & 4th of March 2022.
          </p>
          <button className="inline-block mt-10 px-10 py-3 bg-red-500 text-lg text-white">
            REGISTER NOW
          </button>
        </div>
      </div>
    </section>
  );
}
