import React from "react";
import styles from "../style";
import { SocialIcon } from "react-social-icons";

const Navbar = () => {
  const handleTwitterClick = () => {
    window.open("https://twitter.com/Factor_Labs");
  };

  return (
    <nav className="w-full flex flex-row justify-between">
      <a href="/">
        <img
          src="https://i.ibb.co/2cCbLyQ/island-labs-FAW-03-1.jpg"
          width="140"
          height="140"
          alt="Factor Labs"
        />
      </a>
      <h1 className={`${styles.heading2} ${styles.flexCenter}`}>TEMPLATES</h1>
      <div className="flex justify-center items-center">
        <SocialIcon
          network="twitter"
          fgColor="#fff"
          onClick={handleTwitterClick}
        />
      </div>
    </nav>
  );
};

export default Navbar;
