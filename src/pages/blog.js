import React from "react";
import Content from "../layouts/content";
import SEO from "../components/seo";
import Title from "../components/title/title";

export default function blog() {
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
        title="Blog"
      />
      <Title string="Blog" />
    </Content>
  );
}
