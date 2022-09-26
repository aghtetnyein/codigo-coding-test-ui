import React from "react";
import Image from "next/image";

// scss
import styles from "../styles/Cards.module.scss";

const Cards = () => {
  return (
    <>
      <div className={styles.cards}>
        <div className={styles.hCard}>
          <Image src="/images/one.png" width={320} height={210} alt="one" />
          <header>
            <Image
              src="/icons/apple-brown.svg"
              width={30}
              height={30}
              alt="apple"
            />
            One
            <br />
            <br />
            Bundle Apple TV+ with
            <br />
            up to five other great services.
            <br />
            And enjoy more for less.
            <br />
            <button type="button">Try Apple One free*</button>
            <br />
            <a href="https://www.apple.com/apple-one/">Learn More &gt;</a>
          </header>
        </div>
        <div className={styles.hCard}>
          <header style={{ textAlign: "start", paddingRight: "50px" }}>
            The Apple Music
            <br />
            Student Plan comes
            <br />
            with Apple TV+ for free.3
            <br />
            <button type="button">Try Apple One free*</button>
          </header>
          <Image src="/images/music.png" width={350} height={320} alt="music" />
        </div>
      </div>
      <div className={styles.cards}>
        <div className={styles.vCard}>
          <header>
            <Image
              src="/icons/apple-brown.svg"
              width={30}
              height={30}
              alt="apple"
            />
            tv 4k
            <br />
            A higher definition of TV.
            <br />
            <button type="button">Try Apple One free*</button>
            <br />
            <a href="https://www.apple.com/apple-one/">Learn More &gt;</a>
          </header>
          <Image src="/images/hdtv.png" width={300} height={300} alt="hdtv" />
        </div>
        <div className={styles.vCard}>
          <header>
            AirPlay
            <br />
            Bring Apple TV+ to
            <br />
            a screen near you.
            <br />
            <button type="button">Try Apple One free*</button>
            <br />
            <a href="https://www.apple.com/apple-one/">Learn More &gt;</a>
          </header>
          <Image
            src="/images/severance.png"
            width={300}
            height={300}
            alt="severance"
          />
        </div>
      </div>
    </>
  );
};

export default Cards;
