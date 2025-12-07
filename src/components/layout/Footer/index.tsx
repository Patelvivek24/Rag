"use client";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import styles from "./Footer.module.scss";
import Logo from "../../../../image/main-logo.png";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer} role="contentinfo">
      {/* Animated background elements */}
      <div className={styles.animatedBackground}>
        <div className={styles.floatingOrbs}>
          <div className={styles.orb + ' ' + styles.orb1}></div>
          <div className={styles.orb + ' ' + styles.orb2}></div>
          <div className={styles.orb + ' ' + styles.orb3}></div>
          <div className={styles.orb + ' ' + styles.orb4}></div>
        </div>
        <div className={styles.geometricShapes}>
          <div className={styles.shape + ' ' + styles.triangle}></div>
          <div className={styles.shape + ' ' + styles.circle}></div>
          <div className={styles.shape + ' ' + styles.square}></div>
        </div>
        <div className={styles.gridPattern}></div>
        <div className={styles.particleField}>
          <div className={styles.particle + ' ' + styles.particle1}></div>
          <div className={styles.particle + ' ' + styles.particle2}></div>
          <div className={styles.particle + ' ' + styles.particle3}></div>
          <div className={styles.particle + ' ' + styles.particle4}></div>
          <div className={styles.particle + ' ' + styles.particle5}></div>
          <div className={styles.particle + ' ' + styles.particle6}></div>
        </div>
        <div className={styles.ragText}>RAG</div>
      </div>

      <div className={styles.container}>
        {/* Main footer content */}
        <div className={styles.mainContent}>
          {/* Brand section */}
          <div className={styles.brandSection}>
            <div className={styles.logoContainer}>
              <Image src={Logo} alt="RAG logo" className={styles.brandLogo} />
            </div>
            <p className={styles.brandDescription}>
              We create digital experiences for forward‑thinking teams using retrieval‑augmented
              AI and modern engineering.
            </p>
            <div className={styles.socialLinks}>
              <a className={styles.socialLink} href="#" aria-label="LinkedIn">
                <Icon icon="mdi:linkedin" width="20" height="20" />
              </a>
              <a className={styles.socialLink} href="#" aria-label="X (Twitter)">
                <Icon icon="mdi:twitter" width="20" height="20" />
              </a>
              <a className={styles.socialLink} href="#" aria-label="YouTube">
                <Icon icon="mdi:youtube" width="20" height="20" />
              </a>
            </div>
          </div>

          {/* Navigation sections */}

          <div className={styles.navSection}>
            <h4 className={styles.sectionTitle}>Support</h4>
            <ul className={styles.navList}>
              <li>
                <Link className={styles.navLink} href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter section */}
          <div className={styles.newsletterSection}>
            <h4 className={styles.sectionTitle}>Stay Updated</h4>
            <p className={styles.newsletterDescription}>
              Get the latest updates on our products and industry insights.
            </p>
            <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.inputGroup}>
                <input
                  className={styles.emailInput}
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email address"
                  required
                />
                <button className={styles.subscribeBtn} type="submit" aria-label="Subscribe">
                  <Icon icon="mdi:send" width="16" height="16" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom section */}
        <div className={styles.bottomSection}>
          <div className={styles.divider} />
          <div className={styles.bottomContent}>
            <div className={styles.copyright}>
              <span>© {year} RAG Studio. All rights reserved.</span>
            </div>
            <div className={styles.legalLinks}>
              <Link className={styles.legalLink} href="/privacy-policy">Privacy Policy</Link>
              <span className={styles.separator}>•</span>
              <Link className={styles.legalLink} href="/terms-of-service">Terms of Service</Link>
              <span className={styles.separator}>•</span>
              <Link className={styles.legalLink} href="#cookies">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
