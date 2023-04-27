import React from "react";
import { Link } from "react-router-dom";
import styles from "../../style";

const Circles = () => {
  return (
    <div
      className={`grid sm:grid-cols-1 md:grid-cols-4 gap-4 ${styles.flexCenter} ${styles.padding}`}
    >
      <div>
        <Link to="/fins">
          <img
            alt="finsbeachbar"
            className={`md:w-auto md:h-auto w-48 h-48 rounded-full m-auto ${styles.flexCenter}`}
            src="https://pbs.twimg.com/profile_images/1603192226921578496/FlKVIPxT_400x400.png"
          />
        </Link>
        <p className={`${styles.heading2} ${styles.flexCenter}`}>
          @finsbeachbar
        </p>
      </div>

      <div>
        <Link to="/juicyju">
          <img
            alt="JuicyJu"
            className={`md:w-auto md:h-auto w-48 h-48 rounded-full m-auto ${styles.flexCenter}`}
            src="https://pbs.twimg.com/profile_images/1603192226921578496/FlKVIPxT_400x400.png"
          />
        </Link>
        <p className={`${styles.heading2} ${styles.flexCenter}`}>@juicyju33</p>
      </div>

      <div>
        <Link to="/sushi">
          <img
            alt="NFT_Sushi"
            className={`md:w-auto md:h-auto w-48 h-48 rounded-full m-auto ${styles.flexCenter}`}
            src="https://pbs.twimg.com/profile_images/1603192226921578496/FlKVIPxT_400x400.png"
          />
        </Link>
        <p className={`${styles.heading2} ${styles.flexCenter}`}>@NFT_Sushi</p>
      </div>

      <div>
        <a href="/iamcyclo">
          <img
            alt="iamcyclo"
            className={`md:w-auto md:h-auto w-48 h-48 rounded-full m-auto ${styles.flexCenter}`}
            src="https://pbs.twimg.com/profile_images/1603192226921578496/FlKVIPxT_400x400.png"
          />
        </a>
        <p className={`${styles.heading2} ${styles.flexCenter}`}>@iamcyclo</p>
      </div>
    </div>
  );
};

export default Circles;
