import React, { useState, useEffect } from "react";
import { Fade } from "react-reveal";

export default function blog(props) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  const [tags, setTags] = useState([]);

  useEffect(() => {
    setTags([...tags, { id: 0, name: "business" }]);
  }, []);

  return (
    <div>
      <Fade bottom duration={1000} distance="20px">
        <div
          className="shadow-xl rounded-lg p-8 cursor-pointer transform hover:scale-105 ease-in-out min-w-full min-h-full"
          key={props.blogId}
          onClick={() => openRepoinNewTab(props.blogUrl)}
        >
          <div className="pb-4 flex items-center">
            <p className="flex items-center font-bold overflow-hidden whitespace-wrap overflow-ellipsis mb-3">
              Test title
            </p>
          </div>
          <div className="py-4 whitespace-nowrap">
            <p className="overflow-ellipsis overflow-hidden">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris...
            </p>
          </div>
          <div className="pt-4 flex justify-between">
            <div className="font-sans font-bold flex">13th October 2018</div>
            <div className="flex">
              {tags.map((tag) => {
                return (
                  <span
                    className="inline-block bg-blue-200 rounded-full px-3 py-1 font-semibold text-blue-700 mr-2"
                    key={tag.id}
                  >
                    {tag.name}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
