export const getUserProfile = async (searchInput) => {
  try {
    const response = await fetch(`https://api.github.com/users/${searchInput}`);
    const data = await response.json();

    return {
      avatar: data.avatar_url,
      name: data.name,
      username: data.login,
      profileLink: data.html_url,
      bio: data.bio,
      joinDate: data.created_at,
      numberOfPublicRepos: data.public_repos,
      followers: data.followers,
      following: data.following,
    };
  } catch (error) {
    console.log(
      `Error! Status: ${error.status}. Message: ${error.response.data.message}`
    );
  }
};
