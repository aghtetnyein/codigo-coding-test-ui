import React, { useEffect } from "react";
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
  useEffect(() => {
    const menuBtn = document.getElementById("nav-menu");
    const navModal = document.getElementById("nav-modal");

    let isOpenModal = false;

    menuBtn?.addEventListener("click", () => {
      if (!isOpenModal) {
        isOpenModal = true;
        navModal!.style.top = "2.8rem";
        navModal!.style.transform = "translateY(0)";
        navModal!.style.height = "100vh";
      } else {
        isOpenModal = false;
        navModal!.style.top = "0";
        navModal!.style.transform = "translateY(-100vh)";
        navModal!.style.height = "0";
      }
    });

    const handleWindowResize = () => {
      if (window.innerWidth >= 1024) {
        isOpenModal = false;
        navModal!.style.top = "0";
        navModal!.style.transform = "translateY(-100vh)";
        navModal!.style.height = "0";
      }
    };

    window.addEventListener("resize", handleWindowResize);
  }, []);

  return (
    <nav>
      <ul className={styles.desktopNav}>
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

        <MagnifyingGlassIcon
          className={`${styles.searchIcon} ${styles.icon}`}
        />
        <ShoppingBagIcon className="icon" />
      </ul>

      <ul className={styles.mobileNav}>
        <Bars2Icon
          id="nav-menu"
          className={`${styles.barsIcon} ${styles.icon}`}
        />
        <Link href={"/"}>
          <Image
            src="/icons/apple.svg"
            width={16}
            height={16}
            alt="apple-icon"
            style={{ cursor: "pointer" }}
          />
        </Link>
        <ShoppingBagIcon className="icon" />
      </ul>

      <div id="nav-modal" className={styles.navModal}>
        <div
          style={{
            padding: "0.5rem 1rem",
            borderBottom: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <input type="text" placeholder="Search apple.com" />
        </div>
        <ul>
          {navItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
