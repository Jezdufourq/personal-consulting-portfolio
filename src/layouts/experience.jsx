import React from "react";
import Header from "../components/header";
import Title from "../components/title/title";

export default function Experience({ children }) {
  return (
    <div>
      <Header />
      <div className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:p-8 bg-white">
        <Title string="Experience" />
      </div>
      {children}
    </div>
  );
}
