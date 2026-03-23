"use client";

import Link from "next/link";

export default function Testimonials() {
  return (
    <section className="testimonials_wrap">
      <div className="g_eyebrow u-text-small">(hear from our client)</div>

      <div className="u-grid-custom">
        {/* Left column */}
        <div className="testimonials_left">
          <div className="testimonials_image_cover">
            <div className="g_image_cover" />
            <img
              src="https://cdn.prod.website-files.com/678f62698d1043f9f15c0cec/67b04e4ed2812e66e1318bce_OH_SIDNEYANDYMACPHERSON-16_EDIT.avif"
              alt="Sidney house project"
              className="testimonials_image"
              loading="lazy"
            />
          </div>

          <div className="testimonials_text u-text-large">
            <p>
              From the initial meeting I was impressed by the genuine enthusiasm
              and willingness to engage with the ideas in my brief. Johnny Hyde
              and the OH Architecture team engendered confidence. They cared
              about the project; throughout the design process they listened and
              interacted in a positive and professional, but relaxed, way.
            </p>
            <p>
              As they explored design ideas, they welcomed my contributions and
              encouraged feedback. Consequently, I had no doubt that OH
              Architecture would deliver a design to meet my dreams and also my
              budget. And in fact, the award-winning outcome eminently attests to
              their skill and achievement on both counts!
            </p>
          </div>

          <div className="testimonials_client u-text-small">
            <span>Carmen</span>
            <span>Homeowner of Sidney</span>
          </div>
        </div>

        {/* Right column */}
        <div className="testimonials_right">
          <Link href="/project/sidney" className="testimonials_project_link">
            <div className="testimonials_project_image_wrap">
              <img
                src="https://cdn.prod.website-files.com/678f62698d1043f9f15c0cec/67b04e6cd2812e66e13199f7_OH_SIDNEYANDYMACPHERSON-11.avif"
                alt="Sidney house"
                className="testimonials_project_image"
                loading="lazy"
              />
              <div className="testimonials_hover_overlay">
                <div className="testimonials_hover_content">
                  <span className="u-text-small">Sidney house</span>
                  <img
                    src="https://cdn.prod.website-files.com/678f62698d1043f9f15c0cec/67bea5e36abd92ebf2bbabed_OH_SIDNEYANDYMACPHERSON-23.avif"
                    alt="Sidney house thumbnail"
                    className="testimonials_hover_thumb"
                    loading="lazy"
                  />
                  <span className="u-text-small">Alderley, QLD</span>
                </div>
              </div>
            </div>

            <div className="testimonials_project_meta u-text-small">
              <span>(2023)</span>
              <span>Sidney house</span>
              <span>View project&nbsp;&rarr;</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
