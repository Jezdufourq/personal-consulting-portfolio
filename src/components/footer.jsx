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
      <div className="bg-white mt-10 mb-5">
        <div className="text-center grid grid-rows-1 w-full font-bold ">
          Good Design Doesn't Date. Bad Does.
        </div>
        <div className="text-center grid grid-rows-1 w-full text-xs font-semibold">
          Built with Gatsby. Jeremiah Dufourq 2021. MIT License.
        </div>
        <div className="mt-3 justify-center grid grid-rows-1 w-full">
          <FontAwesomeIcon icon={faTwitter} href="https://www.google.com" />
          <FontAwesomeIcon icon={faInstagram} href="https://www.google.com" />
          <FontAwesomeIcon icon={faLinkedinIn} href="https://www.google.com" />
        </div>
      </div>
    </footer>
  );
}
