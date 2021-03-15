import React, { useState, useEffect } from "react";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import GithubRepoCard from "../githubCard/GithubRepoCard";

export default function ProjectSection() {
  const [repo, setrepo] = useState([]);
  const openSource = {
    githubUserName: "jezdufourq",
  };
  useEffect(() => {
    const client = new ApolloClient({
      uri: "https://api.github.com/graphql",
      request: (operation) => {
        operation.setContext({
          headers: {
            authorization: `Bearer ${process.env.GATSBY_GITHUB_TOKEN}`,
          },
        });
      },
    });

    client
      .query({
        query: gql`
          {
          user(login: "${openSource.githubUserName}") {
            pinnedItems(first: 6, types: [REPOSITORY]) {
              totalCount
              edges {
                node {
                  ... on Repository {
                    name
                    description
                    forkCount
                    stargazers {
                      totalCount
                    }
                    url
                    id
                    diskUsage
                    primaryLanguage {
                      name
                      color
                    }
                  }
                }
              }
            }
          }
        }
          `,
      })
      .then((result) => {
        setrepoFunction(result.data.user.pinnedItems.edges);
      })
      .catch(function (error) {
        console.log(error);
        setrepoFunction("Error");
        console.log(
          "Because of this Error, nothing is shown in place of Projects section. Projects section not configured"
        );
      });
  }, []);

  function setrepoFunction(array) {
    setrepo(array);
  }
  return (
    <div id="projects" className="my-10">
      <div className="text-center my-5">
        <span className="font-title text-5xl">My Projects</span>
      </div>
      <div className="text-center my-5">
        <span className="font-sans text-subtitle">
          These are my current open source projects and have been posted on my
          GitHub repository. If you would like further information about the
          projects which I have done with companies, please request my CV via
          the contact me button.
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-5 min-w-100 min-h-400">
        {repo.map((v, i) => {
          return <GithubRepoCard repo={v} key={v.node.id} />;
        })}
      </div>
    </div>
  );
}
