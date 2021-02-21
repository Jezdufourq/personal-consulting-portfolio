import React from "react";
import { navigate } from "gatsby";

export default function Button(props) {
  function submitButton(link) {
    navigate(link);
  }
  return (
    <div>
      <button
        className="button-class border-4 border-primary text-primary uppercase"
        onClick={() => submitButton(props.link)}
      >
        {props.name}
      </button>
    </div>
  );
}
