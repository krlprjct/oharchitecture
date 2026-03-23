"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Works", href: "/works" },
  { label: "In Progress", href: "/renders" },
  { label: "Archive", href: "/archive" },
  { label: "Studio", href: "/studio" },
  { label: "Process", href: "/process" },
  { label: "Gallery", href: "/gallery" },
];

function useCurrentTime() {
  const [time, setTime] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function update() {
      const now = new Date(
        new Date().toLocaleString("en-US", { timeZone: "Australia/Brisbane" })
      );
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const day = now.getDay();
      const h = hours % 12 || 12;
      const ampm = hours >= 12 ? "PM" : "AM";
      const m = minutes.toString().padStart(2, "0");
      setTime(`${h}:${m} ${ampm}`);

      const weekday = day >= 1 && day <= 5;
      const withinHours =
        hours > 8 || (hours === 8 && minutes >= 30)
          ? hours < 17 || (hours === 17 && minutes === 0)
          : false;
      setIsOpen(weekday && withinHours);
    }
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);

  return { time, isOpen };
}

export default function Footer() {
  const { time, isOpen } = useCurrentTime();

  return (
    <footer className="footer_wrap">
      {/* ---- TOP ---- */}
      <div className="footer_top_wrap u-grid-tablet">
        {/* Column 1 — Image + Logo */}
        <div className="footer_col_image">
          <div className="footer_image_cover">
            <Image
              src="https://cdn.prod.website-files.com/6762bbe3294789635ee71fdb/68b1186f6d09cbfc9e7f358c_cde3ffd0d8365af42afeaa1bb5dfe00d_OH%20Samford%20Andy%20Macpherson.avif"
              alt="Side frontal facade of a modern, luxury residential home"
              width={800}
              height={450}
              sizes="(max-width: 767px) 100vw, 33vw"
              className="footer_image"
            />
            <div className="g_image_cover" />
          </div>

          <svg
            className="footer_oh_logo"
            viewBox="0 0 329 180"
            fill="#080807"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M85.0505 179.497C67.5425 179.497 52.3635 175.643 39.5135 167.933C26.8242 160.223 17.0262 149.621 10.1193 136.129C3.37311 122.476 0 106.976 0 89.6283C0 72.2809 3.37311 56.861 10.1193 43.3685C17.0262 29.7155 26.8242 19.1143 39.5135 11.5649C52.3635 3.85498 67.5425 0 85.0505 0C102.398 0 117.497 3.85498 130.347 11.5649C143.196 19.1143 152.995 29.7155 159.741 43.3685C166.648 56.861 170.101 72.2809 170.101 89.6283C170.101 106.976 166.648 122.476 159.741 136.129C152.995 149.621 143.196 160.223 130.347 167.933C117.497 175.643 102.398 179.497 85.0505 179.497ZM85.0505 148.899C96.1336 148.899 105.129 146.329 112.035 141.189C119.103 135.888 124.162 128.821 127.214 119.986C130.427 111.152 132.033 101.033 132.033 89.6283C132.033 78.3846 130.427 68.3456 127.214 59.5113C124.162 50.6769 119.103 43.6898 112.035 38.5498C105.129 33.2492 96.1336 30.5989 85.0505 30.5989C73.9674 30.5989 64.8922 33.2492 57.8247 38.5498C50.9179 43.6898 45.9385 50.6769 42.8867 59.5113C39.8348 68.185 38.3089 78.224 38.3089 89.6283C38.3089 101.033 39.8348 111.152 42.8867 119.986C45.9385 128.821 50.9179 135.888 57.8247 141.189C64.8922 146.329 73.9674 148.899 85.0505 148.899Z" />
            <path d="M186.125 3.61426H223.229V72.763H291.655V3.61426H329V175.884H291.655V103.603H223.229V175.884H186.125V3.61426Z" />
          </svg>
        </div>

        {/* Column 2 — Navigation */}
        <div className="footer_col_nav">
          <div className="g_eyebrow u-text-small">(Navigation)</div>
          <ul className="footer_nav_list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="g_footer_text_link u-text-h3"
                >
                  <div className="g_footer_contain">
                    <span
                      className="g_footer_inner"
                      data-text={link.label}
                    >
                      {link.label}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
            <li>
              <button
                type="button"
                className="g_footer_text_link u-text-h3 footer_contact_btn"
              >
                <div className="g_footer_contain">
                  <span
                    className="g_footer_inner"
                    data-text="Contact Us"
                  >
                    Contact Us
                  </span>
                </div>
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3 — Details */}
        <div className="footer_col_details">
          {/* Acknowledgement */}
          <div className="footer_acknowledgement">
            <div className="g_eyebrow u-text-small">(Acknowledgement)</div>
            <p className="u-text-main">
              We respectfully acknowledge the Turrbal people, the Traditional
              Owners and Custodians of the Country on which we work. We pay our
              respects to Elders past and present, and acknowledge their
              continuing connection to land, sea and community.
            </p>
          </div>

          {/* Info */}
          <div className="footer_info">
            <div className="g_eyebrow u-text-small">(Info)</div>
            <div className="footer_info_lines u-text-main">
              <p>
                <strong>A:</strong> 89 Days Rd, Grange QLD 4051
              </p>
              <p>
                <strong>E:</strong> info@oharchitecture.com.au
              </p>
              <p>
                <strong>P:</strong> 07 3110 1031
              </p>
              <p>
                <strong>H:</strong> Monday to Friday, 8:30am - 5:00pm
              </p>
            </div>
            <Image
              src="https://cdn.prod.website-files.com/6762bbe3294789635ee71fdb/67e1e61b2b78e43719da380b_Black%20AIA%20Member.avif"
              alt="AIA Member badge"
              width={156}
              height={66}
              className="footer_aia_badge"
            />
          </div>
        </div>
      </div>

      {/* ---- BOTTOM BAR ---- */}
      <div className="footer_bottom_wrap u-grid-tablet u-text-small">
        <div className="footer_bottom_col">
          <span>&copy; 2026 OH Architecture</span>
          {time && (
            <span>
              {time} QLD, we are {isOpen ? "open" : "closed"}
            </span>
          )}
        </div>

        <div className="footer_bottom_col">
          <Link href="/privacy-policy" className="g_link">
            <div className="g_link_contain">
              <span className="g_link_text" data-text="Privacy Policy">
                Privacy Policy
              </span>
            </div>
          </Link>
          <Link href="/terms-of-service" className="g_link">
            <div className="g_link_contain">
              <span className="g_link_text" data-text="Terms of Service">
                Terms of Service
              </span>
            </div>
          </Link>
        </div>

        <div className="footer_bottom_col footer_bottom_right">
          <a
            href="https://www.instagram.com/oh_architecture/"
            target="_blank"
            rel="noopener noreferrer"
            className="g_link"
          >
            <div className="g_link_contain">
              <span className="g_link_text" data-text="Instagram">
                Instagram
              </span>
            </div>
          </a>
          <span>
            Site by{" "}
            <a
              href="https://bymonolog.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="g_link"
            >
              <div className="g_link_contain">
                <span className="g_link_text" data-text="MONOLOG">
                  MONOLOG
                </span>
              </div>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
