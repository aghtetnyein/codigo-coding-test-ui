import { url } from "inspector";
import React, { useEffect } from "react";

import styles from "../styles/Gallery.module.scss";

// icons
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const NewGallery = () => {
  const [currentSlideState, setCurrentSlideState] = React.useState(2);

  useEffect(() => {
    const imageContainer = document.getElementById("imageContainer");
    // const activeImage = document.getElementById("activeImage");
    const leftClick = document.getElementById("leftClick");
    const rightClick = document.getElementById("rightClick");

    let currentTranslate = 0;
    let translateAmount = 50;
    let translateAmountForFirstAndLast = 25.5;
    let currentSlide = currentSlideState;
    let maxSlide = 8;

    const handleLeftClick = () => {
      if (currentSlide > 1) {
        currentSlide--;
        if (currentSlide === 1) {
          currentTranslate += translateAmount - translateAmountForFirstAndLast;
        } else if (currentSlide === maxSlide - 1) {
          currentTranslate += translateAmountForFirstAndLast;
        } else {
          currentTranslate += translateAmount;
        }
      } else {
        currentSlide = maxSlide;
        currentTranslate =
          -translateAmount * (maxSlide - 1) +
          translateAmount +
          translateAmountForFirstAndLast;
      }

      console.log(currentSlide);
      setCurrentSlideState(currentSlide);

      imageContainer!.style.transform = `translateX(${currentTranslate}vw)`;
    };

    const handleRightClick = () => {
      if (currentSlide < maxSlide) {
        currentSlide++;
        if (currentSlide === 2 || currentSlide === 8) {
          currentTranslate -= translateAmountForFirstAndLast;
        } else {
          currentTranslate -= translateAmount;
        }
      } else {
        currentSlide = 1;
        console.log(currentSlide);
        currentTranslate = translateAmountForFirstAndLast - 1;
      }

      console.log(currentSlide);
      setCurrentSlideState(currentSlide);

      imageContainer!.style.transform = `translateX(${currentTranslate}vw)`;
    };

    leftClick?.addEventListener("click", handleLeftClick);
    rightClick?.addEventListener("click", handleRightClick);

    return () => {
      leftClick?.removeEventListener("click", handleLeftClick);
      rightClick?.removeEventListener("click", handleRightClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.gallery}>
      <div className={styles.heroContainer}>
        <div id="imageContainer" className={styles.imageContainer}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
            // eslint-disable-next-line @next/next/no-img-element
            <div
              id={currentSlideState === item ? "activeImage" : ""}
              className={item === currentSlideState ? styles.active : ""}
              key={index}
              style={{
                background: `url("/images/image-${item}.jpeg") no-repeat center center/cover`,
              }}
            ></div>
          ))}
        </div>

        <ChevronLeftIcon id={"leftClick"} className={styles.leftIcon} />
        <ChevronRightIcon id={"rightClick"} className={styles.rightIcon} />
      </div>

      <div className={styles.firstLineContainer}>
        <div className={styles.photobanner}>
          {[7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 1, 2, 3, 4, 5, 6].map(
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

export default NewGallery;
