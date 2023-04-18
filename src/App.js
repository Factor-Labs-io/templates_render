import styles from "./style";

import { Hero, Navbar } from "./components";

const App = () => (
  <div className="bg-primary w-full">
    <div className={`${styles.paddingX}`}>
      <div>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
  </div>
);

export default App;
