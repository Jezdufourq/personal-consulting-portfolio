import React from "react";
import "./title.css";

export default function Title(props) {
  return (
    <div>
      <p className="font-title text-5xl title-class">{props.string}</p>
    </div>
  );
}
