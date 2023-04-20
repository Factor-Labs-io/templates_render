import styles from "../style";
import React, { Component } from "react";

import { Circles, Navbar } from "../components";

class HomePage extends Component {
  render() {
    return (
      <div className="bg-primary w-full min-h-screen">
        <div className={`${styles.paddingX}`}>
          <Navbar />
        </div>

        <div className={`${styles.flexStart}`}>
          <div className={`${styles.padding} ${styles.boxWidth}`}>
            <Circles />
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
