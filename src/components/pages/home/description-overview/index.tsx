"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import styles from "./description-overview.module.scss";

const DescriptionOverview = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isLoading) return;

    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    setIsLoading(false);
    setEmail("");

    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className={styles.overview}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* <h1 className={styles.title}>
            <span className={styles.titleLine}>
              <span className={styles.typingText}>Stop Guesswork.</span>
            </span>
            <span className={styles.titleLine}>
              <span className={styles.gradientText}>Build AI That Knows.</span>
            </span>
          </span>
          </h1> */}

          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Transform your 
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {" "}business with best <span className="highlight"> AI tools</span>
            </motion.p>
          </motion.h2>

          {/* <p className="section-subtitle">
            Join the waitlist for instant access to the next-gen RAG platform
            <br />
            no more hallucinations, full data control, and enterprise-grade security.
          </p> */}

          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Join the waitlist for instant access to the next-gen RAG platform no more hallucinations, full data control, and enterprise-grade security.
          </motion.p>


          {/* Early Access Card */}
          <motion.div 
            className={styles.wishlistCard}
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div 
              className={styles.wishlistGlow}
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.7, 0.5]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <div className={styles.wishlistContent}>
              <motion.div 
                className={styles.wishlistHeader}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <motion.div 
                  className={styles.wishlistIconContainer}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.6,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  <motion.div 
                    className={styles.wishlistIcon}
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  >
                    <Icon icon="mdi:target" width="28" height="28" />
                  </motion.div>
                  <div className={styles.iconRing} />
                  <div className={styles.iconRing2} />
                </motion.div>
                <motion.h3 
                  className={styles.wishlistTitle}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <span className={styles.titleGradient}>Get Early Access</span>
                </motion.h3>
                <motion.p 
                  className={styles.wishlistSubtitle}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  Early access. Limited founder slots. Exclusive community.
                </motion.p>
              </motion.div>

              {!isSubmitted ? (
                <motion.div 
                  className={styles.wishlistForm}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <motion.div 
                    className={styles.inputGroup}
                  >
                    <Link
                      href="/contact"
                      className={styles.submitButton}
                    >
                      <span>Join Waitlist</span>
                      <motion.div 
                        className={styles.buttonArrow}
                        animate={{ x: [0, 5, 0] }}
                        transition={{ 
                          duration: 1.5,
                          repeat: Infinity,
                          repeatDelay: 1
                        }}
                      >
                        <Icon icon="mdi:arrow-right" width="16" height="16" />
                      </motion.div>
                    </Link>
                  </motion.div>
                  <motion.div 
                    className={styles.wishlistNote}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1 }}
                  >
                    <div className={styles.privacyIcon}>
                      <Icon icon="mdi:lock" width="16" height="16" />
                    </div>
                    <span>We respect your privacy. No spam, ever.</span>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div 
                  className={styles.successMessage}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  <motion.div 
                    className={styles.successIconContainer}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 0.6,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    <motion.div 
                      className={styles.successIcon}
                      animate={{ 
                        scale: [1, 1.2, 1],
                      }}
                      transition={{ 
                        duration: 0.6,
                        delay: 0.3
                      }}
                    >
                      <Icon icon="mdi:check-circle" width="36" height="36" />
                    </motion.div>
                    <div className={styles.successRing} />
                  </motion.div>
                  <motion.h4
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    You&apos;re on the list!
                  </motion.h4>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    Welcome to the future! We&apos;ll notify you as soon as we launch with exclusive
                    early access.
                  </motion.p>
                  <motion.div 
                    className={styles.successBadge}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span>
                      <Icon icon="mdi:party-popper" width="16" height="16" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '4px' }} />
                      Early Access Granted
                    </span>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DescriptionOverview;
