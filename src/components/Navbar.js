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
          alt="Factor Labs"
          className="w-[120px] h-[120px] object-contain"
        />
      </a>
      <h1 className={`${styles.heading2} ${styles.flexCenter}`}>TEMPLATES</h1>
      <div className={`${styles.flexCenter}`}>
        <SocialIcon
          network="twitter"
          fgColor="#fff"
          onClick={handleTwitterClick}
          className="cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default Navbar;
