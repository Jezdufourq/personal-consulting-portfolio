import React, { useState, useEffect } from "react";
import SEO from "../seo";
import BlogCard from "../blogCard/BlogCard";

export default function BlogSection(props) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs([
      {
        id: 0,
        title: "Blog 1",
        description:
          "This is a very cool blog post, and this is the first blog post",
        tags: [
          {
            id: 0,
            name: "business",
          },
          {
            id: 1,
            name: "travel",
          },
        ],
        date: "2nd Feb, 2021",
      },
    ]);
  }, []);

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-5 min-w-100 min-h-400">
        {blogs.map((blog) => {
          return (
            <BlogCard
              key={blog.id}
              id={blog.id}
              description={blog.description}
              title={blog.title}
              tag={blog.tags}
              date={blog.date}
            />
          );
        })}
      </div>
    </div>
  );
}
