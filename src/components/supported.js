export default function Supported() {
  return (

    <section className="ml-0 md:ml-36"
      id="Supporters">
      <div className=" mx-auto px-5 lg:px-20">
        <h1 className="mx-6 font-pixe text-center text-brochwhite text-5xl md:text-6xl sm:text-center sm:mx-0">
          Supporters
        </h1>
        <div className="mt-16 justify-center text-black flex flex-wrap flex-row md:flex-row-mx-1 gap-5">

          <Supporters_each_section
            supporter="ACM FISAT"
            title="ACM FISAT"
            description="ACM, The Association for Computing Machinery, the world's largest educational and scientific computing society, delivers resources that advance computing as a science and a profession. ACM brings together computing educators, researchers, and professionals to inspire dialogue, share resources, and address the field's challenges. "
            link="#"
          />

          <Supporters_each_section
            supporter="ICEFOSS"
            title="ICEFOSS"
            description="ICEFOSS is a Free Software Conference organized by FISAT Free Software Cell (FFSC). ICEFOSS 2022, scheduled on March 3,4 - 2022 includes Workshops covering different aspects of Free Software. The purpose of ICEFOSS is to promote and encourage the use of free and open-source software among enthusiasts."
            link="#"
          />
          <Supporters_each_section
            supporter="FFSC"
            title="FFSC"
            description="FISAT Free Software Cell (FFSC), Federal Institute of Science and Technology (FISAT) was established in 2002 by Federal Bank Officers' Association Educational Society (FBOAES). The institution is accredited by NAAC with 'A' Grade. Five B.Tech branches are accredited by NBA and the institution also received the coveted ISO 9001:2015 certification."
            link="#"
          />

        </div>
      </div>
    </section>
  );
}

function Supporters_each_section(props) {

  return (
    <>
      <div className="my-1 px-1 md:p-2 w-80 sm:w-[17rem] lg:w-72">
        <a className="relative block group h-[455px] active:h-auto hover:h-[455px] sm:h-[32rem] sm:hover:h-[32rem]">
          <span className="absolute inset-0 border-2 border-white border-dashed"></span>

          <div className="relative flex items-end h-full transition-transform transform bg-white border-2 border-black group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div className="px-8 pb-8 transition-opacity group-hover:opacity-0 group-hover:absolute">
              {globe_svg}

              <h2 className="mt-4 text-4xl">{props.supporter}</h2>
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