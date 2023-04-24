import styles from "../style";
import React, { Component } from "react";

import { Dashboard } from "../components";

class Template extends Component {
  render() {
    return (
      <div className="bg-primary w-full min-h-screen">
        <div>
          <Dashboard />
        </div>
      </div>
    );
  }
}

export default Template;
