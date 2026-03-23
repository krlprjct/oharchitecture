"use client";

export default function CTA() {
  return (
    <section className="cta_wrap">
      <div className="cta_contain">
        <h2 className="u-text-display">
          <span>FOCUSED ON QUALITY</span>
          <br />
          <span className="cta_outline_text">DRIVEN BY CREATIVITY</span>
        </h2>
      </div>

      <div className="cta_button_wrap">
        <button className="btn_default_wrap">
          <div className="btn_default_contain">
            <span
              className="btn_default_text"
              data-text="Tell us about your project"
            >
              Tell us about your project
            </span>
          </div>
          <span className="g_circle" />
        </button>
      </div>
    </section>
  );
}
