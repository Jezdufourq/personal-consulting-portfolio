import { useStaticQuery, graphql } from "gatsby";

export const useBlogQuery = () => {
  const blogListData = useStaticQuery(graphql`
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
  `);
  return blogListData;
};
