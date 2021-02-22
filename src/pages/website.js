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
      <span></span>
    </Index>
  );
}
