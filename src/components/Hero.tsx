"use client";

import Link from "next/link";

const INTERIOR_IMAGE =
  "https://cdn.prod.website-files.com/678f62698d1043f9f15c0cec/67ec8689cc8598c18900f122_OH_POOLHOUSE%C2%A9ANDYMACPHERSON-2%20(1).avif";
const FACADE_IMAGE =
  "https://cdn.prod.website-files.com/678f62698d1043f9f15c0cec/686dd6b0cd8f85e1c0078336_OH_POOLHOUSE%C2%A9ANDYMACPHERSON-4%20(1).jpg";

export default function Hero() {
  return (
    <>
      {/* Fixed hero that stays in place while content scrolls over it */}
      <section className="hero_home_wrap">
        {/* Main content layer */}
        <div className="hero_home_content">
          {/* Interior image (behind) */}
          <img
            src={INTERIOR_IMAGE}
            alt="Myrtle Pool House interior"
            className="hero_home_interior"
          />

          {/* Dark overlay on interior */}
          <div className="hero_home_overlay is-interior" />

          {/* Main facade cover */}
          <div className="hero_home_cover">
            <div className="hero_image_contain">
              <img
                src={FACADE_IMAGE}
                alt="Myrtle Pool House facade"
                className="hero_home_facade"
              />
            </div>

            {/* Scroll-based opacity overlay (starts at 0) */}
            <div className="hero_home_overlay" />

            {/* Bottom gradient */}
            <div className="hero_home_gradient" />
          </div>
        </div>

        {/* Project info row — centered vertically */}
        <div className="hero_project_info">
          <span>FEATURED PROJECT</span>
          <span>MYRTLE POOL HOUSE</span>
          <span>2024</span>
          <Link href="/project/myrtle-pool-house" className="hero_view_link">
            <div className="btn_default_contain">
              <span className="btn_default_text" data-text="View project">
                View project
              </span>
            </div>
            <span className="g_circle is-light" />
          </Link>
        </div>

        {/* Bottom content — heading + scroll indicator */}
        <div className="hero_home_contain">
          <div className="hero_home_bottom">
            <h1 className="hero_home_heading">
              The OH Architecture style is defined
              by strong, solid forms with subtle
              elegance, natural balance and
              enduring appeal
            </h1>
            <span className="hero_scroll_indicator">(SCROLL DOWN)</span>
          </div>
        </div>
      </section>

      {/* Spacer to push content below the fixed hero */}
      <div className="hero_spacer" />
    </>
  );
}
