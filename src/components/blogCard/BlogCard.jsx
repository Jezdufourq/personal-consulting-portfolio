import React from "react";

export default function blogCard(props) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  return (
    <div>
      <div
        className="shadow-xl rounded-lg p-8 cursor-pointer transform hover:scale-105 ease-in-out min-w-full min-h-full"
        key={props.id}
        onClick={() => openRepoinNewTab("https://www.google.com")} //TODO: Create a blog page using gatsby templates
      >
        <div className="pb-4 flex items-center">
          <p className="flex items-center font-bold overflow-hidden whitespace-wrap overflow-ellipsis mb-3">
            {props.title}
          </p>
        </div>
        <div className="py-4 whitespace-pre-wrap">
          <p className="overflow-ellipsis overflow-hidden">
            {props.description}
          </p>
        </div>
        <div className="pt-4 flex-col">
          <div className="my-2 font-sans font-bold items-center w-auto">
            {props.date}
          </div>
          <div className="my-2">
            {props.tag.map((tag) => {
              return (
                <span
                  className="bg-blue-600 rounded-full px-3 py-1 font-semibold text-white mr-2"
                  key={tag.id}
                >
                  {tag.name}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
