import React from "react";
import { graphql } from "gatsby";
import SEO from "../seo";
import BlogCard from "../blogCard/BlogCard";
import { useBlogQuery } from "../../hooks/useBlogQuery";

export default function BlogSection({ data }, props) {
  const blogDataArr = useBlogQuery();

  return (
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
      {blogDataArr.length == 0 ? (
        <span className="text-title font-bold">
          There are no blog posts to be found.
        </span>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-5 min-w-100 min-h-400">
          {blogDataArr.map((blog) => {
            const {
              description,
              title,
              date,
              categories,
            } = blog.node.frontmatter;
            return (
              <BlogCard
                key={blog.node.id}
                id={blog.node.id}
                description={description}
                title={title}
                date={date}
                categories={categories}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
