import { url } from "inspector";
import React, { useEffect } from "react";

import styles from "../styles/Gallery.module.scss";

// icons
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const Gallery = () => {
  const [currentSlideState, setCurrentSlideState] = React.useState(2);

  const heroContainerRef = React.useRef<HTMLDivElement>(null);
  const imageContainerRef = React.useRef<HTMLDivElement>(null);
  const activeImageRef = React.useRef<HTMLImageElement>(null);
  const leftClickRef = React.useRef<HTMLDivElement>(null);
  const rightClickRef = React.useRef<HTMLDivElement>(null);
  const firstLineContainerRef = React.useRef<HTMLDivElement>(null);
  const secondLineContainerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    let currentTranslate = 0;
    let translateAmount = 50;
    // let translateAmountForFirstAndLast = 25.5;
    let currentSlide = currentSlideState;
    let maxSlide = 8;

    let minScrollPosition = 1800;
    let maxScrollPosition = 2350;
    let marginTopPercent = 1.2;

    const handleLeftClick = () => {
      if (currentSlide > 1) {
        currentSlide--;
        currentTranslate += translateAmount;
        setCurrentSlideState((prev: any) => (prev > 1 ? prev - 1 : prev));
      }
      imageContainerRef!.current!.style.transform = `translateX(${currentTranslate}vw)`;

      // looping images
      // if (currentSlide > 1) {
      //   currentSlide--;
      //   if (currentSlide === 1) {
      //     currentTranslate += translateAmount - translateAmountForFirstAndLast;
      //   } else if (currentSlide === maxSlide - 1) {
      //     currentTranslate += translateAmountForFirstAndLast;
      //   } else {
      //     currentTranslate += translateAmount;
      //   }
      // } else {
      //   currentSlide = maxSlide;
      //   currentTranslate =
      //     -translateAmount * (maxSlide - 1) +
      //     translateAmount +
      //     translateAmountForFirstAndLast;
      // }
    };

    const handleRightClick = () => {
      if (currentSlide < maxSlide) {
        currentSlide++;
        currentTranslate -= translateAmount;
        setCurrentSlideState((prev) => (prev < maxSlide ? prev + 1 : prev));
      }
      imageContainerRef!.current!.style.transform = `translateX(${currentTranslate}vw)`;

      // looping images
      // if (currentSlide < maxSlide) {
      //   currentSlide++;
      //   if (currentSlide === 2 || currentSlide === 8) {
      //     currentTranslate -= translateAmountForFirstAndLast;
      //   } else {
      //     currentTranslate -= translateAmount;
      //   }
      // } else {
      //   currentSlide = 1;
      //   currentTranslate = translateAmountForFirstAndLast - 1;
      // }
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY <= minScrollPosition) {
        activeImageRef!.current!.style.borderRadius = `0`;
      }

      if (scrollY > minScrollPosition && scrollY < maxScrollPosition) {
        // calculate new width percentage based on scroll position
        const newValues = (scrollY - minScrollPosition) / 11;

        // set new width and height for active image
        activeImageRef!.current!.style.width = `${100 - newValues}vw`;
        activeImageRef!.current!.style.height = `${100 - newValues}vh`;
        activeImageRef!.current!.style.borderRadius = "1rem";

        heroContainerRef!.current!.style.marginTop = `${
          newValues / marginTopPercent
        }%`;
      }

      if (scrollY >= maxScrollPosition) {
        // set new width and height for active image
        activeImageRef!.current!.style.width = `${49}vw`;
        activeImageRef!.current!.style.height = `${49}vh`;

        imageContainerRef!.current!.childNodes.forEach((child: any) => {
          if (child !== activeImageRef!.current!) {
            child.style.opacity = "1";
            child.style.transition = "opacity 0.5s ease";
          }
        });

        firstLineContainerRef!.current!.style.opacity = "1";
        secondLineContainerRef!.current!.style.opacity = "1";
        leftClickRef!.current!.style.opacity = "1";
        rightClickRef!.current!.style.opacity = "1";
      } else {
        // set new width and height for other images
        imageContainerRef!.current!.childNodes.forEach((child: any) => {
          if (child !== activeImageRef!.current!) {
            child.style.opacity = "0";
            child.style.transition = "none";
            child.style.width = `${49}vw`;
            child.style.height = `${49}vh`;
          }
        });

        firstLineContainerRef!.current!.style.opacity = "0";
        secondLineContainerRef!.current!.style.opacity = "0";
        leftClickRef!.current!.style.opacity = "0";
        rightClickRef!.current!.style.opacity = "0";
      }
    };

    const handleResize = () => {
      if (window.innerWidth < 768) {
        minScrollPosition = 2520;
        maxScrollPosition = 3070;
      } else {
        minScrollPosition = 1800;
        maxScrollPosition = 2350;
      }

      if (window.innerWidth < 768) {
        marginTopPercent = 0.35;
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        marginTopPercent = 0.7;
      } else if (window.innerWidth >= 1024 && window.innerWidth < 1440) {
        marginTopPercent = 0.9;
      } else {
        marginTopPercent = 1.2;
      }
    };

    leftClickRef!.current!.addEventListener("click", handleLeftClick);
    rightClickRef!.current!.addEventListener("click", handleRightClick);
    document.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      leftClickRef!.current!.removeEventListener("click", handleLeftClick);
      rightClickRef!.current!.removeEventListener("click", handleRightClick);
      document.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.gallery}>
      <div ref={heroContainerRef} className={styles.heroContainer}>
        <div ref={imageContainerRef} className={styles.imageContainer}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
            // eslint-disable-next-line @next/next/no-img-element
            <div
              ref={currentSlideState === item ? activeImageRef : null}
              className={item === currentSlideState ? styles.active : ""}
              key={index}
              style={{
                background: `url("/images/image-${item}.jpeg") no-repeat center center/cover`,
              }}
            ></div>
          ))}
        </div>

        <span ref={leftClickRef}>
          <ChevronLeftIcon className={styles.leftIcon} />
        </span>
        <span ref={rightClickRef}>
          <ChevronRightIcon className={styles.rightIcon} />
        </span>
      </div>

      <div ref={firstLineContainerRef} className={styles.firstLineContainer}>
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
      <div ref={secondLineContainerRef} className={styles.secondLineContainer}>
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
