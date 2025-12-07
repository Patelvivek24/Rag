import styles from "./use-cases.module.scss";
import Image from "next/image";
import { Icon } from "@iconify/react";

const UseCases = () => {
  const sections = [
    {
      id: "Healthcare",
      icon: "mdi:heart",
      title: "Healthcare",
      desc: "Automate appointment scheduling, symptom checks, and health education to boost patient engagement and streamline care delivery.",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      position: "top-left",
      image: "/image/jpg/Healthcare.jpeg",
    },
    {
      id: "Legal ",
      icon: "mdi:shield-check",
      title: "Legal",
      desc: "Offer instant legal help by answering FAQs and guiding clients through documents, providing 24/7 support for easier access to justice.",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      position: "top-right",
      image: "/image/jpg/Legal.jpeg",
    },
    {
      id: "Financial Services",
      icon: "mdi:currency-usd",
      title: "Financial Services",
      desc: "Provide real-time account updates, transaction assistance, and tailored financial advice via a secure, compliant chatbot for banks, insurance, and investments.",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      position: "bottom-left",
      image: "/image/jpg/Financial-Services.jpeg",
    },
    {
      id: "Ecom",
      icon: "mdi:cart",
      title: "Ecom",
      desc: "Increase sales and customer satisfaction with a smart chatbot that supports product discovery, order tracking, and personalized recommendations anytime.",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      position: "bottom-center",
      image: "/image/jpg/Ecom.jpeg",
    },
    {
      id: "chatbot",
      icon: "mdi:chat",
      title: "chatbot",
      desc: "An AI-powered assistant that automates customer interactions, speeds up response times, and delivers personalized service across multiple industries.",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      position: "bottom-right",
      image: "/image/jpg/chatbot.jpeg",
    },
  ];

  const renderSectionContent = (section: any) => {
    // Return dummy image for all sections
    return (
      <div className={styles.dummyImage}>
        <div className={styles.imagePlaceholder}>
          <Image
            src={section.image}
            alt={section.title}
            fill
            className={styles.sectionImage}
          />
        </div>
      </div>
    );
  };

  return (
    <section className={styles.useCasesSection}>
      <div className="container">
        <div className={styles.headerSection} id="use-cases">
          <div className={styles.badge}>
            <span>AI Solutions</span>
          </div>
          <h2 className="section-title">
            Transform your business with
            <span className="highlight"> best-in-class AI tools</span>
          </h2>
          <p className="section-subtitle">
            Discover powerful AI capabilities that automate workflows, enhance productivity, and
            drive innovation across your organization
          </p>
        </div>

        <div className={styles.sectionsGrid}>
          {/* Top Row - 2 cards with 50% each */}
          {sections.slice(0, 2).map((section, index) => (
            <div
              key={section.id}
              className={`${styles.sectionCard} ${styles[section.position]}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.cardRow}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIcon}>
                    <Icon icon={section.icon} width="24" height="24" />
                  </div>
                </div>

                <h3 className={styles.sectionTitle}>{section.title}</h3>
                <p className={styles.sectionDesc}>{section.desc}</p>
              </div>
              <div className={styles.sectionContent}>{renderSectionContent(section)}</div>

              <div className={styles.sectionGlow} style={{ background: section.gradient }}></div>
            </div>
          ))}

          {/* Bottom Row - 3 equal cards */}
          <div className={styles.bottomRow}>
            {sections.slice(2).map((section, index) => (
              <div
                key={section.id}
                className={`${styles.sectionCard} ${styles[section.position]}`}
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                <div className={styles.cardRow}>
                  <div className={styles.sectionHeader}>
                    <div className={styles.sectionIcon}>
                      <Icon icon={section.icon} width="24" height="24" />
                    </div>
                  </div>

                  <h3 className={styles.sectionTitle}>{section.title}</h3>
                  <p className={styles.sectionDesc}>{section.desc}</p>
                </div>
                <div className={styles.sectionContent}>{renderSectionContent(section)}</div>

                <div className={styles.sectionGlow} style={{ background: section.gradient }}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
