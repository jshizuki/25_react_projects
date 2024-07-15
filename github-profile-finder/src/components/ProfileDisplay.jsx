import Button from "@mui/material/Button";
import { GoPeople } from "react-icons/go";
// Helper methods
import { formatJoinDate } from "../utils/helpers";
import { formatSingularPlural } from "../utils/helpers";

function ProfileDisplay({ profile }) {
  return (
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
            <b>{profile.followers}</b> {formatSingularPlural(profile.followers)}
          </p>
          <p>
            <b>{profile.following}</b> following
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileDisplay;
