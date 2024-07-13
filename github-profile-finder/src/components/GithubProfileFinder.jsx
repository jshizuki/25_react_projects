import { useState } from "react";
import { getProfile } from "../utils/githubApi";
// Material UI
import TextField from "@mui/material/TextField";

function GithubProfileFinder() {
  const [username, setUserName] = useState("");
  const [profile, setProfile] = useState({
    avatar: "",
    followers: null,
    following: null,
    joinDate: null,
    repos: null,
  });

  const handleUserInput = (event) => {
    setUserName(event.target.value);
  };

  const handleSearch = async (event) => {
    event.preventDefault();

    try {
      const data = await getProfile(username);

      setProfile({
        avatar: data.avatar,
        followers: data.followers,
        following: data.following,
        joinDate: data.joinDate,
        repos: data.numberOfPublicRepos,
      });
    } catch (error) {}
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          placeholder="Search username"
          value={username}
          onChange={handleUserInput}
        />
      </form>
      <img src={profile.avatar} alt="thumbnail" />
      <p>Followers: {profile.followers}</p>
      <p>Following: {profile.following}</p>
      <p>Join Date: {profile.joinDate}</p>
      <p>Number of Public Repositories: {profile.repos}</p>
    </div>
  );
}

export default GithubProfileFinder;
