"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";
import styles from "./faq.module.scss";

const FAQSection = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What is RAG?",
      answer: "RAG stands for Retrieval-Augmented Generation. It's a way to combine powerful AI language models with real-time access to your own data, reducing AI hallucinations and delivering precise, context-aware responses."
    },
    {
      question: "Why does RAG matter?",
      answer: "Because traditional AI often guesses or hallucinates answers. RAG ensures your AI applications base outputs on verified, up-to-date data crucial for accuracy, trust, and compliance in real-world use."
    },
    {
      question: "How secure is my data with your platform?",
      answer: "Security is foundational. We provide enterprise-grade protections including data encryption at rest and in transit, role-based access control, audit logs, and SSO integration. You retain full control over your data environment."
    },
    {
      question: "Which AI models do you support?",
      answer: "Our platform is model-agnostic. Use popular LLMs like OpenAI, Claude ai, or your own custom-trained models. Switch between models anytime without vendor lock-in."
    },
    {
      question: "What support do early users get?",
      answer: "Founding users receive priority access to our engineering team, direct Slack support, and influence on feature priorities and the product roadmap."
    },
    {
      question: "How fast can I get started?",
      answer: "You can connect your data and deploy a RAG application in minutes using our streamlined UI or APIs—no complex setup or lengthy onboarding required."
    }
  ];

  return (
    <section className={styles.faqSection} id="faq">
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

      <div className={styles.container}>
        <div className={styles.faqLayout}>
          {/* Left Panel - Introduction */}
          <div className={styles.leftPanel}>
            <div className={styles.introContent}>
              <h2 className="section-title">
                Frequently
                <br />
                asked questions
              </h2>
              <p className="section-subtitle">
                Have more questions? Reach out to our sales team for assistance.
              </p>
              <div style={{ marginTop: '18px' }}>
                <a href="#contact" className={styles.primaryButton}>
                  <span>Contact sales</span>
                  <div className={styles.buttonIcon}>
                    <Icon icon="mdi:chevron-right" width="16" height="16" />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Panel - FAQ Items */}
          <div className={styles.rightPanel}>
            <div className={styles.faqList}>
              {faqData.map((faq, index) => (
                <div key={index} className={styles.faqItem}>
                  <button
                    className={`${styles.faqQuestion} ${expandedFaq === index ? styles.expanded : ""}`}
                    onClick={() => toggleFaq(index)}
                    aria-expanded={expandedFaq === index}
                  >
                    <span className={styles.questionText}>{faq.question}</span>
                    <div className={styles.faqIcon}>
                      <Icon 
                        icon="mdi:chevron-down" 
                        width="20" 
                        height="20"
                        style={{ 
                          transform: expandedFaq === index ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s ease'
                        }}
                      />
                    </div>
                  </button>
                  <div className={`${styles.faqAnswer} ${expandedFaq === index ? styles.show : ""}`}>
                    <div className={styles.answerContent}>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                  {index < faqData.length - 1 && <div className={styles.divider} />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
