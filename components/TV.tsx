import React from "react";
import Image from "next/image";

// scss
import styles from "../styles/TV.module.scss";

// data
import { devices, supportedDevices } from "../data";

const TV = () => {
  return (
    <div className={styles.tv}>
      <Image src="/images/tv.png" width={70} height={70} alt="apple" />

      <header>
        Watch Apple TV+ anywhere
        <br />
        on the Apple TV app.
      </header>
      <span>
        Find the Apple TV app on your favorite Apple devices.
        <br />
        Or watch Apple TV+ online at
        <a href="https://tv.apple.com/"> tv.apple.com</a>
      </span>

      <div className={styles.devices}>
        {devices.map((device, index) => (
          <div key={index} className={styles.device}>
            <Image
              src={`/images/${device.alt}.png`}
              width={80}
              height={80}
              alt={device.alt}
            />
            <p>{device.name}</p>
          </div>
        ))}
      </div>

      <p className={styles.secondHeader}>
        See it on your smart TV
        <br />
        or streaming device.
      </p>
      <a href="https://support.apple.com/my-mm/guide/tvplus/welcome/web">
        Set up your device &gt;
      </a>
      <a href="https://www.apple.com/apple-tv-app/devices/">
        Explore compatible devices &gt;
      </a>

      <div className={styles["supported-devices"]}>
        {supportedDevices.map((device, index) => (
          <Image
            key={index}
            src={`/images/${device}.jpeg`}
            width={100}
            height={70}
            alt={device}
          />
        ))}
      </div>
    </div>
  );
};

export default TV;
