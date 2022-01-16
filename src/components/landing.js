export default function Landing() {
  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center items-center flex-col">
        <div className="text-8xl">HACKFIT</div>
        <div className="text-2xl"> 28TH - 30Th JAN 2022</div>
      </div>
      <div className="px-8 text-5xl py-4">
        <div>Supportors</div>
        <div className="flex justify-evenly flex-wrap">
          <div className="border-4 border-black h-24 w-24 bg-white"></div>
          <div className="border-4 border-black h-24 w-24 bg-white"></div>
          <div className="border-4 border-black h-24 w-24 bg-white"></div>
          <div className="border-4 border-black h-24 w-24 bg-white"></div>
        </div>
      </div>
    </div>
  );
}
