import React from "react";
import SocialIcons from "../components/socialIcons/SocialIcons";

export default function footer() {
  return (
    <footer>
      <div className="mt-10 mb-5">
        <div className="text-center grid grid-rows-1 w-full font-bold ">
          Good Design Doesn't Date. Bad Does.
        </div>
        <div className="text-center grid grid-rows-1 w-full text-xs font-semibold">
          Built with Gatsby. Jeremiah Dufourq 2021. MIT License.
        </div>
        <div className="flex justify-center w-full">
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
}
