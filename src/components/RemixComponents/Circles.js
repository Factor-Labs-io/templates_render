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
            className={`md:w-40 md:h-40 w-48 h-48 rounded-full m-auto ${styles.flexCenter}`}
            src="https://pbs.twimg.com/profile_images/1642669619449311233/-5Bqyml4_400x400.jpg"
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
            className={`md:w-40 md:h-40 w-48 h-48 rounded-full m-auto ${styles.flexCenter}`}
            src="https://pbs.twimg.com/profile_images/1641256122727145472/W7jA11Qo_400x400.jpg"
          />
        </Link>
        <p className={`${styles.heading2} ${styles.flexCenter}`}>@juicyju33</p>
      </div>

      <div>
        <Link to="/sushi">
          <img
            alt="NFT_Sushi"
            className={`md:w-40 md:h-40 w-48 h-48 rounded-full m-auto ${styles.flexCenter}`}
            src="https://pbs.twimg.com/profile_images/1622958591580798977/qd4SIkjw_400x400.jpg"
          />
        </Link>
        <p className={`${styles.heading2} ${styles.flexCenter}`}>@NFT_Sushi</p>
      </div>

      <div>
        <Link to="/cyclo">
          <img
            alt="iamcyclo"
            className={`md:w-40 md:h-40 w-48 h-48 rounded-full m-auto ${styles.flexCenter}`}
            src="https://pbs.twimg.com/profile_images/1603192226921578496/FlKVIPxT_400x400.png"
          />
        </Link>
        <p className={`${styles.heading2} ${styles.flexCenter}`}>@iamcyclo</p>
      </div>
    </div>
  );
};

export default Circles;
