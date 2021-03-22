import { useStaticQuery, graphql } from "gatsby";

// Returns the top 3 ordered by date blogs in /content
export const BLOG_QUERY_LIMIT_3 = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query BlogQueryLimit3 {
      allMarkdownRemark(
        limit: 3
        sort: { order: ASC, fields: frontmatter___date }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              date
              description
              categories
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  return allMarkdownRemark.edges;
};
