// import styles from "../style";
import React, { Component } from "react";

import { JuicyjuCircles, Dashboard } from "../../components";

class JuicyJuPage extends Component {
  render() {
    return (
      <div className="bg-primary w-full min-h-screen flex md:flex-row md:justify-between flex-col">
        <div>
          <Dashboard />
        </div>

        <div className={`md:w-10/12`}>
          <div>
            <JuicyjuCircles />
          </div>
        </div>
      </div>
    );
  }
}

export default JuicyJuPage;
