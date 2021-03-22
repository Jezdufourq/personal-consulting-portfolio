import React from "react";
import { graphql } from "gatsby";
import Content from "../layouts/content";
import moment from "moment";

export default function BlogPost({ data }) {
  const post = data.markdownRemark;
  return (
    <Content>
      <div className="flex-col justify-items-center">
        <div className="font-title text-5xl text-center p-3">
          {post.frontmatter.title}
        </div>
        <div className="text-sm text-center italic">
          {post.frontmatter.description}
        </div>
        <div className="text-sm text-center italic">
          {moment(post.frontmatter.date).format(
            "dddd, MMMM Do YYYY, h:mm:ss a"
          )}
        </div>
        <div className="flex-nowrap p-1 justify-center">
          {post.frontmatter.categories.map((category) => {
            return (
              <span
                className="bg-blue-600 rounded-full px-3 py-1 font-semibold text-white mr-2"
                key={category}
              >
                {category}
              </span>
            );
          })}
        </div>
      </div>
      <div className="py-3" dangerouslySetInnerHTML={{ __html: post.html }} />
    </Content>
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
