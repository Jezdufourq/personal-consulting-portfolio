import React from "react";
import SEO from "../components/seo";
import Index from "../layouts";
import Experience from "../components/experienceCards/experience";
export default function experience() {
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
        title="Experience"
      />
      <Experience
        title="Test 1"
        date="20/02-1999 - 30/03-2010"
        description="This is a test description"
      />
    </Index>
  );
}
