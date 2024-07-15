import { useState, useEffect } from "react";
// API
import { getUserProfile } from "../utils/githubApi";
// Helper methods
import { formatJoinDate } from "../utils/helpers";
import { formatSingularPlural } from "../utils/helpers";
// CSS
import "./styles.scss";
// Material UI
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// React Icons
import { GoPeople } from "react-icons/go";

function GithubProfileFinder() {
  const [username, setUsername] = useState("lewagon");
  const [profile, setProfile] = useState({});

  useEffect(() => {
    getUserProfile(username).then((profileInfo) => {
      setProfile(profileInfo);
    });
  }, []);

  const handleUserInput = (event) => {
    setUsername(event.target.value);
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    getUserProfile(username).then((data) => {
      if (Object.values(data).every((value) => value !== undefined)) {
        setProfile(data);
      } else {
        window.alert("User not found");
      }
    });
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
          className="custom-searchbar"
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
              {formatJoinDate(profile.joinDate)}
            </p>
            <p>
              <b>Public Repositories: </b>
              {profile.numberOfPublicRepos}
            </p>
          </div>

          <div className="followers-following">
            <GoPeople className="react-icon" />
            <p>
              <b>{profile.followers}</b>{" "}
              {formatSingularPlural(profile.followers)}
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
