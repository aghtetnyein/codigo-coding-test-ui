import React from "react";

// css
import styles from "../styles/StickyNav.module.scss";

const StickyNav = () => {
  return (
    <div className={styles.sticky}>
      <div>Apple TV+</div>
      <button type="button">Stream now</button>
    </div>
  );
};

export default StickyNav;
