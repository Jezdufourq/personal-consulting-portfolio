import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Index({ children }) {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center max-w-4xl px-8 mx-auto bg-white">
        {children}
      </div>
    </div>
  );
}
