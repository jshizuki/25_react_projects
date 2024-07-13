import { Octokit } from "https://esm.sh/@octokit/core";

const octokit = new Octokit({
  // needs to get a new token after it expires (August 12 2024)
  auth: process.env.TOKEN,
});

export const getProfile = async (searchInput) => {
  try {
    const response = await octokit.request(`GET /users/${searchInput}`, {
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    const responseData = response.data;

    return {
      username: responseData.login,
      avatar: responseData.avatar_url,
      joinDate: responseData.created_at,
      numberOfPublicRepos: responseData.public_repos,
      followers: responseData.followers,
      following: responseData.following,
    };
  } catch (error) {
    console.log(
      `Error! Status: ${error.status}. Message: ${error.response.data.message}`
    );
    return undefined;
  }
};
