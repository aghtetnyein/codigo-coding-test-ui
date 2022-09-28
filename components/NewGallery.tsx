import React, { useEffect } from "react";

// scss
import styles from "../styles/NewGallery.module.scss";
// icons
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const NewGallery = () => {
  const [currentSlideState, setCurrentSlideState] = React.useState(3);
  useEffect(() => {
    const image = document.getElementById("image");
    const leftClick = document.getElementById("leftClick");
    const rightClick = document.getElementById("rightClick");
    const firstLineContainer = document.getElementById("firstLineContainer");
    const secondLineContainer = document.getElementById("secondLineContainer");
    const carousel = document.getElementById("carousel");
    const imageContainer = document.getElementById("imageContainer");

    let currentTranslate = -18.85;
    let currentSlide = 2;
    let space = 37.7;
    const maxSlide = 7;

    const handleLeftClick = () => {
      if (currentSlide > 1) {
        currentSlide--;
        currentTranslate += space;
      } else {
        currentSlide = maxSlide - 1;
        currentTranslate = -space * 2;
      }

      setCurrentSlideState(currentSlide + 1);
      imageContainer!.style.transform = `translateX(${currentTranslate}%)`;
    };

    const handleRightClick = () => {
      if (currentSlide < maxSlide - 1) {
        currentSlide++;
        currentTranslate -= space;
      } else {
        currentSlide = 1;
        currentTranslate = 0;
      }

      setCurrentSlideState(currentSlide + 1);
      imageContainer!.style.transform = `translateX(${currentTranslate}%)`;
    };

    leftClick!.addEventListener("click", handleLeftClick);
    rightClick!.addEventListener("click", handleRightClick);

    document.addEventListener("scroll", () => {
      const scrollY = window.scrollY;

      if (scrollY > 1800 && scrollY < 2100) {
        // calculate new width percentage based on scroll position
        const newValues = (scrollY - 1800) / 5.8;

        // set new width and height
        image!.style.width = `${100 - newValues}vw`;
        image!.style.height = `${100 - newValues}vh`;
        image!.style.marginTop = `${newValues / 2}%`;
        image!.style.borderRadius = "0.8rem";
      }

      if (scrollY > 2000) {
        image!.style.opacity = `${1 - (scrollY - 2000) / 80}`;
      } else {
        image!.style.opacity = `1`;
      }

      if (scrollY > 2050) {
        carousel!.style.opacity = (scrollY - 2050) / 70 + "";
        firstLineContainer!.style.opacity = (scrollY - 2050) / 70 + "";
        secondLineContainer!.style.opacity = (scrollY - 2050) / 70 + "";
      }
    });

    return () => {
      document.removeEventListener("scroll", () => {});
      leftClick!.removeEventListener("click", handleLeftClick);
      rightClick!.removeEventListener("click", handleRightClick);
    };
  }, []);

  return (
    <div className={styles.gallery}>
      <div className={styles.heroGallery}>
        <div className={styles.container}>
          <div
            id="image"
            className={styles.active}
            style={{
              background: `url("/images/image-${currentSlideState}.jpeg") center/cover no-repeat`,
            }}
          ></div>
        </div>

        <div id="carousel" className={styles.carousel}>
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

        <div id="firstLineContainer" className={styles.firstLineContainer}>
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

        <div id="secondLineContainer" className={styles.secondLineContainer}>
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
    </div>
  );
};

export default NewGallery;
