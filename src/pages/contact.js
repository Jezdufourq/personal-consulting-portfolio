import React from "react";
import Content from "../layouts/content";
import SEO from "../components/seo";
import ContactForm from "../components/contactForm/contactForm";

export default function contact() {
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
        title="Contact"
      />
      <ContactForm />
    </Content>
  );
}
