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

    const image1 = document.getElementById("image1");
    const image2 = document.getElementById("image2");
    const image3 = document.getElementById("image3");
    const image4 = document.getElementById("image4");
    const image5 = document.getElementById("image5");
    const image6 = document.getElementById("image6");
    const image7 = document.getElementById("image7");
    const image8 = document.getElementById("image8");

    let currentTranslate = 0;
    let currentSlide = 1;
    const space = 46;
    const maxSlide = 8;

    // setInterval(() => {
    //   if (currentSlide < maxSlide - 1) {
    //     currentSlide++;
    //     currentTranslate -= space;
    //   } else {
    //     currentSlide = 1;
    //     currentTranslate = 0;
    //   }
    //   imageContainer!.style.transform = `translateX(${currentTranslate}rem)`;
    // }, 5000);

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

    document.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      let width = 1200;
      if (scrollY > 1600) {
        image1!.style.width = "44rem";
        image1!.style.height = "25rem";
        image2!.style.width = "44rem";
        image2!.style.height = "25rem";
        image3!.style.width = "44rem";
        image3!.style.height = "25rem";
        image4!.style.width = "44rem";
        image4!.style.height = "25rem";
        image5!.style.width = "44rem";
        image5!.style.height = "25rem";
        image6!.style.width = "44rem";
        image6!.style.height = "25rem";
        image7!.style.width = "44rem";
        image7!.style.height = "25rem";
        image8!.style.width = "44rem";
        image8!.style.height = "25rem";
      } else {
        image1!.style.width = "100vw";
        image1!.style.height = "100vh";
        image2!.style.width = "100vw";
        image2!.style.height = "100vh";
        image3!.style.width = "100vw";
        image3!.style.height = "100vh";
        image4!.style.width = "100vw";
        image4!.style.height = "100vh";
        image5!.style.width = "100vw";
        image5!.style.height = "100vh";
        image6!.style.width = "100vw";
        image6!.style.height = "100vh";
        image7!.style.width = "100vw";
        image7!.style.height = "100vh";
        image8!.style.width = "100vw";
        image8!.style.height = "100vh";
      }
    });
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
