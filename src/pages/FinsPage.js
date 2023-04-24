import styles from "../style";
import React, { Component } from "react";

import { DrinksCircles, Navbar } from "../components";

class FinsPage extends Component {
  render() {
    return (
      <div className="bg-primary w-full min-h-screen">
        <div className={`${styles.paddingX}`}>
          <Navbar />
        </div>

        <div className={`${styles.flexStart}`}>
          <DrinksCircles />
        </div>
      </div>
    );
  }
}

export default FinsPage;
