import React from "react";
import Index from "../layouts";
import SEO from "../components/seo";
import Form from "../components/form/form";

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
      <Form />
      <p>This is below the form</p>
    </Index>
  );
}