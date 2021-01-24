import React, { Component } from "react";

export default class Cards extends Component {
  render() {
    return (
      <div
        className="max-w-4xl max-h-4xl p-4 mx-auto md:my-20 md:p-8 py-8"
        id="greeting"
      >
        <h1 className="w-full text-5xl font-serif text-bold text-black tracking-tight">
          Github Projects
        </h1>
        <div className="container mx-auto flex flex-wrap pt-4 pb-12">
          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <a
                className="flex flex-wrap no-underline hover:no-underline"
              >
                <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                  xGETTING STARTED
                </p>
                <div className="w-full font-bold text-xl text-gray-800 px-6">
                  Lorem ipsum dolor sit amet.
                </div>
                <p className="text-gray-800 text-base px-6 mb-5">
                  className ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </a>
              <div className="flex items-center justify-center">
                <button className="mx-auto lg:mx-0 hover:underline bg-blue-500 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  Action
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
