import React from "react";
import { Container } from "react-bootstrap";

import appStyles from "../../styles/PopularProfiles.module.css";
import assetStyles from "../../styles/Asset.module.css";

import Asset from "../../components/Asset";
import Profile from "./Profile";
import { useProfileData } from "../../contexts/ProfileDataContext";

const PopularProfiles = ({ mobile }) => {
  const { popularProfiles } = useProfileData();

  return (
    <Container
      className={`${appStyles.Post} ${mobile && "d-lg-none text-center mb-3"}`}
    >
      {popularProfiles.results.length ? (
        <>
          <p>Most followed profiles</p>
          {mobile ? (
            <div className="d-flex justify-content-around">
              {popularProfiles.results.slice(0, 4).map((profile) => (
                <Profile key={profile.id} profile={profile} mobile />
              ))}
            </div>
          ) : (
            popularProfiles.results.map((profile) => (
              <Profile key={profile.id} profile={profile} />
            ))
          )}
        </>
      ) : (
        <Asset className={assetStyles.Asset} spinner />
      )}
    </Container>
  );
};

export default PopularProfiles;
