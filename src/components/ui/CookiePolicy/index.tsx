"use client";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import styles from "./CookiePolicy.module.scss";

const COOKIE_ACCEPTANCE_KEY = "cookie-policy-accepted";

const CookiePolicy = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieAccepted = localStorage.getItem(COOKIE_ACCEPTANCE_KEY);
    
    if (!cookieAccepted) {
      // Show popup after a small delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setIsAccepted(true);
    }
  }, []);

  // Prevent body scroll when popup is visible
  useEffect(() => {
    if (isVisible && !isAccepted) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible, isAccepted]);

  const handleAccept = () => {
    // Store acceptance in localStorage
    localStorage.setItem(COOKIE_ACCEPTANCE_KEY, "true");
    setIsAccepted(true);
    setIsVisible(false);
    document.body.style.overflow = "";
  };

  // Don't render if already accepted or not visible
  if (isAccepted || !isVisible) {
    return null;
  }

  return (
    <>
      {/* Overlay that blocks interaction with the website */}
      <div className={styles.overlay} />
      
      {/* Cookie Policy Popup */}
      <div className={styles.cookiePopup}>
        <div className={styles.cookieContent}>
          {/* Icon */}
          <div className={styles.cookieIcon}>
            <Icon icon="mdi:cookie" width="48" height="48" />
            <div className={styles.iconGlow} />
          </div>

          {/* Title */}
          <h2 className={styles.cookieTitle}>Cookie Policy</h2>

          {/* Description */}
          <p className={styles.cookieDescription}>
            We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
            By clicking &quot;Accept All Cookies&quot;, you consent to our use of cookies. 
            <Link href="/privacy-policy" className={styles.policyLink}>
              Learn more about our cookie policy
            </Link>
          </p>

          {/* Action Buttons */}
          <div className={styles.cookieActions}>
            <button
              onClick={handleAccept}
              className={styles.acceptButton}
              aria-label="Accept all cookies"
            >
              <span>Accept All Cookies</span>
              <Icon icon="mdi:check-circle" width="20" height="20" />
            </button>
          </div>
        </div>

        {/* Background glow effect */}
        <div className={styles.backgroundGlow} />
      </div>
    </>
  );
};

export default CookiePolicy;
