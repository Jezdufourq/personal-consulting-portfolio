import React from "react";
import Header from "../components/header";

export default function Content({ children }) {
  return (
    <div>
      <Header />
      <div className="flex flex-col flex-wrap items-center max-w-4xl p-4 mx-auto md:p-8 bg-white">
        {children}
      </div>
    </div>
  );
}
