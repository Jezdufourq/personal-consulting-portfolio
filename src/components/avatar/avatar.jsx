import React from "react";

export default function Avatar(props) {
  return (
    <img
      className="shadow-lg rounded-lg max-w-full h-auto align-middle border-none"
      src={props.src}
      alt={props.alt}
    />
  );
}
