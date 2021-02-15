import React from "react";
import "./contactForm.css";
import Title from "../title/title";
import Button from "../button/button";
import { UndrawEnvelope } from "react-undraw-illustrations";

export default function ContactForm() {
  return (
    <div className="bg-white shadow-md rounded-md min-w-full min-h-full max-w-md min-h-md px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto text-gray-900">
      <div className="flex flex-col justify-between">
        <div>
          <Title string="Lets have a chat" />
          <div className="mt-8 text-xl font-sans font-bold">
            Hate forms? Send me an <span className="underline">email</span>{" "}
            instead.
          </div>
          <div className="pt-4">
            <UndrawEnvelope primaryColor="#00f0ff" />
          </div>
        </div>
        <div className="mt-8 text-center"></div>
      </div>
      <div className="">
        <div>
          <span className="uppercase font-sans text-sm font-bold">
            Full Name
          </span>
          <input
            className="w-full text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:border-primary"
            type="text"
            placeholder=""
          />
        </div>
        <div className="mt-8">
          <span className="uppercase text-sm font-sans font-bold">Email</span>
          <input
            className="w-full text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:border-primary"
            type="text"
          />
        </div>
        <div className="mt-8">
          <span className="uppercase text-s font-sans font-bold">Message</span>
          <textarea className="w-full h-32 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:border-primary"></textarea>
        </div>
        <div className="mt-8">
          <Button name="Send Message" />
        </div>
      </div>
    </div>
  );
}
