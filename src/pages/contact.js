import React from "react";
import Index from "../layouts";
import SEO from "../components/seo";
import ContactForm from "../components/contactForm/contactForm";

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
      <ContactForm />
      <p>This is below the form</p>
    </Index>
  );
}
