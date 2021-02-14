import React from "react";
import SEO from "../components/seo";
import Content from "../layouts/content";
import Title from "../components/title/title";
import Experiences from "../components/experiences";

export default function experience() {
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
        title="Experience"
      />
      <Title string="Experience" />
      <Experiences />
    </Content>
  );
}
