"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";
import styles from "./page.module.scss";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: "", email: "", subject: "", message: "" });

    // Reset after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className={styles.contactPage}>
      {/* Animated background */}
      <div className={styles.backgroundElements}>
        <div className={styles.floatingOrb} data-speed="0.3" />
        <div className={styles.floatingOrb} data-speed="0.5" />
        <div className={styles.floatingOrb} data-speed="0.7" />
      </div>

      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          <div className={styles.badge}>
            <span>Powerful Features</span>
          </div>
          <h1 className={styles.title}>
            Get in <span className={styles.highlight}> Touch</span>
          </h1>
          <p className={styles.subtitle}>
            Ready to transform your applications with AI-powered retrieval? We'd love to hear from
            you.
          </p>
        </div>

        <div className={styles.content}>
          {/* Contact Information */}
          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <Icon icon="mdi:email" width="32" height="32" />
              </div>
              <h3>Email Us</h3>
              <p>hello@ragplatform.com</p>
              <span>We&apos;ll respond within 24 hours</span>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <Icon icon="mdi:chat" width="32" height="32" />
              </div>
              <h3>Live Chat</h3>
              <p>Available 24/7</p>
              <span>Get instant support</span>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <Icon icon="mdi:phone" width="32" height="32" />
              </div>
              <h3>Call Us</h3>
              <p>+1 (555) 123-4567</p>
              <span>Mon-Fri, 9AM-6PM EST</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className={styles.formSection}>
            {!isSubmitted ? (
              <div className={styles.formCard}>
                <div className={styles.formGlow} />
                <div className={styles.formHeader}>
                  <h2>Send us a Message</h2>
                  <p>Tell us about your project and we'll get back to you</p>
                </div>

                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formRow}>
                    <div className={styles.inputGroup}>
                      <label htmlFor="name">Full Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField("")}
                        className={`${styles.input} ${focusedField === "name" ? styles.focused : ""}`}
                        placeholder="Enter your full name"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className={styles.inputGroup}>
                      <label htmlFor="email">Email Address</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField("")}
                        className={`${styles.input} ${focusedField === "email" ? styles.focused : ""}`}
                        placeholder="Enter your email address"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="subject">Subject</label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("subject")}
                      onBlur={() => setFocusedField("")}
                      className={`${styles.input} ${focusedField === "subject" ? styles.focused : ""}`}
                      placeholder="What's this about?"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField("")}
                      className={`${styles.textarea} ${focusedField === "message" ? styles.focused : ""}`}
                      placeholder="Tell us about your project, requirements, or any questions you have..."
                      rows={6}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-gradient-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className={styles.spinner} />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Icon icon="mdi:arrow-right" width="16" height="16" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            ) : (
              <div className={styles.successCard}>
                <div className={styles.successGlow} />
                <div className={styles.successIcon}>
                  <Icon icon="mdi:check-circle" width="48" height="48" />
                </div>
                <h2>Message Sent Successfully!</h2>
                <p>
                  Thank you for reaching out. We've received your message and will get back to you
                  within 24 hours.
                </p>
                <div className={styles.successBadge}>
                  <span>
                    <Icon icon="mdi:party-popper" width="16" height="16" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '4px' }} />
                    We'll be in touch soon!
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
