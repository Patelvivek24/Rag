export interface Feature {
  slug: string;
  icon: string;
  title: string;
  description: string;
  gradient: string;
  delay: string;
  longDescription?: string;
  benefits?: string[];
  useCases?: string[];
}

export const features: Feature[] = [
  {
    slug: "connect-any-data-source",
    icon: "mdi:link-variant",
    title: "Connect Any Data Source",
    description:
      "Bring files, URLs, databases, and more. We handle chunking, embeddings, and storage.",
    gradient: "linear-gradient(135deg, #5da8ff 0%, #4a9eff 100%)",
    delay: "0s",
    longDescription:
      "Seamlessly integrate data from multiple sources into your RAG application. Our platform supports files, URLs, databases, APIs, and more. We automatically handle the complex processes of chunking, generating embeddings, and storing your data efficiently.",
    benefits: [
      "Support for multiple data formats (PDF, DOCX, CSV, JSON, and more)",
      "Automatic chunking and embedding generation",
      "Real-time data synchronization",
      "Secure data handling and storage",
      "Easy integration with existing data pipelines",
    ],
    useCases: [
      "Document repositories and knowledge bases",
      "Customer support systems",
      "Internal documentation search",
      "Research and analysis platforms",
    ],
  },
  {
    slug: "ai-model-flexibility",
    icon: "mdi:layers",
    title: "AI Model Flexibility",
    description:
      "Works with popular LLM providers and lets you switch anytime without vendor lock-in.",
    gradient: "linear-gradient(135deg, #a66bff 0%, #8f5aff 100%)",
    delay: "0.1s",
    longDescription:
      "Choose from a wide range of AI models and switch between them effortlessly. Our platform is model-agnostic, supporting OpenAI, Claude, and other popular LLM providers. No vendor lock-in means you maintain full control over your AI infrastructure.",
    benefits: [
      "Support for multiple LLM providers (OpenAI, Claude, and more)",
      "Easy model switching without code changes",
      "Cost optimization by choosing the right model for each task",
      "Future-proof architecture",
      "Custom model support",
    ],
    useCases: [
      "Multi-model experimentation",
      "Cost-optimized deployments",
      "Custom AI model integration",
      "Provider redundancy and failover",
    ],
  },
  {
    slug: "developer-friendly-apis",
    icon: "mdi:code-tags",
    title: "Developer-Friendly APIs",
    description: "Clean SDKs and APIs to integrate quickly with your stack and CI/CD workflows.",
    gradient: "linear-gradient(135deg, #ff6b9d 0%, #ff5a8c 100%)",
    delay: "0.2s",
    longDescription:
      "Build faster with our comprehensive SDKs and RESTful APIs. Designed with developers in mind, our APIs are intuitive, well-documented, and integrate seamlessly with your existing tech stack and CI/CD pipelines.",
    benefits: [
      "RESTful APIs with comprehensive documentation",
      "SDKs for popular programming languages",
      "Easy integration with CI/CD workflows",
      "Webhook support for real-time updates",
      "Rate limiting and authentication built-in",
    ],
    useCases: [
      "Custom application development",
      "Microservices architecture",
      "Automated deployment pipelines",
      "Third-party integrations",
    ],
  },
  {
    slug: "deploy-in-minutes",
    icon: "mdi:cloud-upload",
    title: "Deploy in Minutes",
    description:
      "From prototype to production fast with prebuilt flows and infra-friendly defaults.",
    gradient: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
    delay: "0.3s",
    longDescription:
      "Get your RAG application up and running in minutes, not weeks. Our prebuilt flows and infrastructure-friendly defaults eliminate the complexity of deployment, allowing you to focus on building great applications.",
    benefits: [
      "One-click deployment options",
      "Prebuilt templates and workflows",
      "Infrastructure as Code support",
      "Auto-scaling capabilities",
      "Multi-cloud deployment options",
    ],
    useCases: [
      "Rapid prototyping",
      "Production deployments",
      "Multi-environment setups",
      "Scaling applications",
    ],
  },
  {
    slug: "enterprise-security",
    icon: "mdi:shield-lock",
    title: "Enterprise Security",
    description: "Role-based access, audit trails, encryption, and SSO for enterprise needs.",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    delay: "0.4s",
    longDescription:
      "Enterprise-grade security built into every layer of our platform. From role-based access control to comprehensive audit trails, we ensure your data and applications meet the highest security standards.",
    benefits: [
      "Role-based access control (RBAC)",
      "Comprehensive audit logs",
      "End-to-end encryption",
      "Single Sign-On (SSO) support",
      "Compliance with industry standards",
    ],
    useCases: [
      "Enterprise applications",
      "Regulated industries",
      "Multi-tenant environments",
      "Compliance requirements",
    ],
  },
  {
    slug: "analytics-monitoring",
    icon: "mdi:chart-bar",
    title: "Analytics & Monitoring",
    description: "Insights and observability to track usage, performance, and quality.",
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
    delay: "0.5s",
    longDescription:
      "Gain deep insights into your RAG application's performance, usage patterns, and quality metrics. Our comprehensive analytics and monitoring tools help you optimize your application and ensure the best user experience.",
    benefits: [
      "Real-time performance monitoring",
      "Usage analytics and reporting",
      "Quality metrics and feedback loops",
      "Custom dashboards and alerts",
      "Historical data analysis",
    ],
    useCases: [
      "Performance optimization",
      "Usage tracking and billing",
      "Quality assurance",
      "Business intelligence",
    ],
  },
];

export const getFeatureBySlug = (slug: string): Feature | undefined => {
  return features.find((feature) => feature.slug === slug);
};
