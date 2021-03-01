import React, { useEffect } from "react";
import SEO from "../seo";
import BlogCard from "../blogCard/BlogCard";
import { StaticQuery, graphql } from "gatsby";

export default function BlogSection({ data, location }) {
  const blogs = data.allMarkdownRemark;

  useEffect(() => {
    console.log(blogs);
  });
  render(
    <div id="blogs" className="my-10">
      <SEO
        keywords={[
          `consulting`,
          `webdevelopment`,
          `react`,
          `vue`,
          `jezdufourq`,
          `student`,
          `software engineering`,
        ]}
        title="Blogs"
      />
      <div className={props.class}>
        <span className="font-title text-5xl">My Blogs</span>
      </div>
      <div className={props.class}>
        <span className="font-sans text-subtitle">
          This section outlines some of the blog articles which I have written.
        </span>
      </div>
      {blogs.length === 0 ? (
        <span className="text-title font-bold">
          There are no blog posts to be found.
        </span>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-5 min-w-100 min-h-400">
          {blogs.map((blog) => {
            const title = post.frontmatter.title || post.fields.slug;
            return (
              <BlogCard
                key={blog.id}
                id={blog.id}
                description={blog.description}
                title={title}
                tag={blog.tags}
                date={blog.formatter.date}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export const pageQuery = graphql`
  query MyQuery {
    markdownRemark {
      frontmatter {
        categories
        date
        description
        title
      }
    }
  }
`;
