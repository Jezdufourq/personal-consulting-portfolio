import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export default function footer() {
  return (
    <footer>
      <div className="fixed inset-x-0 bottom-0 mt-10 mb-5">
        <div className="text-center grid grid-rows-1 w-full font-bold ">
          Good Design Doesn't Date. Bad Does.
        </div>
        <div className="text-center grid grid-rows-1 w-full text-xs font-semibold">
          Built with Gatsby. Jeremiah Dufourq 2021. MIT License.
        </div>
        <div className="text-center grid grid-rows-1 w-full">
          <FontAwesomeIcon icon={faCoffee} size="1x" />
        </div>
      </div>
    </footer>
  );
}
