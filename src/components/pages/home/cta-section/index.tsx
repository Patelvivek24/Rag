import styles from "./cta-section.module.scss";
import { Icon } from "@iconify/react";

const CTASection = () => {
  return (
    <section className={styles.ctaSection}>
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
      </div>
      
      <div className="container">
        <div className={styles.ctaCard}>
          <div className={styles.bottomGlow}></div>
          <div className={styles.abstractLines}>
            <div className={styles.line + ' ' + styles.line1}></div>
            <div className={styles.line + ' ' + styles.line2}></div>
            <div className={styles.line + ' ' + styles.line3}></div>
            <div className={styles.line + ' ' + styles.line4}></div>
          </div>
          <div className={styles.ctaContent}>
            <h3>Ready to automate your growth?</h3>
            <p>
              AI-powered automation tools to streamline your business operations.
            </p>
            <div className={styles.ctaActions}>
              <a href="/contact" className={styles.primaryButton}>
                <span>Contact For Demo</span>
                <div className={styles.buttonIcon}>
                  <Icon icon="mdi:arrow-right" width="20" height="20" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
