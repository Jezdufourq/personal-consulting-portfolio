// import React from "react";

// export default function blogTemplate({ data }) {
//   const { markDownRemark: post } = data;
//   return (
//     <div>
//       <h1>{post.frontmatter.title}</h1>
//     </div>
//   );
// }

// export const postQuery = graphql`
//   query BlogPostByPath($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       html
//       frontmatter {
//         title
//         date
//         description
//         categories
//       }
//     }
//   }
// `;
