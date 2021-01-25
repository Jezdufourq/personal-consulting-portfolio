import * as React from "react";
import { Link } from "gatsby";
import SEO from "../components/seo";

const NotFoundPage = () => {
  return (
    <main>
      <div>
        <SEO title="404: Not found" />
        <div>
          <h2 className="bg-yellow-400 text-2xl font-bold inline-block my-8 p-3">
            Looks like this page is a ghost that got abducted by aliens...
          </h2>
        </div>
        <div>
          <Link to="/">Go Home.</Link>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
