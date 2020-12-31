import React, { Component } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import { illustration, greeting } from "../source";
import DisplayLottie from "./DisplayLottie";
import landingPerson from "../assets/lottie/landingPerson";

export default class Greeting extends Component {
  render() {
    return (
      <div>
        <Fade bottom duration={1000} distance="40px">
          <div>
            <div
              className="max-w-4xl max-h-4xl p-4 mx-auto md:my-20 md:p-8 py-8"
              id="greeting"
            >
              <div className="md:flex">
                <div className="flex items-center">
                  <div className="">
                    <div className="">
                      <span className="w-full text-5xl font-serif text-bold text-black tracking-tight">
                        {greeting.title}
                      </span>
                      <span className="transition duration-1800 ease-in-out inline-block mx-2">
                        {emoji("👋")}
                      </span>
                    </div>
                    <div className="">
                      <p className="flex flex-wrap">{greeting.subTitle}</p>
                    </div>
                  </div>
                </div>
                <div className="flex ax-w-sm max-h-sm">
                  <DisplayLottie animationData={landingPerson} />
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}
