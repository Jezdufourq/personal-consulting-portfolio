import React from "react"
import Index from "../layouts"
import SEO from "../components/seo"

export default function NotFoundPage() {
  return (
    <Index>
        <SEO title="404: Not Found" />
        <h1>This is the 404 page, go back!</h1>
    </Index>
  );
}