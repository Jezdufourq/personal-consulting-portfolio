import React from "react";
import SEO from "../components/seo";
import Content from "../layouts/content";
import Github from "../components/github";
import Title from "../components/title/title";

export default function projects() {
  return (
    <Content>
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
      <Title string="Open Source Projects" />
      <Github />
    </Content>
  );
}
