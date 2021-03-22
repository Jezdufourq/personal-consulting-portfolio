import React from "react";
import moment from "moment";
import { navigate } from "gatsby"; //import navigate from gatsby

export default function blogCard(props) {
  function openRepoinNewTab(url) {
    navigate(url);
  }

  return (
    <div>
      <div
        className="shadow-lg rounded-lg p-6 cursor-pointer transform hover:bg-gray-50 min-w-full min-h-full"
        key={props.id}
        onClick={() => openRepoinNewTab(props.url)} //TODO: Create a blog page using gatsby templates
      >
        <div className="pb-4 flex items-center">
          <p className="flex items-center font-bold overflow-hidden whitespace-wrap overflow-ellipsis mb-3">
            {props.title}
          </p>
        </div>
        <div className="py-4 whitespace-pre-wrap">
          <p className="truncate overflow-ellipse">{props.description}</p>
        </div>
        <div className="pt-4 flex-col">
          <div className="my-2 font-sans font-bold items-center w-auto">
            {moment(props.date).format("dddd, MMMM Do YYYY, h:mm:ss a")}
          </div>
          <div className="my-2">
            {props.categories.map((category) => {
              return (
                <span
                  className="bg-blue-600 rounded-full px-3 py-1 font-semibold text-white mr-2"
                  key={category}
                >
                  {category}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
