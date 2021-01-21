import React from "react";
import "./button.css";

export default function Button(props) {
  return (
    <div>
      <button className="button-class border-4 border-primary text-primary uppercase">
        {props.name}
      </button>
    </div>
  );
}
