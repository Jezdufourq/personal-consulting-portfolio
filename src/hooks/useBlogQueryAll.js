import { useStaticQuery, graphql } from "gatsby";

// Returns all blogs within /content
const BLOG_QUERY_ALL = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query BlogQueryAll {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              date
              description
              categories
            }
          }
        }
      }
    }
  `);
  return allMarkdownRemark.edges;
};
