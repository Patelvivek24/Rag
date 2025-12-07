"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar, Nav, Container } from "react-bootstrap";
import styles from "./Header.module.scss";
import Logo from "../../../../image/main-logo.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    window.addEventListener("scroll", onScroll, { passive: true } as AddEventListenerOptions);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll as EventListener);
  }, []);

  const navLinks = [
    { label: "Home", href: { pathname: "/", hash: "" } },
    { label: "Workflow", href: { pathname: "/", hash: "workflow" } },
    { label: "Features", href: { pathname: "/", hash: "features" } },
    { label: "Use Cases", href: { pathname: "/", hash: "use-cases" } },
    { label: "Contact", href: { pathname: "/contact" } },
  ];

  return (
    <header className={`${styles.header} sticky-top ${scrolled ? styles.scrolled : ""}`}>
      <Navbar
        expand="lg"
        className={styles.navbar}
        expanded={expanded}
        onToggle={(val) => setExpanded(Boolean(val))}
        aria-label="Site Navigation"
        data-bs-theme="dark"
      >
        <Container>
          <Link href="/" className={styles.brand} aria-label="RAG Home">
            <Image src={Logo} alt="RAG logo" className={styles.brandLogo} />
          </Link>

          <Navbar.Toggle aria-controls="primaryNav" className={styles.toggler} />

          <Navbar.Collapse id="primaryNav" className={styles.collapse}>
            <div className={`${styles.navGroup} mx-lg-auto mb-3 mb-lg-0`}>
              <Nav
                className={`${styles.nav}`}
                as="nav"
                role="navigation"
                aria-label="Primary Navigation"
              >
                {navLinks.map((link, index) => (
                  <span key={link.label} className="d-inline-flex align-items-center">
                    <Link
                      className={`${styles.link} nav-link`}
                      href={link.href}
                      onClick={() => setExpanded(false)}
                    >
                      {link.label}
                    </Link>
                    {index < navLinks.length - 1 && (
                      <span className={styles.linkSeparator} aria-hidden="true" />
                    )}
                  </span>
                ))}
              </Nav>
            </div>

            <div className="d-lg-none mt-3 w-100">
              <Link
                href={{ pathname: "/", hash: "get-started" }}
                className={"btn btn-gradient-primary rounded-pill w-100"}
                onClick={() => setExpanded(false)}
              >
                Join Waitlist
              </Link>
            </div>
          </Navbar.Collapse>

          <div className="d-none d-lg-flex align-items-center gap-2">
            <Link
              href={{ pathname: "/", hash: "waitlist-sec" }}
              className={styles.primaryButton}
            >
              <span>Join Waitlist</span>
              
            </Link>
          </div>
        </Container>
      </Navbar>
    </header>
  );
}
