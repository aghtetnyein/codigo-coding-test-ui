import React, { useEffect } from "react";
import Link from "next/link";

// scss
import styles from "../styles/SectionHero.module.scss";

const SectionHero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const video = document.getElementById("bgVideo");
      const firstContent = document.getElementById("firstContent");
      const secondContent = document.getElementById("secondContent");
      const thirdContent = document.getElementById("thirdContent");
      const fourthContent = document.getElementById("fourthContent");
      const price = document.getElementById("price");
      // video!.style.opacity = `${1 - window.scrollY / 700}`;
      video!.style.backgroundColor = `rgba(0, 0, 0, ${window.scrollY / 500})`;
      firstContent!.style.opacity = `${1 - window.scrollY / 200}`;

      if (scrollY > 200) {
        secondContent!.style.opacity = `${0 + (scrollY - 200) / 200}`;
      }
      if (scrollY > 300) {
        thirdContent!.style.opacity = `${0 + (scrollY - 300) / 200}`;
      }
      if (scrollY > 400) {
        fourthContent!.style.opacity = `${0 + (scrollY - 400) / 200}`;
      }
      if (scrollY > 500) {
        price!.style.opacity = `${0 + (scrollY - 700) / 300}`;
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div id="bgVideo">
        <video
          className={styles.bgVideo}
          autoPlay
          loop
          muted
          poster="https://assets.codepen.io/6093409/river.jpg"
        >
          <source src="/video/video.mp4" type="video/mp4" />
        </video>
        <section className={styles.sectionHero}>
          <div id="firstContent" className={styles.content}>
            <h2>
              All Apple Originals.
              <br />
              Only on Apple TV+.
            </h2>
            <Link href={"/tvapple"}>Stream now</Link>
            {/* <a href="https://tv.apple.com/channel/tvs.sbd.4000?itscg=10000&itsct=atv-tv_op-nav_wch-ctr-210111">
              Stream now
            </a> */}
            <p>Watch on the tv App</p>
          </div>
        </section>

        <section className={styles.sectionValueProps}>
          <ul>
            <li id="secondContent">New Apple Originals every month.</li>
            <li id="thirdContent">
              Stream on the Apple TV app on Apple devices, smart TVs, consoles,
              sticks.
            </li>
            <li id="fourthContent">Share Apple TV+ with your family</li>
          </ul>
        </section>
      </div>

      <section className={styles.sectionValuePrices}>
        <ul id="price" style={{ opacity: 0 }}>
          <li>
            <h5>Buy an Apple device</h5>
            <h3>3 months free.</h3>
            <p>
              Apple TV+ is included when you purchase an Apple device and redeem
              the offer within 90 days.
            </p>
            <a href="https://tv.apple.com/channel/tvs.sbd.4000?itscg=10000&itsct=atv-0-tv_ovp-prc_elg-apl-avl-200306">
              Check eligibility
            </a>
          </li>

          <li>
            <h5>Free 7-day trial</h5>
            <h3>$4.99/mo.</h3>
            <p>
              A monthly subscription is just $4.99 per month after a free 7-day
              trial. Share Apple TV+ with your family.
            </p>
            <a href="https://tv.apple.com/channel/tvs.sbd.4000?itscg=10000&itsct=atv-0-tv_ovp-prc_tif-apl-avl-200306">
              Try it free
            </a>
          </li>

          <li>
            <h5>Free 1‑month trial</h5>
            <h3>Apple One</h3>
            <p>
              Bundle Apple TV+ with up to five other great services for one low
              monthly price. And enjoy more for less.
            </p>
            <a href="https://tv.apple.com/channel/tvs.sbd.4000?itscg=10000&itsct=atv-0-tv_ovp-prc_tif-apl-avl-200306">
              Try Apple One free*
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default SectionHero;
