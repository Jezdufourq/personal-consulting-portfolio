import React from "react";
import { navigate } from "gatsby";

export default function Button(props) {
  function submitButton(link) {
    navigate(link);
  }
  return (
    <button
      onClick={() => submitButton(props.link)}
      className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
      type="button"
      style={{ transition: "all .15s ease" }}
    >
      {props.name}
    </button>
  );
}
