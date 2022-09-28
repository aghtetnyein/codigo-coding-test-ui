import React, { useEffect } from "react";

// scss
import styles from "../styles/NewGallery.module.scss";
// icons
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const NewGallery = () => {
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      const image = document.getElementById("image");
      const prevImage = document.getElementById("prev");
      const nextImage = document.getElementById("next");
      const leftClick = document.getElementById("leftClick");
      const rightClick = document.getElementById("rightClick");
      const firstLineContainer = document.getElementById("firstLineContainer");
      const secondLineContainer = document.getElementById(
        "secondLineContainer"
      );

      if (scrollY > 1800 && scrollY < 2100) {
        // calculate new width percentage based on scroll position
        const newValues = (scrollY - 1800) / 5.8;

        // set new width and height
        image!.style.width = `${100 - newValues}vw`;
        image!.style.height = `${100 - newValues}vh`;
        image!.style.marginTop = `${newValues / 2}%`;
        image!.style.borderRadius = "0.8rem";

        prevImage!.style.marginTop = `${newValues / 2}%`;
        prevImage!.style.width = `${100 - newValues}vw`;
        prevImage!.style.height = `${100 - newValues}vh`;
        nextImage!.style.marginTop = `${newValues / 2}%`;
        nextImage!.style.width = `${100 - newValues}vw`;
        nextImage!.style.height = `${100 - newValues}vh`;

        leftClick!.style.top = `${newValues + 20}%`;
        rightClick!.style.top = `${newValues + 20}%`;
      }

      if (scrollY > 2000) {
        prevImage!.style.display = "block";
        prevImage!.style.opacity = (scrollY - 2000) / 100 + "";
        nextImage!.style.display = "block";
        nextImage!.style.opacity = (scrollY - 2000) / 100 + "";
        leftClick!.style.opacity = (scrollY - 2000) / 100 + "";
        rightClick!.style.opacity = (scrollY - 2000) / 100 + "";
      } else {
        prevImage!.style.display = "none";
        nextImage!.style.display = "none";
      }

      if (scrollY > 2080) {
        firstLineContainer!.style.opacity = (scrollY - 2080) / 100 + "";
        secondLineContainer!.style.opacity = (scrollY - 2080) / 100 + "";
      }
    });
  }, []);
  return (
    <div className={styles.gallery}>
      <div className={styles.container}>
        <div id="prev" className={styles.prev}></div>
        <div id="image" className={styles.active}></div>
        <div id="next" className={styles.next}></div>

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
  );
};

export default NewGallery;
