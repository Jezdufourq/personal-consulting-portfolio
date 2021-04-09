import React from "react";
import "./contactForm.css";
import Button from "../button/button";
import { UndrawEnvelope } from "react-undraw-illustrations";
import { navigate } from "gatsby-link";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function ContactForm() {
  const [state, setState] = React.useState({});

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  return (
    <div className="bg-white shadow-md rounded-md min-w-full min-h-full max-w-md min-h-md px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto text-gray-900">
      <div className="flex flex-col justify-between">
        <div>
          <span className="font-title text-5xl">Let's have a chat</span>
          <div className="mt-8 text-xl font-sans font-bold">
            Hate forms? Send me an <span className="underline">email</span>{" "}
            instead. If you are looking for my Resume, please inquire below.
          </div>
          <div className="pt-4">
            <UndrawEnvelope primaryColor="#2563EB" />
          </div>
        </div>
        <div className="mt-8 text-center"></div>
      </div>
      <form
        name="contact"
        method="post"
        action="/success/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <div>
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={handleChange} />
            </label>
          </p>
          <span className="uppercase font-sans text-sm font-bold">
            Full Name
          </span>
          <input
            className="w-full text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:border-primary"
            type="text"
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className="mt-8">
          <span className="uppercase text-sm font-sans font-bold">Email</span>
          <input
            className="w-full text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:border-primary"
            type="email"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="mt-8">
          <span className="uppercase text-s font-sans font-bold">Message</span>
          <textarea
            name="message"
            onChange={handleChange}
            className="w-full h-32 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:border-primary"
          ></textarea>
        </div>
        <div className="flex mt-8 justify-end">
          <Button name="Send Message" type="submit" />
        </div>
      </form>
    </div>
  );
}
