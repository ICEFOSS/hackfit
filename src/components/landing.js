import "../styles/landing.css";
export default function Landing() {
  return (
    <section className="ml-0 md:ml-36">
      <div className="context">
        <div className="px-5 sm:pl-10 lg:pl-44 flex flex-col w-full">
          <h1 className="text-6xl font-semibold font-sans mb-6 text-center z-50">

            <span className="text-rose-600 shadow-sm justify-start flex">HACKFIT</span>
            <span className="text-white text-xs font-mono justify-start flex">An ICEFOSS initiative</span> <br />
            <span className="flex justify-start ">20TH - 30TH JAN 2022</span>
          </h1>
          <p className="text-lg shadow-sm justify-start max-w-lg z-50 flex">
            HACKFIT is a 36-hour Hackathon conducted as part of ICEFOSS 2022 commencing from the 3rd & 4th of March 2022.
          </p>
          <div className="w-full justify-start flex">
            <a href="https://forms.gle/YonV7YehKwU8Y3Hn9" target="_blank" className="mt-10 px-10 py-3 bg-red-600 text-lg text-white w-60 rounded-md shadow-2xl z-50">
              REGISTER NOW
            </a>
          </div>

        </div>
      </div>


      <div className="area" >
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div >
      {/* <div className="bg-landingImage bg-[length:126px_126px] animate-[wiggle_90s_scroll_infinite_linear] h-screen flex justify-items-center items-center md:justify-center lg:justify-start">
        <div className="px-5 sm:pl-10 lg:pl-44">
          <h1 className="text-6xl font-semibold font-sans mb-6">
            <span className="text-red-600 shadow-sm stroke">HACKFIT</span> <br />
            <span>20TH - 30TH JAN 2022</span>
          </h1>
          <p className="text-lg max-w-md shadow-sm">
            HACKFIT is a 36-hour Hackathon conducted as part of ICEFOSS 2022 commencing from the 3rd & 4th of March 2022.
          </p>
          <a href="https://forms.gle/ug6pPtr4SbHxArEK8" target="_blank" className="inline-block mt-10 px-10 py-3 bg-red-600 text-lg text-white rounded-md shadow-2xl">
            REGISTER NOW
          </a>
        </div>
      </div> */}
    </section>
  );
}
