import React, { useEffect } from "react";
import Image from "next/image";

// scss
import styles from "../styles/Gallery.module.scss";

// icons
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const Gallery = () => {
  useEffect(() => {
    const imageContainer = document.getElementById("imageContainer");
    const leftClick = document.getElementById("leftClick");
    const rightClick = document.getElementById("rightClick");

    let currentTranslate = 0;
    let currentSlide = 1;
    let space = 46;
    const maxSlide = 8;

    const handleWindowResize = () => {
      if (window.innerWidth < 768) {
        space = 26;
      } else {
        space = 46;
      }
    };

    window.addEventListener("resize", handleWindowResize);

    setInterval(() => {
      if (currentSlide < maxSlide - 1) {
        currentSlide++;
        currentTranslate -= space;
      } else {
        currentSlide = 1;
        currentTranslate = 0;
      }
      imageContainer!.style.transform = `translateX(${currentTranslate}rem)`;
    }, 5000);

    leftClick!.addEventListener("click", () => {
      if (currentSlide > 1) {
        currentSlide--;
        currentTranslate += space;
      } else {
        currentSlide = maxSlide - 1;
        currentTranslate = -space * 2;
      }
      imageContainer!.style.transform = `translateX(${currentTranslate}rem)`;
    });

    rightClick!.addEventListener("click", () => {
      if (currentSlide < maxSlide - 1) {
        currentSlide++;
        currentTranslate -= space;
      } else {
        currentSlide = 1;
        currentTranslate = 0;
      }
      imageContainer!.style.transform = `translateX(${currentTranslate}rem)`;
    });

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className={styles.gallery}>
      <div className={styles.heroContainer}>
        <div id="imageContainer" className={styles.imageContainer}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              id={`image${item}`}
              key={index}
              src={`/images/image-${item}.jpeg`}
              alt={`image-${item}`}
            />
          ))}
        </div>
        <ChevronLeftIcon id={"leftClick"} className={styles.leftIcon} />
        <ChevronRightIcon id={"rightClick"} className={styles.rightIcon} />
      </div>
      <div className={styles.firstLineContainer}>
        <div className={styles.photobanner}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
            (item, index) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={index}
                src={`/images/image-${item > 8 ? item - 8 : item}.jpeg`}
                alt={`image-${item > 8 ? item - 8 : item}`}
              />
            )
          )}
        </div>
      </div>
      <div className={styles.secondLineContainer}>
        <div className={styles.photobanner}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
            (item, index) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={index}
                src={`/images/image-${item > 8 ? item - 8 : item}.jpeg`}
                alt={`image-${item > 8 ? item - 8 : item}`}
              />
            )
          )}
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
