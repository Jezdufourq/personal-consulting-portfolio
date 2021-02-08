import React from "react";
import Header from "../components/header";

export default function Test({ children }) {
  return (
    <div>
      <Header />
      <div className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:p-8 bg-white">
        {children}
      </div>
    </div>
  );
}
