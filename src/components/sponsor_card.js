const all_sponsors_names = ["Diamond", "Gold", "Platinum"];
const all_sponsors_Txt_color = ["text-diamond", "text-gold", "text-platinum"];

export default function Sponsor_each_section(props) {
  const all_sponsors_names_style = `text-center ${all_sponsors_Txt_color[props.sponsor_index]} text-4xl md:text-5xl mx-4`;

  return (
    <>
      <div className=" w-full mt-8">
        <h2 className={all_sponsors_names_style}>
          {all_sponsors_names[props.sponsor_index]} Sponsors
        </h2>
        <div className="w-full">
          <section className="max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto px-4 py-6 pb-10">
            <div className="flex flex-row flex-wrap gap-y-6 sm:gap-y-10 md:gap-y-16 w-full">
              <div className="flex flex-wrap flex-row mx-8  flex-grow justify-evenly">
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

export function Sponsor_card(props) {
  return (
    <section className="col-span-12 md:col-span-6 lg:col-span-4 md:mx-auto my-3 sm:w-40 lg:w-48 mx-1 sm:mx-0">
      <div className="w-full">
        <a href={props.url}>
          <img
            className="object-center object-cover w-full rounded-lg"
            src={props.logo}
            alt="photo"
          />
        </a>
      </div>
    </section>
  );
}

const all_sponsors = [
  // diamond_sponsors 
  [
    {
      name: "Name",
      logo: "https://plchldr.co/i/130x50?&bg=85bea2&fc=ffffff&text=Coming Soon",
      url: "#",
    },
    {
      name: "Name",
      logo: "https://plchldr.co/i/130x50?&bg=85bea2&fc=ffffff&text=Coming Soon",
      url: "#",
    },
    {
      name: "Name",
      logo: "https://plchldr.co/i/130x50?&bg=85bea2&fc=ffffff&text=Coming Soon",
      url: "#",
    },
    {
      name: "Name",
      logo: "https://plchldr.co/i/130x50?&bg=85bea2&fc=ffffff&text=Coming Soon",
      url: "#",
    },
    {
      name: "Name",
      logo: "https://plchldr.co/i/130x50?&bg=85bea2&fc=ffffff&text=Coming Soon",
      url: "#",
    },
    {
      name: "Name",
      logo: "https://plchldr.co/i/130x50?&bg=85bea2&fc=ffffff&text=Coming Soon",
      url: "#",
    },
  ],

  // gold_sponsors = 
  [
    {
      name: "Name",
      logo: "https://plchldr.co/i/130x50?&bg=85bea2&fc=ffffff&text=Coming Soon",
      url: "#",
    },
    {
      name: "Name",
      logo: "https://plchldr.co/i/130x50?&bg=85bea2&fc=ffffff&text=Coming Soon",
      url: "#",
    },
    {
      name: "Name",
      logo: "https://plchldr.co/i/130x50?&bg=85bea2&fc=ffffff&text=Coming Soon",
      url: "#",
    },
  ],

  // platinum_sponsors = 
  [
    {
      name: "Name",
      logo: "https://plchldr.co/i/130x50?&bg=85bea2&fc=ffffff&text=Coming Soon",
      url: "#",
    },
    {
      name: "Name",
      logo: "https://plchldr.co/i/130x50?&bg=85bea2&fc=ffffff&text=Coming Soon",
      url: "#",
    },
    {
      name: "Name",
      logo: "https://plchldr.co/i/130x50?&bg=85bea2&fc=ffffff&text=Coming Soon",
      url: "#",
    },
  ]
];
