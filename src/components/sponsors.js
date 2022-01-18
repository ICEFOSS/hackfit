import Sponsor_card from "./sponsor_card";

const diamond_sponsors = [
  {
    name: "Name",
    logo: "https://plchldr.co/i/130x50?&bg=000000&fc=ffffff&text=Placeholder",
    url: "#",
  },
  {
    name: "Name",
    logo: "https://plchldr.co/i/130x50?&bg=000000&fc=ffffff&text=Placeholder",
    url: "#",
  },
  {
    name: "Name",
    logo: "https://plchldr.co/i/130x50?&bg=000000&fc=ffffff&text=Placeholder",
    url: "#",
  },
];

const gold_sponsors = [
  {
    name: "Name",
    logo: "https://plchldr.co/i/130x50?&bg=000000&fc=ffffff&text=Placeholder",
    url: "#",
  },
  {
    name: "Name",
    logo: "https://plchldr.co/i/130x50?&bg=000000&fc=ffffff&text=Placeholder",
    url: "#",
  },
  {
    name: "Name",
    logo: "https://plchldr.co/i/130x50?&bg=000000&fc=ffffff&text=Placeholder",
    url: "#",
  },
  {
    name: "Name",
    logo: "https://plchldr.co/i/130x50?&bg=000000&fc=ffffff&text=Placeholder",
    url: "#",
  },
];

const platinum_sponsors = [
  {
    name: "Name",
    logo: "https://plchldr.co/i/130x50?&bg=000000&fc=ffffff&text=Placeholder",
    url: "#",
  },
  {
    name: "Name",
    logo: "https://plchldr.co/i/130x50?&bg=000000&fc=ffffff&text=Placeholder",
    url: "#",
  },
  {
    name: "Name",
    logo: "https://plchldr.co/i/130x50?&bg=000000&fc=ffffff&text=Placeholder",
    url: "#",
  },
  {
    name: "Name",
    logo: "https://plchldr.co/i/130x50?&bg=000000&fc=ffffff&text=Placeholder",
    url: "#",
  },
];

export default function Sponsor() {
  return (
    <section>
      <div className="bg-brochgreen text-white py-8">
        <h3 class="text-center text-4xl sm:text-6xl leading-normal tracking-tight text-gray-900">
          Our <span class="text-gray-300">Sponsors</span>
        </h3>
        <h2 className="mx-6 mt-1 font-pixe text-center text-gray-500 text-5xl md:text-6xl sm:text-center sm:mx-0">
          Diamond Sponsors
        </h2>

        <div className="w-full bg-brochgreen">
          <section className="max-w-md mx-auto px-4 py-12">
            <div className="grid grid-cols-4 lg:grid-cols-2 grid-rows-1 gap-4">
              {gold_sponsors.map((sponsor, ind) => (
                <Sponsor_card
                  key={sponsor.name + ind}
                  url={sponsor.url}
                  logo={sponsor.logo}
                  name={sponsor.name}
                />
              ))}
            </div>
          </section>
        </div>
        <h2 className="mx-6 mt-1 font-pixe text-center text-yellow-400 text-5xl md:text-6xl sm:text-center sm:mx-0">
          Gold Sponsors
        </h2>

        <div className="w-full bg-brochgreen">
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {gold_sponsors.map((sponsor, ind) => (
                <Sponsor_card
                  key={sponsor.name + ind}
                  url={sponsor.url}
                  logo={sponsor.logo}
                  name={sponsor.name}
                />
              ))}
            </div>
          </section>
        </div>
        <h2 className="mx-6 mt-1 font-pixe text-center text-gray-400 text-5xl md:text-6xl sm:text-center sm:mx-0">
          Platinum Sponsors
        </h2>

        <div className="w-full bg-brochgreen">
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {gold_sponsors.map((sponsor, ind) => (
                <Sponsor_card
                  key={sponsor.name + ind}
                  url={sponsor.url}
                  logo={sponsor.logo}
                  name={sponsor.name}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

// function Sponsor_card(props) {
//   return (
//     <>
//       <div className="w-full bg-brochwhite rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row ">
//         <div className="w-full md:w-2/5 h-80">
//           <a href={props.url}>
//             <img
//               className="object-center object-cover w-full h-full"
//               src={props.logo}
//               alt="photo"
//             />
//           </a>
//         </div>
//       </div>
//     </>
//   );
// }
