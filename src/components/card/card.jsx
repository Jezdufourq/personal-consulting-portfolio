import React from "react";
import img from "../../assets/jeremiah.jpeg";
export default function card(props) {
  return (
    <div className="bg-white shadow-lg max-w-md min-h-md">
      <div className="grid col-auto p-10">
        <div className="flex row justify-center">
          <span className="font-sans font-bold text-3xl">{props.title}</span>
        </div>
        <div className="grid col-auto justify-center p-8">
          <div className="row bg-white border-lightBlue-400 border-4 w-40 h-40">
            <img src={img} className="w-full h-full" alt="cardAvatar" />
          </div>
        </div>
        <div className="grid col-auto row justify-center pt-1 pb-4">
          <span className="font-bold">{props.date}</span>
        </div>
        <div className="grid col-auto row justify-center">
          <span>{props.description}</span>
        </div>
      </div>
    </div>
  );
}
