"use client";

import Link from "next/link";

export default function About() {
  return (
    <section className="about_home_wrap">
      <div className="about_home_top">
        <h2 className="u-text-display">
          Experience
          <br />
          focused design
        </h2>

        <div className="about_home_bottom u-grid-custom">
          <div className="about_bottom_contain">
            <div className="about_image_cover">
              <div className="g_image_cover" />
              <img
                className="about_bottom_image"
                src="https://cdn.prod.website-files.com/6762bbe3294789635ee71fdb/68be5afed4c8805edd12506f_OG_HAIG%C2%A9ANDYMACPHERSON2-9%20(1).jpg"
                alt="Architecture project by OH Architecture"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="about_home_content u-grid-custom">
        <div className="about_content_wrap">
          <div className="about_content_contain">
            <p className="u-text-large">
              We work closely with clients right from the start, with clear
              communication and expert guidance along the way. We also work
              closely with builders, consultants, and other partners to make
              sure each project runs smoothly and the final build delivers well
              beyond our shared aspirations.
            </p>

            <p className="u-text-large">
              While our aesthetic is recognisable, each project evolves to
              embody its own shape and character, crafted in response to the
              aspirations of our clients, the opportunities of the site, and
              the creative vision of our architectural team.
            </p>

            <Link href="/studio" className="btn_default_wrap about_btn">
              <div className="btn_default_contain">
                <span
                  className="btn_default_text"
                  data-text="learn more about our studio"
                >
                  learn more about our studio
                </span>
              </div>
              <span className="g_circle" />
            </Link>
          </div>

          <div className="about_eyebrow_contain">
            <div className="g_eyebrow u-text-small">(Our Studio)</div>
          </div>
        </div>
      </div>
    </section>
  );
}
