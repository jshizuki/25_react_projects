import { useState, useEffect } from "react";
import { getProfile } from "../utils/githubApi";
import "./styles.scss";
// Material UI
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { GoPeople } from "react-icons/go";

function GithubProfileFinder() {
  const [username, setUserName] = useState("jshizuki");
  const [profile, setProfile] = useState({
    name: "",
    avatar: "",
    bio: "",
    followers: null,
    following: null,
    joinDate: null,
    numberOfPublicRepos: null,
    profileLink: "",
  });

  console.log(profile);

  useEffect(() => {
    getProfile(username).then((profileInfo) => {
      setProfile(profileInfo);
    });
  }, []);

  const handleUserInput = (event) => {
    setUserName(event.target.value);
  };

  const handleJoinDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  };

  const handleSingularPlural = (follower) => {
    return follower === 1 ? `follower` : `followers`
  }

  const handleSearch = async (event) => {
    event.preventDefault();

    try {
      const data = await getProfile(username);

      setProfile({
        name: data.name,
        username: data.username,
        avatar: data.avatar,
        bio: data.bio,
        followers: data.followers,
        following: data.following,
        joinDate: data.joinDate,
        numberOfPublicRepos: data.numberOfPublicRepos,
        profileLink: data.profileLink,
      });
    } catch (error) {}
  };

  return (
    <div className="container">
      <form onSubmit={handleSearch}>
        <TextField
          id="outlined-basic"
          label="Search username"
          variant="outlined"
          value={username}
          onChange={handleUserInput}
          margin="normal"
        />
      </form>
      <div className="display-container">
        <div className="user-info">
          <img src={profile.avatar} alt="thumbnail" />
          <div className="username-name">
            <h3>{profile.name}</h3>
            <h4>{profile.username}</h4>
          </div>
          <Button
            variant="outlined"
            className="visit-profile-button"
            href={profile.profileLink}
            target="_blank"
          >
            Visit Profile
          </Button>
          <div className="rest-info">
            <h4>{profile.bio}</h4>
            <p>
              <b>Join Date: </b>
              {handleJoinDate(profile.joinDate)}
            </p>
            <p>
              <b>Public Repositories: </b>
              {profile.numberOfPublicRepos}
            </p>
          </div>

          <div className="followers-following">
            <GoPeople className="react-icon"/>
            <p>
              <b>{profile.followers}</b> {handleSingularPlural(profile.followers)}
            </p>
            <p>
              <b>{profile.following}</b> following
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GithubProfileFinder;
