import React, { Component } from "react";
export default class Prize extends Component {
  render() {
    return (
      <section className=" ml-0 md:ml-36  px-3 sm:px-6 lg:px-4 py-12 mx-auto">
        <div className="text-center pb-12">
          <h1 className="text-3xl md:text-4xl lg:text-7xl font-heading text-white">
            prizes
          </h1>
        </div>
        <div className="flex flex-wrap flex-row gap-3 justify-center mx-auto">

          <Prize_card
            cash="10000"
            prize="gold"
            text_color="text-yellow-400"
            prize_name="1st Prize"
            prize_description="For the best presentation of the project"
          />
          <Prize_card
            cash="7000"
            prize="silver"
            text_color="text-gray-400"
            prize_name="2nd Prize"
            prize_description="For the best presentation of the project"
          />
          <Prize_card
            cash="5000"
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
      <div className="transform max-w-sm bg-brochblack shadow-lg overflow-hidden flex flex-col md:flex-row transition duration-200 w-60 hover:scale-105">
        <div className="w-full h-52 sm:h-64 md:h-72 lg:h-80">
          <img
            className="p-3 w-24 sm:w-32 lg:w-40 mx-auto"
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