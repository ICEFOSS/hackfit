export default function Supported() {
  return (

    <section className="ml-16 md:ml-36">
      <div className="bg-brochgreen mx-auto pl-5 md:pl-20 lg:px-32">
        <h1 className="mx-6 font-pixe text-center text-white text-5xl md:text-6xl sm:text-center sm:mx-0">
          Suppoters
        </h1>
        <div className="mt-16 justify-center text-black flex flex-wrap flex-row md:flex-row-mx-1 lg:-mx-0">

          <Supporters_each_section
            supporter="ACM FISAT"
            title="Go around the world"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            link="#"
          />

          <Supporters_each_section
            supporter="ICEFOSS"
            title="Go around the world"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            link="#"
          />
          <Supporters_each_section
            supporter="FFSC"
            title="Go around the world"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
      <div className="my-1 px-1 w-full md:w-1/2 lg:w-4/12">
        <a className="relative block group h-96">
          <span className="absolute inset-0 border-2 border-white border-dashed"></span>

          <div className="relative flex items-end h-full transition-transform transform bg-white border-2 border-black group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div className="px-8 pb-8 transition-opacity group-hover:opacity-0 group-hover:absolute">
              {globe_svg}

              <h2 className="mt-4 text-4xl">{props.supporter}</h2>
            </div>

            <div className="absolute p-8 transition-opacity opacity-0 group-hover:opacity-100 group-hover:relative">
              <h2 className="w-74 mt-4 text-2xl font-medium">
                {props.title}
              </h2>

              <p className="mt-4">
                {props.description}
              </p>

              <a href={props.link} target="_blank">
                <p className="mt-8 font-bold">Read more</p>
              </a>
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