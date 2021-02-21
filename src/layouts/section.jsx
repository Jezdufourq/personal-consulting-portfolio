import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Section({ children }) {
  return (
    <div>
      <div className="flex flex-col max-w-4xl px-8 mx-auto bg-white">
        {children}
      </div>
    </div>
  );
}
