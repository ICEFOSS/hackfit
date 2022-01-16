const Prize = () => {
  return (
    <div className="px-8 flex justify-center flex-col">
      <div className="text-5xl py-4">
        <div>Supportors</div>
        <div className="flex justify-evenly flex-wrap">
          <div className="border-4 border-black h-24 w-24 bg-white"></div>
          <div className="border-4 border-black h-24 w-24 bg-white"></div>
          <div className="border-4 border-black h-24 w-24 bg-white"></div>
          <div className="border-4 border-black h-24 w-24 bg-white"></div>
        </div>
      </div>
      <div className="text-3xl">Prizes</div>
      <div>
        <div className="flex justify-evenly items-center">
          <div className="border-4 border-black h-24 w-24 bg-white"></div>
          <div>Lorem ipsum dolor sit amet</div>
        </div>
        <div className="flex justify-evenly items-center">
          <div>Lorem ipsum dolor sit amet</div>
          <div className="border-4 border-black h-24 w-24 bg-white"></div>
        </div>
        <div className="flex justify-evenly items-center">
          <div className="border-4 border-black h-24 w-24 bg-white"></div>
          <div>Lorem ipsum dolor sit amet</div>
        </div>
      </div>
      <div className="flex items-center justify-center my-4">
        <div className="flex items-center justify-center border-2 rounded-full w-3/4 py-2">
          <div>View all prizes</div>
          <div className="border-2 border-black h-16 w-16 bg-white"></div>
        </div>
      </div>
    </div>
  );
};
export default Prize;
