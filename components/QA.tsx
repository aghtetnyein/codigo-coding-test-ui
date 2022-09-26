import { useState } from "react";

// scss
import styles from "../styles/QA.module.scss";

const QA = () => {
  const [toggle0, setToggle0] = useState(false);
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);
  const [toggle5, setToggle5] = useState(false);
  const [toggle6, setToggle6] = useState(false);

  const inquire = (i: number) => {
    switch (i) {
      case 0:
        setToggle0(!toggle0);
        break;
      case 1:
        setToggle1(!toggle1);
        break;
      case 2:
        setToggle2(!toggle2);
        break;
      case 3:
        setToggle3(!toggle3);
        break;
      case 4:
        setToggle4(!toggle4);
        break;
      case 5:
        setToggle5(!toggle5);
        break;
      case 6:
        setToggle6(!toggle6);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className={styles.qa}>
        <header>Questions? Answers.</header>
        <div className={styles.answers}>
          <button type="button" onClick={() => inquire(0)}>
            <p className={styles.q}>What is Apple TV+</p>
          </button>
          <p
            className={styles.a}
            style={toggle0 ? { display: "block" } : { display: "none" }}
          >
            Apple TV+ is a streaming service featuring Apple Originals —
            award-winning series, compelling dramas, groundbreaking
            documentaries, kids&apos; entertainment, comedies, and more — with
            new Apple Originals added every month.
          </p>
          <hr />
          <br />
          <button type="button" onClick={() => inquire(1)}>
            <p className={styles.q}>How can I watch it?</p>
          </button>
          <p
            className={styles.a}
            style={toggle1 ? { display: "block" } : { display: "none" }}
          >
            Watch Apple TV+ on the Apple TV app, which is already on your
            favorite Apple devices. Just open the app, click or tap Apple TV+,
            and enjoy the shows and movies. You can also watch Apple TV+ on
            streaming platforms, popular smart TVs, and AirPlay-enabled TVs with
            the Apple TV app — or watch online at tv.apple.com.
          </p>
          <hr />
          <br />
          <button type="button" onClick={() => inquire(2)}>
            <p className={styles.q}>What does it cost?</p>
          </button>
          <p
            className={styles.a}
            style={toggle2 ? { display: "block" } : { display: "none" }}
          >
            That all depends on which offer you choose.
            <br /> (1) If you buy an Apple device, Apple TV+ is included free
            for 3 months.1
            <br /> (2) A monthly subscription is just $4.99 per month after a
            free seven-day trial.2
            <br /> (3) Apple TV+ is included in Apple One, which bundles up to
            five other Apple services into a single monthly subscription. Apple
            One plans start at $14.95 per month.
            <br /> (4) The Apple Music Student Plan comes with a free
            subscription to Apple TV+.3
          </p>
          <hr />
          <br />
          <button type="button" onClick={() => inquire(3)}>
            <p className={styles.q}>Can I share with my family?</p>
          </button>
          <p
            className={styles.a}
            style={toggle3 ? { display: "block" } : { display: "none" }}
          >
            Of course. Apple TV+ lets you share your subscription with up to
            five family members.
          </p>
          <hr />
          <br />
          <button type="button" onClick={() => inquire(4)}>
            <p className={styles.q}>
              Are there commercials? And can I watch it on demand?
            </p>
          </button>
          <p
            className={styles.a}
            style={toggle4 ? { display: "block" } : { display: "none" }}
          >
            Apple Originals are always commercial-free. Some shows release all
            episodes at once. Other shows add new episodes every Friday. You can
            then watch them on demand anytime, anywhere.
          </p>
          <hr />
          <br />
          <button type="button" onClick={() => inquire(5)}>
            <p className={styles.q}>Do I need an Apple TV 4k</p>
          </button>
          <p
            className={styles.a}
            style={toggle5 ? { display: "block" } : { display: "none" }}
          >
            No, you don’t. While Apple TV 4K — with 4K HDR and Dolby Atmos sound
            — is the ultimate way to experience Apple TV+, the original shows
            and movies on Apple TV+ are always available on the Apple TV app on
            your favorite devices.
          </p>
          <hr />
          <br />
          <button type="button" onClick={() => inquire(6)}>
            <p className={styles.q}>Can I download to watch offline?</p>
          </button>
          <p
            className={styles.a}
            style={toggle6 ? { display: "block" } : { display: "none" }}
          >
            Absolutely. Download your favorite Apple Originals to your Apple
            device and watch them anywhere, anytime without a Wi-Fi connection.
          </p>
          <hr />
        </div>
      </div>
    </>
  );
};
export default QA;
