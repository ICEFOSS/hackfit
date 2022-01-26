import Sponsor_each_section from "./sponsor_card";

export default function Sponsor() {
  return (
    <section className="ml-0 md:ml-36 mt-8"
      id="Sponsors">
      <div className="bg-brochgreen text-white py-0 overflow-x-clip">
        <h3 className="text-center text-5xl md:text-6xl leading-normal  item-center tracking-tight text-gray-900 mb-6 flex flex-wrap justify-center ml-0 md:ml-12">
          Our <span className="text-gray-300">Sponsors</span>
        </h3>

        <Sponsor_each_section sponsor_index='0' />
        <Sponsor_each_section sponsor_index='1' />
        <Sponsor_each_section sponsor_index='2' />
      </div>
    </section>
  );
}
