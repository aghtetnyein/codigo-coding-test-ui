import React from "react";
import Image from "next/image";
import Link from "next/link";

// scss
import styles from "../styles/Nav.module.scss";

// icons
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  Bars2Icon,
} from "@heroicons/react/24/outline";

// data
import { navItems } from "../data";

const Navigation = () => {
  return (
    <ul className={styles.nav}>
      <Bars2Icon className={`${styles.barsIcon} ${styles.icon}`} />
      <Link href={"/"}>
        <Image
          src="/icons/apple.svg"
          width={16}
          height={16}
          alt="apple-icon"
          style={{ cursor: "pointer" }}
        />
      </Link>

      {navItems.map((item) => (
        <li key={item}>{item}</li>
      ))}

      <MagnifyingGlassIcon className={`${styles.searchIcon} ${styles.icon}`} />
      <ShoppingBagIcon className="icon" />
    </ul>
  );
};

export default Navigation;
