import styles from "../../style";
import React, { Component } from "react";

import { Dashboard, AnimateHTFT } from "../../components";

class HTFTPage extends Component {
  render() {
    return (
      <div className="bg-primary w-full min-h-screen flex md:flex-row md:justify-between flex-col">
        <div>
          <Dashboard />
        </div>

        <div className={`md:w-10/12 ${styles.flexStart}`}>
          <div className={`${styles.padding} ${styles.boxWidth}`}>
            <AnimateHTFT />
          </div>
        </div>
      </div>
    );
  }
}

export default HTFTPage;
