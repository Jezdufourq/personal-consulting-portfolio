import React from "react";
import "./avatar.css";

export default function Avatar(props) {
  return (
    <div className="avatar-class bg-white border-primary  border-4 w-full h-40">
      <img src={props.src} alt={props.alt} className="image" />
    </div>
  );
}
