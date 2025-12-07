"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { features } from "@/data/features";
import styles from "./features.module.scss";

const FeaturesSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Enhanced particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      type: "glow" | "sparkle" | "trail";
    }> = [];

    // Create particles
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.4 + 0.05,
        color:
          Math.random() > 0.85
            ? "#5da8ff"
            : Math.random() > 0.7
              ? "#a66bff"
              : Math.random() > 0.5
                ? "#ff6b9d"
                : "#ffffff",
        type: Math.random() > 0.8 ? "glow" : Math.random() > 0.5 ? "sparkle" : "trail",
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle based on type
        if (particle.type === "glow") {
          // Glow effect
          const gradient = ctx.createRadialGradient(
            particle.x,
            particle.y,
            0,
            particle.x,
            particle.y,
            particle.size * 3
          );
          gradient.addColorStop(0, particle.color);
          gradient.addColorStop(1, "transparent");

          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.globalAlpha = particle.opacity * 0.3;
          ctx.fill();
        } else if (particle.type === "sparkle") {
          // Sparkle effect
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.globalAlpha = particle.opacity;
          ctx.fill();

          // Add sparkle lines
          ctx.beginPath();
          ctx.moveTo(particle.x - particle.size * 2, particle.y);
          ctx.lineTo(particle.x + particle.size * 2, particle.y);
          ctx.moveTo(particle.x, particle.y - particle.size * 2);
          ctx.lineTo(particle.x, particle.y + particle.size * 2);
          ctx.strokeStyle = particle.color;
          ctx.globalAlpha = particle.opacity * 0.5;
          ctx.lineWidth = 1;
          ctx.stroke();
        } else {
          // Trail effect
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.globalAlpha = particle.opacity;
          ctx.fill();
        }

        // Connect nearby particles
        particles.forEach((otherParticle, otherIndex) => {
          if (index === otherIndex) return;
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 60) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = particle.color;
            ctx.globalAlpha = ((60 - distance) / 60) * 0.03;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={styles.featuresSection}>
      {/* Animated background canvas */}
      <canvas ref={canvasRef} className={styles.backgroundCanvas} />

      {/* Floating geometric shapes */}
      <div className={styles.floatingShapes}>
        <div className={styles.shape} data-speed="0.3" style={{ left: "10%", top: "20%" }}>
          <div className={styles.shapeInner} />
        </div>
        <div className={styles.shape} data-speed="0.5" style={{ right: "15%", top: "40%" }}>
          <div className={styles.shapeInner} />
        </div>
        <div className={styles.shape} data-speed="0.7" style={{ left: "20%", bottom: "30%" }}>
          <div className={styles.shapeInner} />
        </div>
        <div className={styles.shape} data-speed="0.4" style={{ right: "25%", bottom: "20%" }}>
          <div className={styles.shapeInner} />
        </div>
      </div>

      {/* Gradient orbs */}
      <div className={styles.gradientOrbs}>
        <div
          className={styles.orb}
          style={{
            background: "radial-gradient(circle, rgba(93, 168, 255, 0.1) 0%, transparent 70%)",
            left: "5%",
            top: "10%",
          }}
        />
        <div
          className={styles.orb}
          style={{
            background: "radial-gradient(circle, rgba(166, 107, 255, 0.08) 0%, transparent 70%)",
            right: "10%",
            top: "60%",
          }}
        />
        <div
          className={styles.orb}
          style={{
            background: "radial-gradient(circle, rgba(255, 107, 157, 0.06) 0%, transparent 70%)",
            left: "15%",
            bottom: "10%",
          }}
        />
      </div>

      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header} id="features">
          <div className={styles.badge}>
            <span className={styles.badgeText}>Powerful Features</span>
          </div>

          <h2 className="section-title">
            Everything you need to
            <span className="highlight"> build RAG applications</span>
          </h2>

          <p className="section-subtitle">
            From data ingestion to model deployment, we&apos;ve got you covered with
            enterprise-grade tools that scale with your needs.
          </p>
        </div>

        {/* Features Grid */}
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <Link
              key={index}
              href={`/features/${feature.slug}`}
              className={styles.featureCard}
              style={{ animationDelay: feature.delay }}
            >
              <div className={styles.cardGlow} />
              <div className={styles.cardContent}>
                <div className={styles.iconContainer} style={{ background: feature.gradient }}>
                  <div className={styles.iconWrapper}>
                    <Icon icon={feature.icon} width="32" height="32" />
                  </div>
                  <div className={styles.iconGlow} />
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>{feature.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
