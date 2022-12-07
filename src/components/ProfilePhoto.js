import React from "react";
import styles from "../styles/ProfilePhoto.module.css";

const ProfilePhoto = ({ src, height = 45, text }) => {
  return (
    <span>
      <img
        className={styles.ProfilePhoto}
        src={src}
        height={height}
        width={height}
        alt="profile photo"
      />
      {text}
    </span>
  );
};

export default ProfilePhoto;
