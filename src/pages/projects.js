import React from "react";
import SEO from "../components/seo";
import Index from "../layouts";
import Projects from "../components/projects";

export default function projects() {
  return (
    <Index>
      <SEO
        keywords={[
          `consulting`,
          `webdevelopment`,
          `react`,
          `vue`,
          `jezdufourq`,
        ]}
        title="Project"
      />
      <Projects />
    </Index>
  );
}
