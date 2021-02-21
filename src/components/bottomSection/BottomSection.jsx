import React from "react";
import Button from "../button/button";

export default function BottomSection() {
  return (
    <div>
      <div className="flex flex-wrap overflow-hidden">
        <div className="grid grid-rows-1 w-full justify-items-center my-4">
          <div className="text-primary font-title text-center text-4xl w-3/4 h-full text-blue-600">
            I love creating solutions to everyday problems.
          </div>
        </div>
      </div>
      <div className="flex flex-wrap overflow-hidden">
        <div className="grid grid-rows-1 w-full justify-items-center my-4">
          <div className="text-primary font-title text-center text-4xl w-3/4 h-full text-blue-600">
            Ready to take the next step and work together?
          </div>
        </div>
      </div>
      <div className="flex flex-wrap overflow-hidden">
        <div className="grid grid-rows-1 w-full justify-items-center my-4">
          <div className="font-title text-center text-4xl">
            Let's have a chat
          </div>
        </div>
      </div>
      <div className="flex flex-wrap overflow-hidden">
        <div className="grid grid-rows-1 w-full justify-items-center">
          <Button className="text-white" name="Contact Me" link="/contact" />
        </div>
      </div>
    </div>
  );
}
