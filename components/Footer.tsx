import React from "react";
import Image from "next/image";

// scss
import styles from "../styles/Footer.module.scss";

import {
  shopNLearn,
  services,
  account,
  appleStore,
  forBusiness,
  forEducation,
  forHealthcare,
  forGovernment,
  appleValues,
  aboutApple,
} from "../data";

const Footer = () => {
  return (
    <div className={styles.about}>
      <div>
        * The Apple One free trial includes only services that you are not
        currently using through a free trial or a subscription. Plan
        automatically renews after trial until cancelled. Restrictions and other
        terms apply.
        <br />
        <br />
        1, $4.99/month after free trial. Only one offer per Apple ID and only
        one offer per family if you&apos;re part of a Family Sharing group,
        regardless of the number of devices you or your family purchases. This
        offer is not available if you or your Family have previously accepted an
        Apple TV+ one year free offer. Offer good for 3 months after eligible
        device activation. Plan automatically renews until cancelled.
        Restrictions and other terms apply.
        <br />
        <br />
        2. One subscription per Family Sharing group. Plan automatically renews
        until cancelled.
        <br />
        <br />
        3. Limited-time offer; offer may end at any time. Free Apple TV+ access
        for students ends when you no longer qualify or do not renew your Apple
        Music Student subscription. Offer good for verified college students
        only and does not extend to a Family Sharing group.
      </div>
      <br />
      <hr />
      <div className={styles.breadcrumb}>
        <Image
          src="/icons/apple-brown.svg"
          width={15}
          height={15}
          alt="apple"
        />
        <span>&gt;</span>
        <span>Only on Apple</span>
        <span>&gt;</span>
        <span>Apple TV+</span>
      </div>
      <div className={styles.more}>
        <div>
          <span>Shop and Learn</span>
          {shopNLearn.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <div>
          <span>Services</span>
          {services.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <div>
          <span>Account</span>
          {account.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <div>
          <span>Apple Store</span>
          {appleStore.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <div>
          <span>For Business</span>
          {forBusiness.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <div>
          <span>For Education</span>
          {forEducation.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <div>
          <span>For Healthcare</span>
          {forHealthcare.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <div>
          <span>For Government</span>
          {forGovernment.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <div>
          <span>Apple Values</span>
          {appleValues.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <div>
          <span>About Apple</span>
          {aboutApple.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
      <p>
        More ways to shop :
        <a href="https://www.apple.com/retail/">Find an Apple Store</a> or
        <a href="https://locate.apple.com/"> other retailer </a> near you . Or
        call 1-800 - MY - APPLE .
      </p>
      <br />
      <hr />
      <br />
      <div className={styles.cr}>
        Copyright © 2022 Apple Inc. All rights reserved.
        <div className={styles.us}>
          <div>
            <div className={styles.vl} /> Privacy Policy{" "}
            <div className={styles.vl} /> Terms of Use{" "}
            <div className={styles.vl} /> Sales and Refunds{" "}
            <div className={styles.vl} /> Legal <div className={styles.vl} />{" "}
            Site Map{" "}
          </div>
          <div>
            <p>United States</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
