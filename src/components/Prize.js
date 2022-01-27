import React, { Component } from "react";
export default class Prize extends Component {
  render() {
    return (
      <section className=" ml-0 md:ml-36"
        id="Prices">
        <div className="text-center pb-12">
          <h1 className="text-5xl md:text-6xl font-heading text-white">
            prizes
          </h1>
        </div>
        <div className="flex flex-wrap flex-row gap-6 justify-center mx-4 xs:mx-auto">

          <Prize_card
            cash=". . ."
            prize="gold"
            text_color="text-yellow-400"
            prize_name="1st Prize"
            prize_description="For the best presentation of the project"
          />
          <Prize_card
            cash=". . ."
            prize="silver"
            text_color="text-gray-400"
            prize_name="2nd Prize"
            prize_description="For the best presentation of the project"
          />
          <Prize_card
            cash=". . ."
            prize="bronze"
            text_color="text-amber-800"
            prize_name="3rd Prize"
            prize_description="For the best presentation of the project"
          />
        </div>
      </section>
    );
  }
}

function Prize_card(props) {
  return (
    <>
      <div className="transform max-w-sm bg-brochblack shadow-lg overflow-hidden flex flex-col md:flex-row transition duration-1000 hover:scale-105 md:pb-2 w-80 sm:w-72 md:w-72 lg:w-[21rem] rounded-lg">
        <div className="w-full h-56 sm:h-64 md:h-68 lg:h-80">
          <img
            className="p-3 w-28 sm:w-32 lg:w-40 mx-auto"
            src={`../${props.prize}-cup.gif`}
            alt="placholder"
          ></img>
          <p className="text-center text-white font-bold text-3xl  sm:text-4xl md:text-5xl p-2">
            {props.cash} <span className="text-green-600">$</span>
          </p>
          <p className={`text-center ${props.text_color} font-bold text-xl sm:text-2xl`}>
            {props.prize_name}
          </p>
        </div>
      </div>
    </>
  )
}