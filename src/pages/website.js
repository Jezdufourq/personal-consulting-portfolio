import React from "react";
import Index from "../layouts";
import SEO from "../components/seo";
import { Fade } from "react-reveal";

export default function Home() {
  return (
    <Index>
      <Fade duration={2000} distance="200px">
        <SEO
          keywords={[
            `consulting`,
            `webdevelopment`,
            `react`,
            `vue`,
            `jezdufourq`,
          ]}
          title="Website"
        />
      </Fade>
      <div className="flex-col justify-center">
        <div className="flex text-center justify-center my-5">
          <span className="font-title text-5xl">Website</span>
        </div>
        <div className="flex text-center my-5">
          <span className="font-sans text-subtitle">
            <p>This website was built using the following tech:</p>
            <ul>
              <li>
                Gatsby - <a href="https://www.gatsbyjs.com/">Link here</a>
              </li>
              <li>
                React - <a href="https://reactjs.org/">Link here</a>
              </li>
              <li>
                TailwindCss - <a href="https://tailwindcss.com/">Link here</a>
              </li>
              <li>
                Netlify (for deployment) -{" "}
                <a href="https://www.netlify.com/">Linkhere</a>
              </li>
            </ul>
            <p>
              The purpose of using the tech above was so that I could learn
              React. It also has another added purpose with Gatsby being very
              extensible for templating ang blogging. This is the direction
              where I want to take this website after the first version has been
              posted.
            </p>
          </span>
        </div>
      </div>
    </Index>
  );
}
