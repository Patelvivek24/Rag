import styles from "./page.module.scss";
import { Container } from "react-bootstrap";
import Accordion from "../../../components/ui/Accordion";

export default function TermsOfService() {
  return (
    <div className={styles.termsOfService}>
      <Container>
        <div className={styles.header}>
          <h1 className={styles.title}>Terms of Service</h1>
          <p className={styles.lastUpdated}>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <div className={styles.sectionCard}>
              <h2 className={styles.sectionTitle}>1. Acceptance of Terms</h2>
              <p className={styles.paragraph} style={{ marginBottom: '0' }}>
                Welcome to RAG Studio ("we," "our," or "us"). These Terms of Service ("Terms") govern your use of our RAG (Retrieval-Augmented Generation) AI platform and related services. By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services. Our platform enables businesses to build AI-powered solutions by connecting their data sources, selecting AI models, and deploying scalable AI applications with enterprise-grade security.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionCard}>
              <h2 className={styles.sectionTitle}>2. Description of Service</h2>

              <Accordion
                items={[
                  {
                    id: "2.1",
                    title: "2.1 Platform Overview",
                    content: (
                      <>
                        <p>
                          RAG Studio provides a comprehensive AI platform that includes:
                        </p>
                        <ul>
                          <li><strong>Data Integration:</strong> Connect and manage various data sources including documents, databases, and web content</li>
                          <li><strong>AI Model Management:</strong> Access to multiple AI models and the ability to deploy custom configurations</li>
                          <li><strong>Application Development:</strong> Tools to build, test, and deploy AI-powered applications</li>
                          <li><strong>Enterprise Features:</strong> Security controls, user management, and compliance tools</li>
                        </ul>
                      </>
                    )
                  },
                  {
                    id: "2.2",
                    title: "2.2 Service Availability",
                    content: (
                      <ul>
                        <li>We strive to maintain high service availability but do not guarantee uninterrupted access</li>
                        <li>Scheduled maintenance will be announced in advance when possible</li>
                        <li>We reserve the right to modify or discontinue features with reasonable notice</li>
                        <li>Service levels may vary based on your subscription plan</li>
                      </ul>
                    )
                  },
                  {
                    id: "2.3",
                    title: "2.3 Third-Party Integrations",
                    content: (
                      <>
                        <p>
                          Our platform may integrate with third-party services and APIs:
                        </p>
                        <ul>
                          <li>Third-party services are subject to their own terms and conditions</li>
                          <li>We are not responsible for third-party service availability or performance</li>
                          <li>Data shared with third parties is subject to their privacy policies</li>
                          <li>You are responsible for ensuring compliance with third-party terms</li>
                        </ul>
                      </>
                    )
                  }
                ]}
                allowMultiple={true}
                defaultOpenItems={[]}
              />
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionCard}>
              <h2 className={styles.sectionTitle}>3. User Accounts and Registration</h2>

              <Accordion
                items={[
                  {
                    id: "3.1",
                    title: "3.1 Account Creation",
                    content: (
                      <ul>
                        <li>You must provide accurate and complete information during registration</li>
                        <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                        <li>You must be at least 18 years old or have parental consent to create an account</li>
                        <li>One person or entity may not maintain multiple accounts without permission</li>
                      </ul>
                    )
                  },
                  {
                    id: "3.2",
                    title: "3.2 Account Security",
                    content: (
                      <ul>
                        <li>You are responsible for all activities that occur under your account</li>
                        <li>Notify us immediately of any unauthorized use of your account</li>
                        <li>We recommend using strong passwords and enabling two-factor authentication</li>
                        <li>We may suspend accounts that show signs of compromise or abuse</li>
                      </ul>
                    )
                  },
                  {
                    id: "3.3",
                    title: "3.3 Account Termination",
                    content: (
                      <ul>
                        <li>You may terminate your account at any time through your account settings</li>
                        <li>We may terminate accounts that violate these Terms</li>
                        <li>Upon termination, your access to the service will cease immediately</li>
                        <li>Data retention policies apply as outlined in our Privacy Policy</li>
                      </ul>
                    )
                  }
                ]}
                allowMultiple={true}
                defaultOpenItems={[]}
              />
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionCard}>
              <h2 className={styles.sectionTitle}>4. Acceptable Use Policy</h2>

              <Accordion
                items={[
                  {
                    id: "4.1",
                    title: "4.1 Permitted Uses",
                    content: (
                      <>
                        <p>
                          You may use our services for lawful business purposes including:
                        </p>
                        <ul>
                          <li>Building and deploying AI applications for your organization</li>
                          <li>Processing and analyzing your own data and content</li>
                          <li>Integrating with your existing business systems and workflows</li>
                          <li>Developing custom AI solutions for legitimate business needs</li>
                        </ul>
                      </>
                    )
                  },
                  {
                    id: "4.2",
                    title: "4.2 Prohibited Activities",
                    content: (
                      <>
                        <p>
                          You may not use our services for:
                        </p>
                        <ul>
                          <li>Illegal activities or content that violates applicable laws</li>
                          <li>Generating harmful, offensive, or discriminatory content</li>
                          <li>Attempting to reverse engineer or compromise our systems</li>
                          <li>Violating intellectual property rights of others</li>
                          <li>Spam, phishing, or other malicious activities</li>
                          <li>Activities that could harm or disrupt our services</li>
                        </ul>
                      </>
                    )
                  },
                  {
                    id: "4.3",
                    title: "4.3 Content Responsibility",
                    content: (
                      <ul>
                        <li>You are solely responsible for the content you upload and process</li>
                        <li>Ensure you have proper rights to all content you use with our services</li>
                        <li>Comply with all applicable laws and regulations regarding your content</li>
                        <li>We may remove content that violates these Terms or applicable laws</li>
                      </ul>
                    )
                  }
                ]}
                allowMultiple={true}
                defaultOpenItems={[]}
              />
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionCard}>
              <h2 className={styles.sectionTitle}>5. Intellectual Property Rights</h2>

              <p className={styles.paragraph}>
                Our platform and services are protected by intellectual property laws. The following outlines the ownership and usage rights:
              </p>

              <Accordion
                items={[
                  {
                    id: "5.1",
                    title: "5.1 Our Intellectual Property",
                    content: (
                      <>
                        <p>
                          RAG Studio owns all rights, title, and interest in:
                        </p>
                        <ul>
                          <li>The platform software, algorithms, and underlying technology</li>
                          <li>Our trademarks, logos, and brand elements</li>
                          <li>Documentation, training materials, and support content</li>
                          <li>Any improvements or modifications to our services</li>
                        </ul>
                      </>
                    )
                  },
                  {
                    id: "5.2",
                    title: "5.2 Your Content and Data",
                    content: (
                      <>
                        <p>
                          You retain ownership of:
                        </p>
                        <ul>
                          <li>Your original content, data, and intellectual property</li>
                          <li>Custom applications and configurations you create</li>
                          <li>Business processes and methodologies you develop</li>
                          <li>Any modifications you make to your own content</li>
                        </ul>
                      </>
                    )
                  },
                  {
                    id: "5.3",
                    title: "5.3 License Grants",
                    content: (
                      <>
                        <p>
                          By using our services, you grant us:
                        </p>
                        <ul>
                          <li>A limited license to process your data to provide our services</li>
                          <li>Permission to use anonymized, aggregated data for service improvement</li>
                          <li>The right to display your company name as a customer (with permission)</li>
                        </ul>
                      </>
                    )
                  }
                ]}
                allowMultiple={true}
                defaultOpenItems={[]}
              />
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionCard}>
              <h2 className={styles.sectionTitle}>6. Payment Terms and Billing</h2>

              <Accordion
                items={[
                  {
                    id: "6.1",
                    title: "6.1 Subscription Plans",
                    content: (
                      <>
                        <p>
                          We offer various subscription plans with different features and usage limits:
                        </p>
                        <ul>
                          <li>Pricing is based on usage, features, and support levels</li>
                          <li>Plans may include free tiers, paid subscriptions, and enterprise options</li>
                          <li>All prices are subject to change with 30 days' notice</li>
                          <li>Billing cycles are typically monthly or annually</li>
                        </ul>
                      </>
                    )
                  },
                  {
                    id: "6.2",
                    title: "6.2 Payment and Billing",
                    content: (
                      <ul>
                        <li>Payment is due in advance for subscription services</li>
                        <li>We accept major credit cards and other payment methods as available</li>
                        <li>Failed payments may result in service suspension</li>
                        <li>All fees are non-refundable unless otherwise specified</li>
                      </ul>
                    )
                  },
                  {
                    id: "6.3",
                    title: "6.3 Usage Limits and Overages",
                    content: (
                      <ul>
                        <li>Subscription plans include specific usage limits</li>
                        <li>Overage charges may apply for usage beyond plan limits</li>
                        <li>We will notify you before applying overage charges</li>
                        <li>You can upgrade your plan at any time to avoid overages</li>
                      </ul>
                    )
                  }
                ]}
                allowMultiple={true}
                defaultOpenItems={[]}
              />
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionCard}>
              <h2 className={styles.sectionTitle}>7. Data Protection and Privacy</h2>
              <p className={styles.paragraph}>
                We are committed to protecting your data and privacy. Our data practices are governed by our Privacy Policy, which includes:
              </p>
              <ul className={styles.list}>
                <li>Enterprise-grade security measures and encryption</li>
                <li>Data processing only for authorized purposes</li>
                <li>Your rights to access, modify, and delete your data</li>
                <li>Compliance with applicable data protection regulations</li>
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionCard}>
              <h2 className={styles.sectionTitle}>8. Service Level Agreement</h2>
              <p className={styles.paragraph} style={{ marginBottom: '0' }}>
                We strive to provide reliable service with the following commitments: 99.9% uptime for paid plans, 24/7 monitoring, and prompt response to critical issues. Service credits may be available for qualifying downtime events as outlined in your specific SLA.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionCard}>
              <h2 className={styles.sectionTitle}>9. Limitation of Liability</h2>
              <p className={styles.paragraph}>
                To the maximum extent permitted by law, RAG Studio shall not be liable for any indirect, incidental, special, or consequential damages. Our total liability shall not exceed the amount you paid for the services in the 12 months preceding the claim. This limitation applies regardless of the legal theory and even if we have been advised of the possibility of such damages.
              </p>
              <ul className={styles.list}>
                <li>We provide services "as is" without warranties of any kind</li>
                <li>You assume all risks associated with using our services</li>
                <li>We are not responsible for third-party integrations or services</li>
                <li>Force majeure events may affect service availability</li>
              </ul>
              <p className={styles.paragraph} style={{ marginBottom: '0' , marginTop: '20px' }}>
                Some jurisdictions do not allow the exclusion of certain warranties or limitations of liability, so the above limitations may not apply to you.
              </p>
            </div>
          </section>

          <section className={styles.section} style={{ marginBottom: '0' }}>
            <div className={styles.sectionCard}>
              <h2 className={styles.sectionTitle}>10. Contact Information</h2>
              <p className={styles.paragraph}>
                If you have any questions, concerns, or requests regarding these Terms of Service, please contact us:
              </p>
              <div className={styles.contactInfo}>
                <p><strong>RAG Studio</strong></p>
                <p>Email: legal@ragstudio.com</p>
                <p>Website: <a href="/contact" className={styles.contactLink}>Contact Us</a></p>
              </div>
              <p className={styles.paragraph} style={{ marginBottom: '0' }}>
                For legal inquiries, you may also contact our legal team at legal@ragstudio.com.
              </p>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
