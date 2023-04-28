// import styles from "../style";
import React, { Component } from "react";

import { CycloCircles, Dashboard } from "../../components";

class CycloPage extends Component {
  render() {
    return (
      <div className="bg-primary w-full min-h-screen flex md:flex-row md:justify-between flex-col">
        <div>
          <Dashboard />
        </div>

        <div className={`md:w-10/12`}>
          <div>
            <CycloCircles />
          </div>
        </div>
      </div>
    );
  }
}

export default CycloPage;
