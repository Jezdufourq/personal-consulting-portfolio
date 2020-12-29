import React, { Component } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import { illustration, greeting } from "../source";

export default class Greeting extends Component {
  render() {
    return (
      <div>
        <Fade bottom duration={1000} distance="40px">
          <div>
            <div
              className="max-w-4xl max-h-4xl p-4 mx-auto md:my-40 md:p-8 py-8"
              id="greeting"
            >
              <div className="flex">
                <span className="text-5xl font-serif text-bold text-black tracking-tight">
                  {greeting.title}
                  <span className="transition duration-1800 ease-in-out inline-block mx-2">
                    {emoji("👋")}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}
