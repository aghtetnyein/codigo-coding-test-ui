import React from "react";
import Image from "next/image";

// scss
import styles from "../styles/Cards.module.scss";

// icons
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const Cards = () => {
  return (
    <>
      <div className={styles.cards}>
        <div className={styles.hCard}>
          <div
            className={styles.imgForLarge}
            style={{ marginLeft: "1.2rem", padding: "2rem 0 0 0" }}
          >
            <Image src="/images/one.jpeg" width={550} height={340} alt="one" />
          </div>
          <header>
            <div className={styles.title}>
              <Image
                src="/icons/apple-brown.svg"
                width={30}
                height={30}
                alt="apple"
              />
              One
            </div>
            <div className={styles.subTitle}>
              Bundle Apple TV+ with
              <br />
              up to five other great services.
              <br />
              And enjoy more for less.
            </div>
            <button type="button">Try Apple One free*</button>
            <div className={styles.link}>
              <a href="https://www.apple.com/apple-one/">Learn More</a>
              <ChevronRightIcon className={styles.icon} />
            </div>
          </header>
          <div
            className={styles.imgForSmall}
            style={{ marginLeft: "1.2rem", padding: "0 0 2rem 0" }}
          >
            <Image src="/images/one.jpeg" width={550} height={340} alt="one" />
          </div>
        </div>

        <div className={styles.hCard} style={{ overflow: "hidden" }}>
          <header>
            <div className={`${styles.subTitle} ${styles.textLeft}`}>
              The Apple Music
              <br />
              Student Plan comes
              <br />
              with Apple TV+ for free.3
            </div>
            <button className={styles.textLeft} type="button">
              Try Apple One free*
            </button>
          </header>
          <div style={{ marginBottom: "-2rem" }}>
            <Image
              src="/images/music.jpeg"
              width={440}
              height={350}
              alt="music"
            />
          </div>
        </div>

        <div className={styles.vCardGrid}>
          <div className={styles.vCard}>
            <header style={{ paddingBottom: 0 }}>
              <div className={styles.title}>
                <Image
                  src="/icons/apple-brown.svg"
                  width={30}
                  height={30}
                  alt="apple"
                />
                tv4K
              </div>
              <div className={styles.subTitle}>
                A higher
                <br />
                definition of TV.
              </div>
              <div style={{ display: "flex", gap: "1.5rem" }}>
                <button type="button">Buy</button>
                <div className={styles.link}>
                  <a href="https://www.apple.com/apple-one/">Learn More</a>
                  <ChevronRightIcon className={styles.icon} />
                </div>
              </div>
            </header>

            <Image src="/images/hdtv.png" width={300} height={300} alt="hdtv" />
          </div>
          <div className={styles.vCard}>
            <header style={{ paddingBottom: 0 }}>
              <div className={styles.subTitle}>
                AirPlay
                <br />
                Bring Apple TV+ to
                <br />a screen near you.
              </div>
              <div style={{ display: "flex", gap: "1.5rem" }}>
                <div className={styles.link}>
                  <a href="https://www.apple.com/apple-one/">Learn More</a>
                  <ChevronRightIcon className={styles.icon} />
                </div>
              </div>
            </header>

            <Image
              src="/images/severance.png"
              width={300}
              height={300}
              alt="severance"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
