"use client";

import Link from "next/link";

const steps = [
  { index: "(01)", title: "Sketch Design" },
  { index: "(02)", title: "Design Development" },
  { index: "(03)", title: "Development Application" },
  { index: "(04)", title: "Interior Design" },
  { index: "(05)", title: "Building approval plans + documentation" },
  { index: "(06)", title: "Construction plans + documentation" },
];

export default function Process() {
  return (
    <section className="process_home_wrap">
      {/* Left column */}
      <div className="process_left_wrap">
        <div className="g_eyebrow u-text-small">(Our Process)</div>

        <div className="process_left_cover">
          <div className="g_image_cover" />
          <img
            src="https://cdn.prod.website-files.com/6762bbe3294789635ee71fdb/68b68f5c84ccea56a8e6c558_OH%20Samford%20Andy%20Macpherson%20(1).avif"
            alt="A black and white image of an architect overseeing the architectural site"
            className="process_left_image"
            loading="lazy"
          />
        </div>

        <div className="process_steps">
          {steps.map((step) => (
            <div key={step.index} className="process_step u-text-main">
              <span className="process_step_index">{step.index}</span>
              <span className="process_step_title">{step.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right column */}
      <div className="process_aside_wrap">
        <p className="process_aside_paragraph u-text-h3">
          Our approach at OH Architecture is designed to make your journey from
          concept to completion as smooth and enjoyable as possible.
          <br />
          <br />
          With our 6-stage process, we prioritise clarity, collaboration, and
          your unique vision. At every step, we&apos;ll keep you informed,
          inspired, and involved.
        </p>

        <Link href="/process" className="btn_default_wrap process_btn">
          <div className="btn_default_contain">
            <span
              className="btn_default_text"
              data-text="Get to know our process"
            >
              Get to know our process
            </span>
          </div>
          <span className="g_circle" />
        </Link>
      </div>
    </section>
  );
}
