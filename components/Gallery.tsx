import React from "react";
import Image from "next/image";

// scss
import styles from "../styles/Gallery.module.scss";

const Gallery = () => {
  return (
    <div className={styles.gallery}>
      <div className={styles.firstLineContainer}>
        <div className={styles.photobanner}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={index}
              src={`/images/image-${item > 4 ? item - 4 : item}.jpeg`}
              alt={`image-${item > 4 ? item - 4 : item}`}
            />
          ))}
        </div>
      </div>
      <div className={styles.secondLineContainer}>
        <div className={styles.photobanner}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={index}
              src={`/images/image-${item > 4 ? item - 4 : item}.jpeg`}
              alt={`image-${item > 4 ? item - 4 : item}`}
            />
          ))}
        </div>
      </div>
      <div className={styles.button}>
        <a href="https://tv.apple.com/channel/tvs.sbd.4000?itscg=10000&itsct=atv-0-tv_ovp-prc_full-apl-avl-200306">
          See full lineup
        </a>
      </div>
    </div>
  );
};

export default Gallery;
