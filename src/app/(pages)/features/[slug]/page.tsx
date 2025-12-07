"use client";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { getFeatureBySlug } from "@/data/features";
import styles from "./page.module.scss";

interface FeatureDetailPageProps {
  params: {
    slug: string;
  };
}

export default function FeatureDetailPage({ params }: FeatureDetailPageProps) {
  const feature = getFeatureBySlug(params.slug);

  if (!feature) {
    notFound();
  }

  return (
    <div className={styles.featureDetailPage}>
      {/* Animated background */}
      <div className={styles.backgroundElements}>
        <div className={styles.floatingOrb} data-speed="0.3" />
        <div className={styles.floatingOrb} data-speed="0.5" />
        <div className={styles.floatingOrb} data-speed="0.7" />
      </div>

      <div className={styles.container}>
        {/* Back Button */}
        <Link href="/#features" className={styles.backButton}>
          <Icon icon="mdi:arrow-left" width="20" height="20" />
          <span>Back to Features</span>
        </Link>

        {/* Header Section */}
        <div className={styles.header}>
          <div className={styles.iconContainer} style={{ background: feature.gradient }}>
            <div className={styles.iconWrapper}>
              <Icon icon={feature.icon} width="48" height="48" />
            </div>
            <div className={styles.iconGlow} />
          </div>

          <div className={styles.badge}>
            <span>Feature Detail</span>
          </div>

          <h1 className={styles.title}>{feature.title}</h1>
          <p className={styles.subtitle}>{feature.description}</p>
        </div>

        {/* Content Section */}
        <div className={styles.content}>
          {feature.longDescription && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Overview</h2>
              <p className={styles.sectionText}>{feature.longDescription}</p>
            </div>
          )}

          {feature.benefits && feature.benefits.length > 0 && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Benefits</h2>
              <ul className={styles.benefitsList}>
                {feature.benefits.map((benefit, index) => (
                  <li key={index} className={styles.benefitItem}>
                    <Icon icon="mdi:check-circle" className={styles.checkIcon} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {feature.useCases && feature.useCases.length > 0 && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Use Cases</h2>
              <div className={styles.useCasesGrid}>
                {feature.useCases.map((useCase, index) => (
                  <div key={index} className={styles.useCaseCard}>
                    <Icon icon="mdi:lightbulb-on" className={styles.useCaseIcon} />
                    <span>{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>Ready to get started?</h2>
            <p className={styles.ctaText}>
              Experience the power of {feature.title.toLowerCase()} in your RAG application.
            </p>
            <Link href="/contact" className={styles.ctaButton}>
              Join Waitlist
              <Icon icon="mdi:arrow-right" width="20" height="20" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
