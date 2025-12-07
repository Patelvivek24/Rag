import styles from "./how.module.scss";
import { Icon } from "@iconify/react";

const HowItWorks = () => {
  return (
    <section className={styles.howSection}>
      {/* Animated background elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.floatingOrb}></div>
        <div className={styles.floatingOrb2}></div>
        <div className={styles.floatingOrb3}></div>
        <div className={styles.gridPattern}></div>
        <div className={styles.gradientOverlay}></div>
      </div>

      <div className="container">
        <div className={styles.headerSection} id="workflow">
          <div className={styles.badge}>
            <span className={styles.badgeText}>Simple Process</span>
          </div>
          <h2 className="section-title">
            Transform Your Data into
            <span className="highlight"> Intelligent Insights</span>
          </h2>
          <p className="section-subtitle">
            Our streamlined process makes AI implementation effortless. From data connection to
            deployment, we handle the complexity so you can focus on results.
          </p>
        </div>

        <div className={styles.timelineContainer}>
          <div className={styles.timeline}>
            {/* Step 1 */}
            <div className={styles.timelineStep}>
              <div className={styles.stepContent}>
                <div className={styles.stepNumber}>01</div>
                <div className={styles.stepIcon}>
                  <Icon icon="mdi:layers" width="32" height="32" />
                </div>
                <div className={styles.stepInfo}>
                  <h3 className={styles.stepTitle}>Connect Your Data</h3>
                  <p className={styles.stepDescription}>
                    Seamlessly integrate your files, databases, or web content. Our intelligent
                    system handles data ingestion, processing, and optimization automatically.
                  </p>
                  <div className={styles.stepFeatures}>
                    <span className={styles.feature}>Multiple formats supported</span>
                    <span className={styles.feature}>Real-time processing</span>
                    <span className={styles.feature}>Secure data handling</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className={styles.timelineStep}>
              <div className={styles.stepContent}>
                <div className={styles.stepNumber}>02</div>
                <div className={styles.stepIcon}>
                  <Icon icon="mdi:calendar-check" width="32" height="32" />
                </div>
                <div className={styles.stepInfo}>
                  <h3 className={styles.stepTitle}>Choose Your AI Model</h3>
                  <p className={styles.stepDescription}>
                    Select from our curated collection of state-of-the-art AI models. Switch between
                    models anytime without any vendor lock-in or migration hassles.
                  </p>
                  <div className={styles.stepFeatures}>
                    <span className={styles.feature}>Multiple AI models</span>
                    <span className={styles.feature}>Easy model switching</span>
                    <span className={styles.feature}>Performance optimization</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className={styles.timelineStep}>
              <div className={styles.stepContent}>
                <div className={styles.stepNumber}>03</div>
                <div className={styles.stepIcon}>
                  <Icon icon="mdi:rocket-launch" width="32" height="32" />
                </div>
                <div className={styles.stepInfo}>
                  <h3 className={styles.stepTitle}>Deploy & Scale</h3>
                  <p className={styles.stepDescription}>
                    Launch your AI solution in minutes with enterprise-grade infrastructure. Scale
                    automatically as your needs grow with zero downtime.
                  </p>
                  <div className={styles.stepFeatures}>
                    <span className={styles.feature}>Instant deployment</span>
                    <span className={styles.feature}>Auto-scaling</span>
                    <span className={styles.feature}>Enterprise security</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
