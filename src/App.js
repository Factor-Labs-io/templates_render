import styles from "./style";

import { Hero, Navbar } from "./components";

const App = () => (
  <div className="bg-primary m-0 h-full">
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

export default App;
