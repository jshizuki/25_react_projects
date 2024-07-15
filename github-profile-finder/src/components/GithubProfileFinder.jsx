import { useState, useEffect } from "react";
// Components
import SearchBar from "./SearchBar";
import ProfileDisplay from "./ProfileDisplay";
// API
import { getUserProfile } from "../utils/githubApi";
// CSS
import "./styles.scss";


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
      <SearchBar
        username={username}
        handleSearch={handleSearch}
        handleUserInput={handleUserInput}
      />
      <ProfileDisplay profile={profile}/>
    </div>
  );
}

export default GithubProfileFinder;
