import React, { Component } from "react";

export default class Cards extends Component {
  render() {
    return (
      <div
        className="max-w-4xl max-h-4xl p-4 mx-auto md:my-20 md:p-8 py-8"
        id="greeting"
      >
        <h1 className="w-full text-5xl font-serif text-bold text-black tracking-tight">
          This is a title
        </h1>
        <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <a href="#" class="flex flex-wrap no-underline hover:no-underline">
              <p class="w-full text-gray-600 text-xs md:text-sm px-6">
                GETTING STARTED
              </p>
              <div class="w-full font-bold text-xl text-gray-800 px-6">
                Lorem ipsum dolor sit amet.
              </div>
              <p class="text-gray-800 text-base px-6 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at ipsum eu nunc commodo posuere et sit amet ligula.
              </p>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
