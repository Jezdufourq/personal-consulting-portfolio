import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

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
          <div className="justify-center">
            <FontAwesomeIcon
              className="mx-1 hover:text-blue-600"
              size="1x"
              icon={faTwitter}
            />
            <FontAwesomeIcon
              className="mx-1 hover:text-blue-600"
              size="1x"
              icon={faInstagram}
            />
            <FontAwesomeIcon
              icon={faLinkedinIn}
              size="1x"
              className="mx-1 hover:text-blue-600"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
