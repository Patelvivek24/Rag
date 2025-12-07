"use client";
import { motion } from "framer-motion";
import HeroSection from "@/components/pages/home/hero-section";
import DescriptionOverview from "@/components/pages/home/description-overview";
import FeaturesSection from "@/components/pages/home/features-section";
import HowItWorks from "@/components/pages/home/how-it-works";
import UseCases from "@/components/pages/home/use-cases";
import N8nFlowCTA from "@/components/pages/home/n8n-flow-cta";
import CTASection from "@/components/pages/home/cta-section";
import FAQSection from "@/components/pages/home/faq-section";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Home() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={sectionVariants}>
        <HeroSection />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <DescriptionOverview />
      </motion.div>
      <HowItWorks />
      <FeaturesSection />
      <motion.div variants={sectionVariants}>
        <UseCases />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <N8nFlowCTA />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <FAQSection />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <CTASection />
      </motion.div>
    </motion.div>
  );
}
