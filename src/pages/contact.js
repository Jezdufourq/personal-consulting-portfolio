import React from "react";
import Index from "../layouts";
import SEO from "../components/seo";

export default function contact() {
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
        title="Contact"
      />
      <p>This is a contact page</p>
    </Index>
  );
}
