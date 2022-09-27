import React, { useState } from "react";

// scss
import styles from "../styles/QA.module.scss";

// data
import { QAData } from "../data";

// icons
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

interface IQAElementProps {
  item: { question: string; answer: string };
}

const QAElement = ({ item }: IQAElementProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.answer}>
      <button type="button" onClick={() => setIsOpen((prev) => !prev)}>
        <p className={styles.q}>{item.question}</p>
        {isOpen ? (
          <ChevronUpIcon className={styles.icon} />
        ) : (
          <ChevronDownIcon className={styles.icon} />
        )}
      </button>
      <p
        className={styles.a}
        style={isOpen ? { display: "block" } : { display: "none" }}
      >
        {item.answer}
      </p>
    </div>
  );
};

const QA = () => {
  return (
    <div className={styles.qa}>
      <header>Questions? Answers.</header>
      <div>
        {QAData.map((item, index) => (
          <React.Fragment key={index}>
            <QAElement item={item} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
export default QA;
