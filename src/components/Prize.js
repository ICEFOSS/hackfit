import React, { Component } from "react";
export default class Prize extends Component {
  render() {
    return (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
          <div className="text-center pb-12">
            <h1 className="font-bold mb-10 text-3xl md:text-4xl lg:text-7xl font-heading text-white">
              prizes
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-9">
            <div className="transform w-full  bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row transition duration-500 hover:scale-105">
              <div className="w-full h-80">
                <img
                  className="object-center sm-ml-28 ml-24 p-3 object-cover w-40"
                  src="../gold-cup.gif"
                  alt="placholder"
                ></img>
                 <p className="text-center text-white font-bold text-5xl p-2">10000 <span className="text-green-600">$</span></p>
                 <p className="text-center text-yellow-400 font-bold text-2xl">1st prize</p>
              </div>
            </div>
            <div className="transform w-full bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row transition duration-500 hover:scale-105">
              <div className="w-full h-80">
                <img
                  className="object-center sm-ml-28 ml-24 p-3 object-cover w-40 "
                  src="../silver-cup.gif"
                  alt="placeholder"
                ></img>
                 <p className="text-center text-white font-bold text-5xl p-2">7000 <span className="text-green-600">$</span></p>
                 <p className="text-center text-gray-400 font-bold text-2xl">2nd prize</p>
              </div>
            </div>
            <div className="transform w-full bg-gray-800 rounded-lg  shadow-lg overflow-hidden flex flex-col md:flex-row transition duration-500 hover:scale-105">
              <div className="w-full h-80">
                <img
                  className="object-center sm-ml-28 ml-24 p-3 object-cover w-40"
                  src="../bronze-cup.gif"
                  alt="placeholder"
                ></img>
                <p className="text-center text-white font-bold text-5xl p-2">5000 <span className="text-green-600">$</span></p>
                <p className="text-center text-amber-800 font-bold text-2xl">3rd prize</p>
              </div>
            </div>
         </div>
    </section>
    );
  }
}
