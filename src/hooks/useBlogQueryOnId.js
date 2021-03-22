import { useStaticQuery, graphql } from "gatsby";

// Returns blog on blog id - this is for the index.js page when the user clicks the blog post
export const BLOG_QUERY_ON_ID = (blogId) => {
  const { markdownRemark } = useStaticQuery(graphql`
    query BlogQueryOnId($id: String) {
      markdownRemark(id: { eq: $id }) {
        id
        html
        frontmatter {
          categories
          date
          description
          title
        }
      }
    }
  `);
};
