import { useStaticQuery, graphql } from "gatsby";

export const useBlogQuery = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query MyQuery {
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
