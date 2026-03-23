"use client";

import Link from "next/link";

interface Project {
  name: string;
  year: string;
  status?: string;
  slug: string;
  orientation: "portrait" | "landscape";
  image: string;
}

const projects: Project[] = [
  {
    name: "Myrtle Pool House",
    year: "2024",
    slug: "/project/myrtle-pool-house",
    orientation: "portrait",
    image:
      "https://cdn.prod.website-files.com/678f62698d1043f9f15c0cec/67ec89266a30d21bfc54e72a_OH_POOLHOUSE%C2%A9ANDYMACPHERSON-7%20(1).avif",
  },
  {
    name: "Haig",
    year: "2024",
    slug: "/project/haig",
    orientation: "landscape",
    image:
      "https://cdn.prod.website-files.com/678f62698d1043f9f15c0cec/67be91596f129dc684d4c711_OG%20HAIG%20Andy%20Macpherson%204.avif",
  },
  {
    name: "Sidney house",
    year: "2023",
    slug: "/project/sidney",
    orientation: "portrait",
    image:
      "https://cdn.prod.website-files.com/678f62698d1043f9f15c0cec/67bea5e36abd92ebf2bbabed_OH_SIDNEYANDYMACPHERSON-23.avif",
  },
  {
    name: "Clifton",
    year: "2025",
    slug: "/project/clifton",
    orientation: "landscape",
    image:
      "https://cdn.prod.website-files.com/678f62698d1043f9f15c0cec/6812e7c68ea5cdd4757464f3_Web%202.avif",
  },
  {
    name: "Sweetman",
    year: "",
    status: "Under Construction",
    slug: "/project/sweetman",
    orientation: "portrait",
    image:
      "https://cdn.prod.website-files.com/678f62698d1043f9f15c0cec/67eddcd72dc455ba8396e435_Sweetman%203v2.avif",
  },
  {
    name: "Heal",
    year: "2023",
    slug: "/project/heal",
    orientation: "landscape",
    image:
      "https://cdn.prod.website-files.com/678f62698d1043f9f15c0cec/67c90160500ec1ec18d1d2f1_A2.avif",
  },
];

/* Grid column spans matching original site layout */
const gridPlacements: { col: string; row: number }[] = [
  { col: "1 / 7", row: 1 },    // portrait  — cols 1-6
  { col: "7 / 13", row: 1 },   // landscape — cols 7-12
  { col: "1 / 7", row: 2 },    // portrait  — cols 1-6
  { col: "7 / 13", row: 2 },   // landscape — cols 7-12
  { col: "1 / 7", row: 3 },    // portrait  — cols 1-6
  { col: "7 / 13", row: 3 },   // landscape — cols 7-12
];

function padIndex(i: number): string {
  return `(${String(i + 1).padStart(2, "0")})`;
}

export default function Works() {
  return (
    <section className="works_home_wrap">
      {/* Heading */}
      <div className="works_home_heading">
        <div className="works_home_text u-text-display">featured</div>
        <div className="works_home_work">
          <div className="works_home_works u-text-display">Works</div>
          <div className="works_home_dynamic u-text-display">(06)</div>
        </div>
      </div>

      {/* Project grid */}
      <div className="works_collection_wrap">
        <div className="works_collection_list u-grid-custom">
          {projects.map((project, i) => (
            <Link
              key={project.slug}
              href={project.slug}
              className="works_item_wrap works_collection_item"
              style={{
                gridColumn: gridPlacements[i].col,
                gridRow: gridPlacements[i].row,
              }}
            >
              <div
                className={`works_image_cover ${
                  project.orientation === "portrait"
                    ? "is-portrait"
                    : "is-landscape"
                }`}
              >
                <div className="g_image_cover" />
                <img
                  src={project.image}
                  alt={project.name}
                  className="works_item_image"
                  loading="lazy"
                />
              </div>

              <div className="works_content_wrap u-text-small">
                <div className="works_content_title">
                  <span className="works_content_index">
                    {padIndex(i)}
                  </span>
                  <span className="works_content_project">
                    {project.name}
                  </span>
                </div>
                <div className="works_content_aside">
                  <span className="works_content_year">
                    {project.status || project.year}
                  </span>
                  <span className="works_content_cta">
                    View project&nbsp;&rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="works_home_cta">
        <Link href="/works" className="btn_default_wrap">
          <div className="btn_default_contain">
            <span className="btn_default_text" data-text="view all works">
              view all works
            </span>
          </div>
          <span className="g_circle" />
        </Link>
      </div>
    </section>
  );
}
