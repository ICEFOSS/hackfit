import { icefoss, acm, ffsc } from './constants'
export default function Supported() {
  return (

    <section className="ml-0 md:ml-36"
      id="Supporters">
      <div className=" mx-auto px-5 lg:px-20">
        <h1 className="mx-6 font-pixe text-center text-brochwhite text-5xl md:text-6xl sm:text-center sm:mx-0">
          Supporters
        </h1>
        <div className="mt-16 justify-center text-gray-700 flex flex-wrap flex-row md:flex-row-mx-1 gap-5">

          <Supporters_each_section
            supporter="ACM FISAT"
            title="ACM FISAT"
            description="ACM, The Association for Computing Machinery, the world's largest educational and scientific computing society, delivers resources that advance computing as a science and a profession. ACM brings together computing educators, researchers, and professionals to inspire dialogue, share resources, and address the field's challenges. "
            link="#"
            svg={acm}
          />

          <Supporters_each_section
            supporter="ICEFOSS"
            title="ICEFOSS"
            description="ICEFOSS is a Free Software Conference organized by FISAT Free Software Cell (FFSC). ICEFOSS 2022, scheduled on March 3,4 - 2022 includes Workshops covering different aspects of Free Software. The purpose of ICEFOSS is to promote and encourage the use of free and open-source software among enthusiasts."
            link="#"
            svg={icefoss}
          />
          <Supporters_each_section
            supporter="FFSC"
            title="FFSC"
            description="FISAT Free Software Cell (FFSC), Federal Institute of Science and Technology (FISAT) was established in 2002 by Federal Bank Officers' Association Educational Society (FBOAES). The institution is accredited by NAAC with 'A' Grade. Five B.Tech branches are accredited by NBA and the institution also received the coveted ISO 9001:2015 certification."
            link="#"
            svg={ffsc}
          />

        </div>
      </div>
    </section>
  );
}

function Supporters_each_section(props) {

  return (
    <>
      <div className="my-1 px-1 md:p-2 w-80 sm:w-80">
        <a className="relative block group h-[455px] active:h-auto hover:h-auto sm:h-[30rem] sm:hover:h-[30rem]">
          <span className="absolute inset-0 border-2 border-white bg-opacity-60 border-dashed"></span>

          <div className="relative flex items-end h-full transition-transform transform bg-white bg-opacity-50 border-2 border-black group-hover:-translate-x-2 group-hover:-translate-y-2">

            <div className="px-8 pb-8 transition-opacity group-hover:opacity-0 group-hover:absolute">
              {/* <svg id="visual" viewBox="0 0 540 960" width="243" height="352" xmlns="http://www.w3.org/2000/svg" version="1.1"><g transform="translate(227.63117137868107 491.8769686366773)"><path d="M138.8 -122.1C183.8 -93.8 226.9 -46.9 221.8 -5.1C216.8 36.8 163.5 73.5 118.5 96.4C73.5 119.2 36.8 128.1 -5.3 133.4C-47.4 138.7 -94.8 140.4 -117.3 117.6C-139.8 94.8 -137.4 47.4 -137.4 0C-137.4 -47.4 -139.8 -94.8 -117.3 -123.1C-94.8 -151.4 -47.4 -160.7 -0.2 -160.5C46.9 -160.2 93.8 -150.5 138.8 -122.1" fill="#ddd"></path></g></svg> */}
              {/* <svg id="visual" viewBox="0 0 900 675" width="250" height="337" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <g transform="translate(409.7757283257087 303.55887237626905)">
                  <path className="blob1-move" d="M143.9 -115.8C200.2 -87.7 268.8 -43.8 273.9 5.1C279 54 220.5 108 164.2 151.6C108 195.3 54 228.6 0.8 227.8C-52.3 227 -104.7 192 -140.3 148.3C-176 104.7 -195 52.3 -193.7 1.3C-192.4 -49.7 -170.8 -99.5 -135.1 -127.6C-99.5 -155.7 -49.7 -162.2 -2.9 -159.3C43.8 -156.3 87.7 -143.9 143.9 -115.8" fill="#ddd">
                  </path>
                </g>
                <g transform="translate(467.2619562431109 345.1255181716656)"><path className="blob2-move" d="M191.3 -187.8C230.8 -151.8 233.9 -75.9 235.7 1.8C237.5 79.5 238.1 159.1 198.6 187.2C159.1 215.4 79.5 192.1 6.5 185.5C-66.5 179 -132.9 189.2 -185.9 161.1C-238.9 132.9 -278.5 66.5 -269.6 8.8C-260.8 -48.8 -203.6 -97.6 -150.6 -133.6C-97.6 -169.6 -48.8 -192.8 13.6 -206.3C75.9 -219.9 151.8 -223.8 191.3 -187.8" fill="#ddd"></path></g>
              </svg> */}
              {/* <div className="wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 288 288">
                  <linearGradient id="PSgrad_0" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
                    <stop offset="0%" stop-color="rgb(95,54,152)" stop-opacity="1" />
                    <stop offset="100%" stop-color="rgb(247,109,138)" stop-opacity="1" />
                  </linearGradient>
                  <path fill="url(#PSgrad_0)" />
                </svg>
              </div> */}
              <div className="mb-8">
                {props.svg}
              </div>

              {globe_svg}
              <h2 className="mt-4 text-4xl">
                {props.supporter}
              </h2>
            </div>

            <div className="absolute p-8 transition-opacity opacity-0 group-hover:opacity-100 group-hover:relative">
              <h2 className="w-74 mt-4 text-2xl md:text-3xl font-medium">
                {props.title}
              </h2>

              <p className="mt-4 lg:text-md">
                {props.description}
              </p>

              {/* <a href={props.link} target="_blank"> */}
              <p className="mt-8 font-bold">Read more</p>
              {/* </a> */}
            </div>
          </div>
        </a>
      </div>
    </>
  )
}

const globe_svg = <svg
  xmlns="http://www.w3.org/2000/svg"
  className="w-12 h-12"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  />
</svg>