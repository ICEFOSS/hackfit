export default function Landing() {
  return (
    <section className="">
      <div className="bg-landingImage bg-[length:126px_126px] animate-[wiggle_90s_scroll_infinite_linear] h-screen flex justify-items-center items-center">
        <div className="px-10 lg:px-32 xl:px-40">
          <h1 className="text-6xl font-semibold font-sans mb-6">
            <span className="text-red-500">HACKFIT</span> <br />
            <span>20TH - 30TH JAN 2022</span>
          </h1>
          <p className="text-lg max-w-md">
            Explicabo esse amet tempora quibusdam laudantium, laborum eaque
            magnam fugiat hic? Esse dicta aliquid error repudiandae earum
            suscipit fugiat molestias, veniam, vel architecto veritatis delectus
            repellat modi impedit sequi.
          </p>
          <button className="inline-block mt-10 px-10 py-3 bg-red-500 text-lg text-white">
            REGISTER NOW
          </button>
        </div>
      </div>
    </section>
  );
}
