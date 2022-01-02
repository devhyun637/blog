import React from "react";
import styled from "@emotion/styled";

const PROFILE_IMAGE_LINK =
  "https://user-images.githubusercontent.com/59258239/142620313-da722e51-376b-4618-9962-0c142cc3eba3.jpeg";

const ProfileImageWrapper = styled.div`
  width: 150px;
  height: 150px;
  margin: 30px;

  background-image: url(${PROFILE_IMAGE_LINK});
  background-position: 10%;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20%;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.15), 0 4px 4px rgba(0, 0, 0, 0.15),
    0 8px 8px rgba(0, 0, 0, 0.15);
`;

const ProfileImage = () => {
  return <ProfileImageWrapper />;
};

export default ProfileImage;
