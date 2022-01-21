export default function Sponsor_card(props) {
  return (
    <section className="col-span-12 md:col-span-6 lg:col-span-4 md:mx-auto p-2">
      <div className="w-full">
        <a href={props.url}>
          <img
            className="object-center object-cover w-full mx-8"
            src={props.logo}
            alt="photo"
          />
        </a>
      </div>
    </section>
  );
}
const all_sponsors_names = ["Diamond", "Gold", "Platinum"];
const all_sponsors_Txt_color = ["text-diamond", "text-gold", "text-platinum"];

export function Sponsor_each_section(props) {
  const all_sponsors_names_style = ` font-pixe text-center ${all_sponsors_Txt_color[props.sponsor_index]} text-5xl md:text-6xl mx-4`;

  return (
    <>
      <div className="p-4  w-full ">
        <h2 className={all_sponsors_names_style}>
          {all_sponsors_names[props.sponsor_index]} Sponsors
        </h2>
        <div className="w-full bg-brochgreen">
          <section className="max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto px-4 py-12">
            <div className="flex flex-row flex-wrap gap-y-6 sm:gap-y-10 md:gap-y-16 w-full">
              <div className="flex flex-wrap flex-row mx-8  flex-grow justify-around">
                {all_sponsors[props.sponsor_index].map((sponsor, ind) => (
                  <Sponsor_card
                    key={sponsor.name + ind}
                    url={sponsor.url}
                    logo={sponsor.logo}
                    name={sponsor.name}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

const all_sponsors = [
  // diamond_sponsors 
  [
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
  ],

  // gold_sponsors = 
  [
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
  ],

  // platinum_sponsors = 
  [
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
  ]
];
