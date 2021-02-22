import React from "react";
import SocialIcons from "../components/socialIcons/SocialIcons";
import { Link } from "gatsby";

export default function footer() {
  return (
    <footer>
      <div className="flex-col mt-10 mb-5 items-center justify-center overflow-hidden">
        <div className="flex-auto text-center w-full font-bold ">
          Good Design Doesn't Date. Bad Does.
        </div>
        <div className="flex-auto text-center w-full text-xs font-semibold">
          Built with Gatsby. Jeremiah Dufourq 2021. MIT License.
        </div>
        <div className="flex-auto text-center w-full text-xs font-semibold">
          If you would like to know how I built this website, click
          <Link
            className="text-black underline hover:text-blue-600"
            key="Website"
            to="/website"
          >
            {" "}
            here
          </Link>
        </div>
        <div className="flex justify-center w-full mt-2">
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
}
