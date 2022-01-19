
   
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
];

export default function Sponsor() {
  return (
    <section>
      <div className="bg-brochgreen text-white py-8">
        <h3 class="text-center text-4xl sm:text-6xl leading-normal tracking-tight text-gray-900 mb-16">
          Our <span class="text-gray-300">Sponsors</span>
        </h3>
        <div class="p-10">
          <h2 className="mx-6 mt-1 font-pixe text-center text-diamond text-5xl md:text-6xl sm:text-6xl sm:text-center sm:mx-0">
            Diamond Sponsors
          </h2>
          <div className="w-full bg-brochgreen">
            <section className="max-w-3xl mx-auto px-4 py-12">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-28">
                {diamond_sponsors.map((sponsor, ind) => (
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
        <div class="p-10">
          <h2 className="mx-6 mt-1 font-pixe text-center text-gold text-5xl md:text-6xl sm:text-6xl sm:text-center sm:mx-0">
            Gold Sponsors
          </h2>
          <div className="w-full bg-brochgreen">
            <section className="max-w-3xl mx-auto px-4 py-12">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-28">
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
        <div class="p-10">
          <h2 className="mx-6 mt-1 font-pixe text-center text-platinum text-5xl md:text-6xl sm:text-6xl sm:text-center sm:mx-0">
            Platinum Sponsors
          </h2>
          <div className="w-full bg-brochgreen">
            <section className="max-w-3xl mx-auto px-4 py-12">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-28">
                {platinum_sponsors.map((sponsor, ind) => (
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
