import React, { Component } from "react";
export default class Prize extends Component {
  render() {
    return (
      <>
        <div className="text-center pb-12">
          <h1 className="text-5xl md:text-6xl font-heading text-brochwhite">
            Prizes
          </h1>
        </div>
        <div className="flex flex-wrap flex-row gap-6 justify-center mx-4 xs:mx-auto">

          <Prize_card
            cash="25,000"
            prize="gold"
            text_color="text-yellow-400"
            prize_name="1st Prize"
            prize_description="For the best presentation of the project"
          />
          <Prize_card
            cash="15,000"
            prize="silver"
            text_color="text-gray-300"
            prize_name="2nd Prize"
            prize_description="For the best presentation of the project"
          />
          <Prize_card
            cash="10,000"
            prize="bronze"
            text_color="text-amber-500"
            prize_name="3rd Prize"
            prize_description="For the best presentation of the project"
          />
        </div>
      </>
    );
  }
}

function Prize_card(props) {
  return (
    <>
      <div className="transform max-w-sm bg-brochblack shadow-lg overflow-hidden flex flex-col md:flex-row transition duration-1000 hover:scale-105 md:pb-2 w-80 sm:w-72 md:w-72 lg:w-[21rem] rounded-lg bg-opacity-40">
        <div className="w-full h-56 sm:h-64 md:h-68 lg:h-80">
          <img
            className="p-3 w-28 sm:w-32 lg:w-40 mx-auto"
            src={`/assets/${props.prize}-cup.gif`}
            alt="placholder"
          />
          <p className="text-center text-white text-3xl  sm:text-4xl md:text-5xl p-2"><span className="text-green-600 mr-2 font-bold">₹</span>
            {props.cash}
          </p>
          <p className={`text-center ${props.text_color} text-xl sm:text-2xl`}>
            {props.prize_name}
          </p>
        </div>
      </div>
    </>
  )
}