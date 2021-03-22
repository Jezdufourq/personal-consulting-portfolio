import React, { useEffect } from "react";
import { graphql } from "gatsby";
import SEO from "../seo";
import BlogCard from "../blogCard/BlogCard";
import { BLOG_QUERY_LIMIT_3 } from "../../hooks/useBlogQueryLimit3";

export default function BlogSection({ data }, props) {
  const blogDataArr = BLOG_QUERY_LIMIT_3();
  useEffect(() => {
    console.log(data);
    console.log(blogDataArr);
  });

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
                url={blog.node.fields.slug}
                categories={categories}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        categories
        date
      }
    }
  }
`;
