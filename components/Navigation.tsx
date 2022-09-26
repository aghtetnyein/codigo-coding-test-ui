import React from "react";
import Image from "next/image";

// scss
import styles from "../styles/Nav.module.scss";

// icons
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";

// data
import { navItems } from "../data";

const Navigation = () => {
  return (
    <div className={styles.nav}>
      <Image src="/icons/apple.svg" width={20} height={20} alt="apple" />

      {navItems.map((item) => (
        <span key={item}>{item}</span>
      ))}
      <MagnifyingGlassIcon className="icon" />
      <ShoppingBagIcon className="icon" />
    </div>
  );
};

export default Navigation;
