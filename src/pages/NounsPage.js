import styles from "../style";
import React, { Component } from "react";

import { Navbar, Generation } from "../components";

class NounsPage extends Component {
  render() {
    return (
      <div className="bg-primary w-full min-h-screen">
        <div className={`${styles.paddingX}`}>
          <Navbar />
        </div>

        <div className={`${styles.flexStart}`}>
          <div className={`${styles.padding} ${styles.boxWidth}`}>
            <Generation />
          </div>
        </div>
      </div>
    );
  }
}

export default NounsPage;
