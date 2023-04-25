import styles from "../style";
import React, { Component } from "react";

import { Dashboard, Generation } from "../components";

class NounsPage extends Component {
  render() {
    return (
      <div className="bg-primary w-full min-h-screen flex md:flex-row md:justify-between">
        <div>
          <Dashboard />
        </div>

        <div className={`border-2 md:w-10/12 ${styles.flexStart}`}>
          <div className={`${styles.padding} ${styles.boxWidth}`}>
            <Generation />
          </div>
        </div>
      </div>
    );
  }
}

export default NounsPage;