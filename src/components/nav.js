import React, { useState } from "react";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth <= 640 ? false : true);
  return (
    <nav
      style={{ zIndex: 1000 }}
      className="flex items-center justify-between flex-wrap bg-brochwhite text-brochblack p-2 lg:sticky lg:w-full lg:top-0 "
    >
      <div to="/">
        <div className="flex items-center flex-shrink-0 mr-6">
          <img className="h-16 w-16 mx-4 mt-4" alt="logo" />
        </div>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-brochblack border-brochblack hover:text-brochblack hover:border-grey-100">
          <svg
            onClick={() => setIsOpen(!isOpen)}
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      {isOpen ? (
        <div className="w-full block flex-grow lg:flex lg:justify-end lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <div
              to="/event"
              className="block mt-4 lg:inline-block lg:mt-0 mr-4 hover:text-blue-800"
            >
              About
            </div>
            <div
              to="/registration"
              className="block mt-4 lg:inline-block lg:mt-0 mr-4 hover:text-blue-800"
            >
              Supportors
            </div>
            <div
              to="/people"
              className="block mt-4 lg:inline-block lg:mt-0 mr-4 hover:text-blue-800"
            >
              Prizes
            </div>
            <div
              to="/people"
              className="block mt-4 lg:inline-block lg:mt-0 mr-4 hover:text-blue-800"
            >
              Speakers
            </div>
            <div
              to="/people"
              className="block mt-4 lg:inline-block lg:mt-0 mr-4 hover:text-blue-800"
            >
              Schedule
            </div>
            <div
              to="/people"
              className="block mt-4 lg:inline-block lg:mt-0 mr-4 hover:text-blue-800"
            >
              Mentors
            </div>
            <div
              to="/people"
              className="block mt-4 lg:inline-block lg:mt-0 mr-4 hover:text-blue-800"
            >
              Sponsors
            </div>
            <div
              to="/people"
              className="block mt-4 lg:inline-block lg:mt-0 mr-4 hover:text-blue-800"
            >
              FAQ
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </nav>
  );
};
const sideNav = () => {
  const Heading = [
    {
      name: "About",
    },
    {
      name: "Supportors",
    },
    {
      name: "Prizes",
    },
    {
      name: "Speakers",
    },
    {
      name: "Schedule",
    },
    {
      name: "Mentors",
    },
    {
      name: "Sponsors",
    },
    {
      name: "FAQ",
    },
  ];
  return (
    <div className="flex justify-start">
      <div className="grid grid-row-8 justify-items-center fixed bg-brochblack px-4 opacity-75 hover:opacity-100 rounded-tr-3xl rounded-br-3xl">
        {Heading.map((items) => (
          <div className="py-6">{items.name}</div>
        ))}
      </div>
    </div>
  );
};
export default sideNav;
