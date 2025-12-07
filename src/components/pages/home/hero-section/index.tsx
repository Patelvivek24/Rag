"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import styles from "./hero.module.scss";

const HeroSection = () => {
  // Demo animation state
  const [currentStep, setCurrentStep] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState(false);

  // Demo animation sequence
  useEffect(() => {
    const demoSequence = async () => {
      setIsAnimating(true);
      
      // Step 1: Connect Your Data
      setCurrentStep(0);
      await new Promise(resolve => setTimeout(resolve, 5000)); // Increased from 4000ms
      
      // Step 2: Choose Your AI Model
      setCurrentStep(1);
      await new Promise(resolve => setTimeout(resolve, 5000)); // Increased from 4000ms
      
      // Step 3: Deploy & Scale
      setCurrentStep(2);
      await new Promise(resolve => setTimeout(resolve, 5000)); // Increased from 4000ms
      
      // Reset and repeat
      setCurrentStep(0);
      setIsAnimating(false);
    };

    const interval = setInterval(demoSequence, 15000); // Increased from 12000ms
    return () => clearInterval(interval);
  }, []);

  // Cursor animation for each step
  useEffect(() => {
    if (!isAnimating) return;

    const cursorAnimations = [
      // Step 1 cursor positions
      [
        { x: 20, y: 30 }, // Start position
        { x: 60, y: 30 }, // Click on "Connect Your Data"
        { x: 40, y: 50 }, // Hover over data sources
        { x: 80, y: 70 }, // Hover over features
        { x: 50, y: 80 }, // Data flow animation
      ],
      // Step 2 cursor positions
      [
        { x: 20, y: 30 }, // Start position
        { x: 60, y: 30 }, // Click on "Choose Your AI Model"
        { x: 40, y: 50 }, // Hover over model gallery
        { x: 70, y: 60 }, // Click on model switcher
        { x: 50, y: 80 }, // Hover over features
      ],
      // Step 3 cursor positions
      [
        { x: 20, y: 30 }, // Start position
        { x: 60, y: 30 }, // Click on "Deploy & Scale"
        { x: 40, y: 50 }, // Click "Deploy Now"
        { x: 50, y: 70 }, // Progress bar
        { x: 50, y: 80 }, // Success status
      ]
    ];

    const animateCursor = async () => {
      const positions = cursorAnimations[currentStep];
      for (let i = 0; i < positions.length; i++) {
        setCursorPosition(positions[i]);
        await new Promise(resolve => setTimeout(resolve, 1500)); // Increased from 1200ms
      }
    };

    animateCursor();
  }, [currentStep, isAnimating]);

  return (
    <section className={styles.hero} id="waitlist-sec">
      {/* Main content - Full width product visualization */}
      <motion.div 
        className={styles.container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Full Width Product Visualization */}
          <motion.div 
            className={styles.productVisualization}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
              {/* Desktop Frame */}
              <motion.div 
                className={styles.desktopFrame}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.div 
                  className={styles.desktopHeader}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <div className={styles.desktopButtons}>
                    <motion.div 
                      className={styles.desktopButton}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    ></motion.div>
                    <motion.div 
                      className={styles.desktopButton}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    ></motion.div>
                    <motion.div 
                      className={styles.desktopButton}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    ></motion.div>
                  </div>
                  <div className={styles.desktopTitle}>AI Platform Demo</div>
                </motion.div>
                
                <div className={styles.desktopContent}>
                  {/* Step 1: Connect Your Data */}
                  <motion.div 
                    className={`${styles.demoStep} ${styles.step1} ${currentStep === 0 ? styles.active : ''}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: currentStep === 0 ? 1 : 0,
                      x: currentStep === 0 ? 0 : -20
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className={styles.stepHeader}>
                      <div className={styles.stepIcon}>
                        <Icon icon="mdi:link" width="40" height="40" />
                      </div>
                      <h3>Connect Your Data</h3>
                    </div>
                    
                    <div className={styles.dataSources}>
                      <div className={styles.dataSource}>
                        <div className={styles.sourceIcon}>
                          <Icon icon="mdi:folder" width="28" height="28" />
                        </div>
                        <span>Upload Files</span>
                      </div>
                      <div className={styles.dataSource}>
                        <div className={styles.sourceIcon}>
                          <Icon icon="mdi:database" width="28" height="28" />
                        </div>
                        <span>Database</span>
                      </div>
                      <div className={styles.dataSource}>
                        <div className={styles.sourceIcon}>
                          <Icon icon="mdi:web" width="28" height="28" />
                        </div>
                        <span>Web Content</span>
                      </div>
                    </div>
                    
                    <div className={styles.dataFeatures}>
                      <div className={styles.feature}>Multiple formats supported</div>
                      <div className={styles.feature}>Real-time processing</div>
                      <div className={styles.feature}>Secure data handling</div>
                    </div>
                    
                    <div className={styles.dataFlow}>
                      <div className={styles.flowPoint}>
                        <Icon icon="mdi:chart-bar" width="19" height="19" />
                      </div>
                      <div className={styles.flowLine}></div>
                      <div className={styles.flowPoint}>
                        <Icon icon="mdi:lightning-bolt" width="19" height="19" />
                      </div>
                      <div className={styles.flowLine}></div>
                      <div className={styles.flowPoint}>
                        <Icon icon="mdi:lock" width="19" height="19" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Step 2: Choose Your AI Model */}
                  <motion.div 
                    className={`${styles.demoStep} ${styles.step2} ${currentStep === 1 ? styles.active : ''}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: currentStep === 1 ? 1 : 0,
                      x: currentStep === 1 ? 0 : -20
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className={styles.stepHeader}>
                      <div className={styles.stepIcon}>
                        <Icon icon="mdi:brain" width="40" height="40" />
                      </div>
                      <h3>Choose Your AI Model</h3>
                    </div>
                    
                    <div className={styles.modelGallery}>
                      <div className={styles.modelCard}>
                        <div className={styles.modelIcon}>
                          <Icon icon="mdi:chart-line" width="24" height="24" />
                        </div>
                        <span>Predictive Analytics</span>
                      </div>
                      <div className={styles.modelCard}>
                        <div className={styles.modelIcon}>
                          <Icon icon="mdi:chat" width="24" height="24" />
                        </div>
                        <span>Natural Language</span>
                      </div>
                      <div className={styles.modelCard}>
                        <div className={styles.modelIcon}>
                          <Icon icon="mdi:image" width="24" height="24" />
                        </div>
                        <span>Image Recognition</span>
                      </div>
                    </div>
                    
                    <div className={styles.modelFeatures}>
                      <div className={styles.feature}>Multiple AI models</div>
                      <div className={styles.feature}>Performance-optimization</div>
                      <div className={styles.feature}>Easy model switching</div>
                    </div>
                    
                    <div className={styles.modelSwitcher}>
                      <div className={styles.switchButton}>
                        <Icon icon="mdi:chevron-left" width="16" height="16" />
                      </div>
                      <div className={styles.currentModel}>GPT-4</div>
                      <div className={styles.switchButton}>
                        <Icon icon="mdi:chevron-right" width="16" height="16" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Step 3: Deploy & Scale */}
                  <motion.div 
                    className={`${styles.demoStep} ${styles.step3} ${currentStep === 2 ? styles.active : ''}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: currentStep === 2 ? 1 : 0,
                      x: currentStep === 2 ? 0 : -20
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className={styles.stepHeader}>
                      <div className={styles.stepIcon}>
                        <Icon icon="mdi:rocket-launch" width="40" height="40" />
                      </div>
                      <h3>Deploy & Scale</h3>
                    </div>
                    
                    <div className={styles.deploymentOptions}>
                      <div className={styles.deployButton}>Deploy Now</div>
                      <div className={styles.deployButton}>Configure</div>
                    </div>
                    
                    <div className={styles.deploymentFeatures}>
                      <div className={styles.feature}>Instant deployment</div>
                      <div className={styles.feature}>Auto-scaling</div>
                      <div className={styles.feature}>Enterprise security</div>
                    </div>
                    
                    <div className={styles.deploymentProgress}>
                      <div className={styles.progressBar}>
                        <div className={styles.progressFill}></div>
                      </div>
                      <div className={styles.progressText}>Deploying...</div>
                    </div>
                    
                    <div className={styles.deploymentStatus}>
                      <div className={styles.statusIcon}>
                        <Icon icon="mdi:check-circle" width="19" height="19" />
                      </div>
                      <span>Deployed Successfully</span>
                    </div>
                  </motion.div>

                  {/* Cursor Animation */}
                  <motion.div 
                    className={styles.demoCursor}
                    animate={{
                      left: `${cursorPosition.x}%`,
                      top: `${cursorPosition.y}%`
                    }}
                    transition={{ 
                      type: "spring",
                      stiffness: 300,
                      damping: 30
                    }}
                  ></motion.div>
                  
                  {/* Progress Indicator */}
                  <motion.div 
                    className={styles.progressIndicator}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    <motion.div 
                      className={`${styles.progressDot} ${currentStep === 0 ? styles.active : ''}`}
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    ></motion.div>
                    <motion.div 
                      className={`${styles.progressDot} ${currentStep === 1 ? styles.active : ''}`}
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    ></motion.div>
                    <motion.div 
                      className={`${styles.progressDot} ${currentStep === 2 ? styles.active : ''}`}
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    ></motion.div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating Elements have been removed as requested */}
          </motion.div>
        </motion.div>
      </motion.div>

    </section>
  );
};

export default HeroSection;
