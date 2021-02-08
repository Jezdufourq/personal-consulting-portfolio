import React from "react";
import SEO from "../components/seo";
import Experience from "../components/experienceCards/experience";
import Content from "../layouts/content";
import Title from "../components/title/title";

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
      <Experience
        title="Test 1"
        date="20/02-1999 - 30/03-2010"
        description="This is a test description"
      />
    </Content>
  );
}
