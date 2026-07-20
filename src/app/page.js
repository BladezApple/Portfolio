"use client";
import "./home.css";
import { useState, useEffect, useRef } from "react";
import Copy from "@/components/Copy/Copy";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomEase from "gsap/CustomEase";
import Footer from "@/components/Footer/Footer";

gsap.registerPlugin(ScrollTrigger, CustomEase);
CustomEase.create("hop", "0.9, 0, 0.1, 1");

const workExperience = [
  {
    position: "Systems Administrator | Configurator",
    company: "OmniSMP (Minecraft Server)",
    duration: "June 2026 - Present",
    link: "/case-studies/omnismp",
  },
  {
    position: "Video Editor",
    company: "CobbleLand (Minecraft Server)",
    duration: "February 2026 - August 2026",
    link: "/case-studies/cobbleland",
  },
  {
    position: "Core Developer",
    company: "JungleMC (Minecraft Network)",
    duration: "March 2026 - May 2026",
    link: "/case-studies/junglemc",
  },
  {
    position: "Video Editor",
    company: "Starmania Network (Minecraft Server)",
    duration: "February 2026 - April 2026"
  },
  {
    position: "Performance Optimizer",
    company: "RageMC (Minecraft Network)",
    duration: "February 2026",
    link: "/case-studies/ragemc",
  },
  {
    position: "CEO",
    company: "UnderFive Studios (Minecraft Marketplace)",
    duration: "December 2025 - Present",
    link: "/case-studies/underfivestudios",
  },
  {
    position: "Co-Founder",
    company: "Web Dev (Startup)",
    duration: "August 2025 - Present",
    link: "/case-studies/webstartup",
  },
  {
    position: "Owner",
    company: "SlayerMC (Minecraft Server)",
    duration: "June 2025 - Present",
    link: "/case-studies/slayermc",
  },
  {
    position: "Founder",
    company: "La Amore (Hoodie Brand, discontinued)",
    duration: "2025",
    link: "/case-studies/laamore",
  },
  {
    position: "Video Editor | Graphics Designer",
    company: "Cerebro Ludico (YouTube)",
    duration: "May 2024 - August 2025",
    link: "/case-studies/cerebroludico",
  },
  {
    position: "Video Editor | Graphics Designer",
    company: "Daily Prehab (Startup)",
    duration: "December 2024",
    link: "/case-studies/dailyprehab",
  },
  {
    position: "Video Editor",
    company: "MintLemonade (YouTube)",
    duration: "January 2024 - August 2024",
  },
];

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(false);
  const aboutImgRef = useRef(null);
  const workExperienceRef = useRef(null);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisitedHome");

    if (!hasVisited) {
      setShowPreloader(true);
      sessionStorage.setItem("hasVisitedHome", "true");
    } else {
      setShowPreloader(false);
    }
  }, []);

  useGSAP(() => {
    const heroLink = document.querySelector(".hero-link");
    const animationDelay = showPreloader ? 6.2 : 0.9;

    if (showPreloader) {
      const tl = gsap.timeline({
        delay: 0.3,
        defaults: {
          ease: "hop",
        },
      });

      const counts = document.querySelectorAll(".count");
      const progressBar = document.querySelector(".progress-bar");
      const preloaderOverlay = document.querySelector(".preloader-overlay");

      const progressTl = gsap.timeline({
        delay: 0.3,
      });

      counts.forEach((count, index) => {
        const digits = count.querySelectorAll(".digit h1");

        tl.to(
          digits,
          {
            y: "0%",
            duration: 1,
            stagger: 0.075,
          },
          index * 1,
        );

        if (index < counts.length) {
          tl.to(
            digits,
            {
              y: "-120%",
              duration: 1,
              stagger: 0.075,
            },
            index * 1 + 1,
          );
        }

        progressTl.to(
          progressBar,
          {
            scaleY: (index + 1) / counts.length,
            duration: 1,
            ease: "hop",
          },
          index * 1,
        );
      });

      progressTl
        .set(progressBar, {
          transformOrigin: "top",
        })
        .to(progressBar, {
          scaleY: 0,
          duration: 0.75,
          ease: "hop",
        })
        .to(preloaderOverlay, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
          onComplete: () => {
            preloaderOverlay.style.display = "none";
          },
        });
    }

    if (heroLink) {
      gsap.set(heroLink, { y: 30, opacity: 0 });

      gsap.to(heroLink, {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: animationDelay,
        ease: "power4.out",
      });
    }

    if (aboutImgRef.current) {
      const aboutImg = aboutImgRef.current.querySelector(
        ".about-img-container",
      );

      gsap.set(aboutImg, {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      });

      ScrollTrigger.create({
        trigger: aboutImg,
        start: "top 80%",
        onEnter: () => {
          gsap.to(aboutImg, {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            duration: 1,
            ease: "power3.out",
          });
        },
      });
    }

    if (workExperienceRef.current) {
      const workRows = workExperienceRef.current.querySelectorAll(
        ".work-experience-row",
      );

      workRows.forEach((row) => {
        const bg = row.querySelector(".work-experience-bg");
        const position = row.querySelector(".work-experience-position h3");
        const company = row.querySelector(".work-experience-company p");
        const duration = row.querySelector(".work-experience-duration span");

        gsap.set(bg, { scaleY: 0, transformOrigin: "bottom" });

        row.addEventListener("mouseenter", () => {
          gsap.to(bg, {
            scaleY: 1,
            duration: 0.6,
            ease: "power3.out",
          });

          gsap.to([position, company, duration], {
            color: "var(--white)",
            duration: 0.4,
            ease: "power3.out",
          });
        });

        row.addEventListener("mouseleave", () => {
          gsap.to(bg, {
            scaleY: 0,
            duration: 0.6,
            ease: "power3.out",
          });

          gsap.to(position, {
            color: "var(--black)",
            duration: 0.6,
            ease: "power3.out",
          });

          gsap.to(company, {
            color: "var(--black)",
            duration: 0.6,
            ease: "power3.out",
          });

          gsap.to(duration, {
            color: "var(--foreground-200)",
            duration: 0.6,
            ease: "power3.out",
          });
        });
      });
    }
    
    if (typeof window !== "undefined") {
      import("@/components/skillphysics").then(({ initSkillsPhysics }) => {
        initSkillsPhysics();
      });
    }
  }, [showPreloader]);

  return (
    <main className="home-page">
      {showPreloader && (
        <div className="preloader-overlay">
          <div className="progress-bar"></div>
          <div className="counter">
            <div className="count">
              <div className="digit">
                <h1>0</h1>
              </div>
              <div className="digit">
                <h1>0</h1>
              </div>
            </div>
            <div className="count">
              <div className="digit">
                <h1>2</h1>
              </div>
              <div className="digit">
                <h1>7</h1>
              </div>
            </div>
            <div className="count">
              <div className="digit">
                <h1>6</h1>
              </div>
              <div className="digit">
                <h1>5</h1>
              </div>
            </div>
            <div className="count">
              <div className="digit">
                <h1>9</h1>
              </div>
              <div className="digit">
                <h1>8</h1>
              </div>
            </div>
            <div className="count">
              <div className="digit">
                <h1>9</h1>
              </div>
              <div className="digit">
                <h1>9</h1>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="about-img" ref={aboutImgRef}>
        <div className="about-img-container">
          <img src="/about.webp" alt="BladeZ" />
        </div>
      </section>

      <section className="hero">
        <div className="hero-header">
          <Copy delay={showPreloader ? 6.2 : 0.9}>
            <h1>
              <span className="spacer">&nbsp;</span>
              Professional Developer and Designer
              with 3+ years of experience designing Digital Products, creating
              modern Websites and Minecraft Servers.
            </h1>
          </Copy>
        </div>
      </section>

      <section className="story">
        <div className="col">
          <Copy>
            <h1>
              The Journey Behind <br /> My Skillset
            </h1>
          </Copy>
        </div>
        <div className="col story-copy">
          <Copy>
            <p>
              My path to professional work first started in 2023 with
              a mere $7 contract on Upwork. Since then, I have scaled up my
              skillset to include Web Development, Video Editing, UI/UX
              Designing, Minecraft Server Setups and more.
            </p>
          </Copy>
          <Copy delay={0.4}>
            <p>
              Some of my side hobbies include running a YouTube Channel and a
              Minecraft Server. These have allowed me to expand my Leadership,
              Planning and Technical skills, and to build meaningful
              connections.
            </p>
          </Copy>
          <Copy delay={0.6}>
            <p>
              Today, I’m the CEO of UnderFive Studios (Minecraft Studios).
              Having built my skillsets and these ventures from near scratch,
              I have absorbed experiences that help me deliver skills that
              matter.
            </p>
          </Copy>
        </div>
      </section>

      <section className="philosophy">
        <Copy>
          <span>The Thought Beneath</span>
        </Copy>
        <div className="header">
          <Copy>
            <h1>
              <span className="spacer">&nbsp;</span>I have always been
              enthusiastic about questioning new topics, finding out new
              opportunities and developing my skillset. This same curiousity
              led me to get into contact with people of insane caliber, such
              as my friend Jithin who helped me develop my skills, and my
              Backend partner, with whom I co-founded a Web Development Startup.
            </h1>
          </Copy>
        </div>
      </section>

      <section className="about-skills">
        <div className="container">
          <div className="about-skills-col">
            <div className="symbols-container"></div>
            <div className="about-skills-copy-wrapper">
              <div className="about-skills-callout">
                <Copy delay={0.2}>
                  <p className="mono">
                    <span>▶</span> Gravity, I guess ;)
                  </p>
                </Copy>
              </div>
              <div className="about-skills-header">
                <Copy delay={0.4}>
                  <h3>A skillset worth admiring</h3>
                </Copy>
              </div>
            </div>
          </div>
          <div className="about-skills-col skills-playground">
            <div className="object-container">
              <div className="object os-1">
                <p className="mono">Pterodactyl</p>
              </div>
              <div className="object os-2">
                <p className="mono">Minecraft Setups</p>
              </div>
              <div className="object os-3">
                <p className="mono">Tailwind CSS</p>
              </div>
              <div className="object os-1">
                <p className="mono">JavaScript</p>
              </div>
              <div className="object os-2">
                <p className="mono">React.js</p>
              </div>
              <div className="object os-3">
                <p className="mono">Inertia.js</p>
              </div>
              <div className="object os-1">
                <p className="mono">TypeScript</p>
              </div>
              <div className="object os-2">
                <p className="mono">Firebase</p>
              </div>
              <div className="object os-3">
                <p className="mono">Github</p>
              </div>
              <div className="object os-1">
                <p className="mono">Vercel</p>
              </div>
              <div className="object os-2">
                <p className="mono">Figma</p>
              </div>
              <div className="object os-3">
                <p className="mono">UI/UX</p>
              </div>
              <div className="object os-1">
                <p className="mono">Filmora 12</p>
              </div>
              <div className="object os-2">
                <p className="mono">Canva</p>
              </div>
              <div className="object os-3">
                <p className="mono">CapCut</p>
              </div>
              <div className="object os-1">
                <p className="mono">Illustrator</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="work-experience" ref={workExperienceRef}>
        <Copy>
          <span>Experience & Journey</span>
        </Copy>
        <div className="work-experience-table">
          {workExperience.map((experience, index) => (
            <a key={index} className="work-experience-row" href={experience.link}>
              <div className="work-experience-bg"></div>
              <div className="work-experience-position">
                <h3>{experience.position}</h3>
              </div>
              <div className="work-experience-company">
                <p>{experience.company}</p>
              </div>
              <div className="work-experience-duration">
                <span>{experience.duration}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
