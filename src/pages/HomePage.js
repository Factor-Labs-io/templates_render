import styles from "../style";
import React, { Component } from "react";

import { Circles, Dashboard } from "../components";

class HomePage extends Component {
  render() {
    return (
      <div className="bg-primary w-full min-h-screen flex md:flex-row justify-between flex-col">
        <div>
          <Dashboard />
        </div>

        <div className={`md:w-10/12`}>
          <div className={`${styles.padding}`}>
            <Circles />
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
