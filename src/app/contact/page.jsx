"use client";
import "./contact.css";
import { useRef } from "react";

import Copy from "@/components/Copy/Copy";

import { useTransitionRouter } from "next-view-transitions";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

const page = () => {
  const router = useTransitionRouter();
  const contactRef = useRef(null);

  useGSAP(
    () => {
      const contactImg = contactRef.current.querySelector(".contact-img");
      const footerTexts = contactRef.current.querySelectorAll(
        ".contact-footer .footer-text",
      );

      gsap.set(contactImg, {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      });

      gsap.to(contactImg, {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        duration: 1,
        delay: 0.85,
        ease: "power3.out",
      });

      footerTexts.forEach((element) => {
        const textContent = element.querySelector(".footer-text-content");
        gsap.set(textContent, {
          y: "100%",
        });
      });

      footerTexts.forEach((element, index) => {
        const textContent = element.querySelector(".footer-text-content");
        gsap.to(textContent, {
          y: "0%",
          duration: 0.8,
          delay: 1.8 + index * 0.1,
          ease: "power3.out",
        });
      });
    },
    { scope: contactRef },
  );

  function slideInOut() {
    document.documentElement.animate(
      [
        {
          opacity: 1,
          transform: "translateY(0) scale(1)",
        },
        {
          opacity: 0.2,
          transform: "translateY(-30%) scale(0.90)",
        },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      },
    );

    document.documentElement.animate(
      [
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        },
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      },
    );
  }

  const handleNavigation = (e, route) => {
    e.preventDefault();
    router.push(route, {
      onTransitionReady: slideInOut,
    });
  };

  return (
    <div className="contact" ref={contactRef}>
      <div className="contact-img-wrapper">
        <div className="contact-img">
          <img src="/about.webp" alt="Muhammad Ahmad" />
        </div>
      </div>
      <div className="contact-copy">
        <div className="contact-copy-bio">
          <Copy delay={1}>
            <h1>Let's Connect</h1>
            <p>
              Ready to bring your vision to life? Lets discuss your project and
              explore collaboration opportunities.
            </p>
          </Copy>
        </div>

        <div className="contact-copy-socials">
          <span className="detail-label">Connect</span>
          <div className="social-links">
            <div>
              <Link
                href="mailto:bladezapple@gmail.com"
                target="_blank"
                rel="noopener noreferrer">
                Email
              </Link>
            </div>
            <div>
              <Link
                href="https://www.instagram.com/ahmxd_saleem/"
                target="_blank"
                rel="noopener noreferrer">
                Instagram
              </Link>
            </div>
            <div>
              <Link
                href="https://www.linkedin.com/in/muhammad-ahmad-a3266727a/"
                target="_blank"
                rel="noopener noreferrer">
                LinkedIn
              </Link>
            </div>
            <div>
              <Link
                href="https://drive.google.com/drive/folders/1snsOBjOZjMViUbASY0mzg1oAgS2_Qa3Q?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer">
                Full Project Archive
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-footer">
        <div className="fc-col-lg">
          <div className="footer-text">
            <div className="footer-text-content">
              <p className="sm caps">Developed by Muhammad Ahmad</p>
            </div>
          </div>
        </div>
        <div className="fc-col-sm">
          <div className="footer-text">
            <div className="footer-text-content">
              <p className="sm caps">&copy; 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
