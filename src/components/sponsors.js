import Sponsor_card, { Sponsor_each_section } from "./sponsor_card";

export default function Sponsor() {
  return (
    <section className="ml-0 sm:ml-14 md:ml-28 lg:ml-10">
      <div className="bg-brochgreen text-white py-8 overflow-x-clip">
        <h3 className="text-center text-5xl leading-normal tracking-tight text-gray-900 mb-16 flex justify-center">
          Our <span className="text-gray-300">Sponsors</span>
        </h3>

        <Sponsor_each_section sponsor_index='0' />
        <Sponsor_each_section sponsor_index='1' />
        <Sponsor_each_section sponsor_index='2' />
      </div>
    </section>
  );
}
