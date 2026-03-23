"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(ScrollTrigger, CustomEase);

/* Original site easing curves */
const EASE_PRIMARY = "M0,0 C0.87,0 0.13,1 1,1";
const EASE_SECONDARY = "M0,0 C0.16,1 0.35,1 1,1";
const EASE_TERTIARY = "M0,0 C0.53,0.23 0.25,1 1,1";

export default function Animations() {
  useEffect(() => {
    /* Register custom eases */
    CustomEase.create("ease-primary", EASE_PRIMARY);
    CustomEase.create("ease-secondary", EASE_SECONDARY);
    CustomEase.create("ease-tertiary", EASE_TERTIARY);

    const ctx = gsap.context(() => {
      /* ───── Hero parallax: facade image translates up on scroll ───── */
      gsap.to(".hero_image_contain", {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero_spacer",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      /* ───── Hero overlay: fade in on scroll ───── */
      gsap.to(".hero_home_overlay:not(.is-interior)", {
        opacity: 0.6,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero_spacer",
          start: "20% top",
          end: "bottom top",
          scrub: true,
        },
      });

      /* ───── Image reveals: cover slides up to reveal image ───── */
      gsap.utils.toArray<HTMLElement>(".g_image_cover").forEach((cover) => {
        gsap.to(cover, {
          scaleY: 0,
          ease: "ease-primary",
          duration: 1.4,
          scrollTrigger: {
            trigger: cover.parentElement,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      /* ───── Image scale-in: images start slightly zoomed and settle ───── */
      gsap.utils
        .toArray<HTMLElement>(
          ".about_bottom_image, .process_left_image, .testimonials_image, .testimonials_project_image, .footer_image"
        )
        .forEach((img) => {
          gsap.from(img, {
            scale: 1.15,
            duration: 1.8,
            ease: "ease-secondary",
            scrollTrigger: {
              trigger: img,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          });
        });

      /* ───── Heading reveals: u-text-display elements fade/slide up ───── */
      gsap.utils
        .toArray<HTMLElement>(
          ".about_home_top .u-text-display, .works_home_heading .u-text-display, .cta_contain .u-text-display"
        )
        .forEach((el) => {
          gsap.from(el, {
            y: 80,
            opacity: 0,
            duration: 1.2,
            ease: "ease-secondary",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          });
        });

      /* ───── Paragraph text reveals ───── */
      gsap.utils
        .toArray<HTMLElement>(
          ".about_content_contain .u-text-large, .process_aside_paragraph, .testimonials_text"
        )
        .forEach((el) => {
          gsap.from(el, {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: "ease-secondary",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          });
        });

      /* ───── Process steps: stagger in ───── */
      gsap.from(".process_step", {
        y: 30,
        opacity: 0,
        stagger: 0.08,
        duration: 0.8,
        ease: "ease-secondary",
        scrollTrigger: {
          trigger: ".process_steps",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      /* ───── Works cards: individual scroll triggers ───── */
      gsap.utils
        .toArray<HTMLElement>(".works_collection_item")
        .forEach((item) => {
          gsap.from(item, {
            y: 60,
            opacity: 0,
            duration: 1,
            ease: "ease-secondary",
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          });
        });

      /* ───── CTA button ───── */
      gsap.from(".cta_button_wrap", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: "ease-secondary",
        scrollTrigger: {
          trigger: ".cta_button_wrap",
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });

      /* ───── Eyebrow labels ───── */
      gsap.utils.toArray<HTMLElement>(".g_eyebrow").forEach((el) => {
        gsap.from(el, {
          y: 15,
          opacity: 0,
          duration: 0.7,
          ease: "ease-secondary",
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
            toggleActions: "play none none none",
          },
        });
      });

      /* ───── Buttons ───── */
      gsap.utils
        .toArray<HTMLElement>(
          ".about_btn, .process_btn, .works_home_cta .btn_default_wrap"
        )
        .forEach((el) => {
          gsap.from(el, {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "ease-secondary",
            scrollTrigger: {
              trigger: el,
              start: "top 92%",
              toggleActions: "play none none none",
            },
          });
        });

      /* ───── Testimonials client info ───── */
      gsap.from(".testimonials_client", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "ease-secondary",
        scrollTrigger: {
          trigger: ".testimonials_client",
          start: "top 92%",
          toggleActions: "play none none none",
        },
      });

      /* ───── Testimonials project card ───── */
      gsap.from(".testimonials_right", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "ease-secondary",
        scrollTrigger: {
          trigger: ".testimonials_right",
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });

      /* ───── Footer columns ───── */
      gsap.from(
        ".footer_col_image, .footer_col_nav, .footer_col_details",
        {
          y: 40,
          opacity: 0,
          stagger: 0.15,
          duration: 1,
          ease: "ease-secondary",
          scrollTrigger: {
            trigger: ".footer_wrap",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      /* ───── Footer bottom bar ───── */
      gsap.from(".footer_bottom_wrap", {
        opacity: 0,
        duration: 0.8,
        ease: "ease-tertiary",
        scrollTrigger: {
          trigger: ".footer_bottom_wrap",
          start: "top 95%",
          toggleActions: "play none none none",
        },
      });

      /* ───── Hero text entrance (on load) ───── */
      const heroTl = gsap.timeline({ delay: 0.3 });
      heroTl
        .from(".hero_home_heading", {
          y: 60,
          opacity: 0,
          duration: 1.4,
          ease: "ease-secondary",
        })
        .from(
          ".hero_scroll_indicator",
          {
            y: 20,
            opacity: 0,
            duration: 1,
            ease: "ease-secondary",
          },
          "-=0.8"
        )
        .from(
          ".hero_collection_details",
          {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "ease-secondary",
          },
          "-=0.8"
        );
    });

    return () => ctx.revert();
  }, []);

  return null;
}
