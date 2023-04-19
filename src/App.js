import styles from "./style";
import React, { Component } from "react";
import "./App.css";

import { Hero, Navbar } from "./components";

class App extends Component {
  render() {
    return (
      <div className="bg-primary w-full min-h-screen">
        <div className={`${styles.paddingX}`}>
          <div>
            <Navbar />
          </div>
        </div>

        <div className={`${styles.flexStart}`}>
          <div className={`${styles.padding} ${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
