"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Works", href: "/works" },
  { label: "Studio", href: "/studio" },
  { label: "Process", href: "/process" },
  { label: "Gallery", href: "/gallery" },
];

const menuLinks = [
  { label: "Home", href: "/" },
  { label: "Works", href: "/works" },
  { label: "Studio", href: "/studio" },
  { label: "Process", href: "/process" },
  { label: "Gallery", href: "/gallery" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 500);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  return (
    <>
      {/* Main navbar — hides links/contact on scroll, logo stays */}
      <nav className={`menu_navbar ${scrolled ? "is-scrolled" : ""}`}>
        <div className="menu_navbar_contain">
          <Link href="/" className="menu_logo">
            OH Architecture
          </Link>

          <div className="menu_navbar_list">
            {navLinks.map((link, i) => (
              <span key={link.label} className="menu_navbar_item">
                <Link href={link.href} className="menu_navbar_link">
                  {link.label.toUpperCase()}
                </Link>
                {i < navLinks.length - 1 && (
                  <span className="navbar_nav_comma">{" , "}</span>
                )}
              </span>
            ))}
          </div>

          <button className="menu_navbar_contact">
            GET IN TOUCH
            <span className="g_circle" />
          </button>
        </div>
      </nav>

      {/* Mini navbar — appears on scroll */}
      <div className={`navbar_mini_wrap ${scrolled ? "is-visible" : ""}`}>
        <button className="navbar_mini_btn navbar_mini_cta">
          <span>Get in touch</span>
          <span className="g_circle" />
        </button>
        <button className="navbar_mini_btn navbar_mini_menu" onClick={toggleMenu}>
          <span>Menu</span>
        </button>
      </div>

      {/* Full-screen menu overlay */}
      <div className={`menu_overlay_wrap ${menuOpen ? "is-open" : ""}`}>
        <div className="menu_overlay_top">
          <Link href="/" className="menu_overlay_logo" onClick={() => setMenuOpen(false)}>
            OH Architecture
          </Link>
          <button className="menu_overlay_close" onClick={() => setMenuOpen(false)}>
            Close
          </button>
        </div>

        <div className="menu_overlay_links">
          {menuLinks.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              className="menu_overlay_link"
              onClick={() => setMenuOpen(false)}
              style={{ transitionDelay: menuOpen ? `${0.45 + i * 0.0425}s` : "0s" }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="menu_overlay_footer">
          <a
            href="https://www.instagram.com/oh.architecture/"
            target="_blank"
            rel="noopener noreferrer"
            className="menu_overlay_footer_link"
          >
            Instagram
          </a>
          <div className="menu_overlay_footer_bottom">
            <a href="/privacy" className="menu_overlay_footer_link">
              Privacy Policy
            </a>
            <a href="/terms" className="menu_overlay_footer_link">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
