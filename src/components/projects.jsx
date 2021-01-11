import React, { useState, useEffect, lazy, Suspense } from "react";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
// import Button from "../../components/button/Button";
import { openSource } from "../source";
import Loading from "./loading";
export default function Projects() {
    const GithubRepoCard = lazy(() =>
        import("./github/GithubRepoCard")
    );
    const FailedLoading = () => null;
    const renderLoader = () => <Loading />;
    const [repo, setrepo] = useState([]);
    // todo: remove useContex because is not supported
    useEffect(() => {
        getRepoData();
    }, []);

    function getRepoData() {
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
                console.log(result);
            })
            .catch(function (error) {
                console.log(error);
                setrepoFunction("Error");
                console.log(
                    "Because of this Error, nothing is shown in place of Projects section. Projects section not configured"
                );
            });
    }

    function setrepoFunction(array) {
        setrepo(array);
    }
    if (!(typeof repo === "string" || repo instanceof String) && openSource.display) {
        return (
            <Suspense fallback={renderLoader()}>
                <div className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:p-8" id="projects">
                    <h1 className="w-full text-5xl font-serif text-bold text-black tracking-tight py-4">Open Source Projects</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-5">
                        {repo.map((v, i) => {
                            return (
                                <GithubRepoCard repo={v} key={v.node.id} />
                            );
                        })}
                    </div>
                </div>
            </Suspense>
        );
    } else {
        return <FailedLoading />;
    }
}
