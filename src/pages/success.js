import React from "react";
import Index from "../layouts";
import SEO from "../components/seo";

export default function Success() {
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
        title="ThankYou"
      />
      <p>This is a thank you page</p>
    </Index>
  );
}
