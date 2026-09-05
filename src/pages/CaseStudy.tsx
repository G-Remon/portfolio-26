import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { projects } from "../data";
import { Layout } from "../components/layout";
import { ProjectVisual } from "../components/ProjectCard";
import { PageMeta } from "../components/PageMeta";
import { NotFound } from "./NotFound";
import { motion, AnimatePresence } from "motion/react";

export function CaseStudy() {
  const { slug } = useParams();

  const p = projects.find((x) => x.slug === slug);

  /*
    Hooks لازم تفضل قبل أي conditional return
  */
  const [currentSlide, setCurrentSlide] = useState(0);

  /*
    لما تنتقل من مشروع لمشروع
    رجّع السلايدر لأول صورة
  */
  useEffect(() => {
    setCurrentSlide(0);
  }, [slug]);

  /*
    لو المشروع مش موجود
  */
  if (!p) {
    return <NotFound />;
  }

  const hasLinks = Boolean(p.liveUrl || p.githubUrl);

  /*
    لو فيه Gallery استخدمها.
    لو مفيش، استخدم الصورة الرئيسية فقط.
  */
  const slides =
    p.gallery && p.gallery.length > 0
      ? p.gallery
      : p.image
        ? [p.image]
        : [];

  /*
    Next Slide
  */
  const nextSlide = () => {
    setCurrentSlide((current) =>
      current === slides.length - 1 ? 0 : current + 1
    );
  };

  /*
    Previous Slide
  */
  const previousSlide = () => {
    setCurrentSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1
    );
  };

  return (
    <Layout>
      <PageMeta
        title={`${p.title} — Gerges Remon`}
        description={p.summary}
        image={p.image}
      />

      {/* =====================================================
          CASE STUDY HERO
      ===================================================== */}

      <section className="case-hero">
        <div className="container">
          <Link className="back" to="/work">
            ← Back to work
          </Link>

          {/* Categories */}

          <div className="tag-row">
            {p.category.map((category) => (
              <span key={category}>{category}</span>
            ))}
          </div>

          {/* Project title */}

          <h1>{p.title}</h1>

          {/* Summary */}

          <p>{p.summary}</p>

          {/* =====================================================
              PROJECT VISUAL / SLIDER
          ===================================================== */}

          {slides.length > 1 ? (
            <motion.div
              className="project-slider"
              initial={{
                opacity: 0,
                scale: 0.98,
                y: 15,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              <div className="project-slider-stage">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`${slug}-${currentSlide}`}
                    src={slides[currentSlide]}
                    alt={`${p.title} — project screen ${currentSlide + 1}`}
                    initial={{
                      opacity: 0,
                      x: 40,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      x: -40,
                    }}
                    transition={{
                      duration: 0.35,
                      ease: "easeOut",
                    }}
                  />
                </AnimatePresence>

                {/* Previous Arrow */}

                <button
                  type="button"
                  className="slider-arrow slider-arrow-left"
                  onClick={previousSlide}
                  aria-label="Previous project image"
                >
                  <ChevronLeft size={22} />
                </button>

                {/* Next Arrow */}

                <button
                  type="button"
                  className="slider-arrow slider-arrow-right"
                  onClick={nextSlide}
                  aria-label="Next project image"
                >
                  <ChevronRight size={22} />
                </button>

                {/* Counter */}

                <div className="slider-counter">
                  {String(currentSlide + 1).padStart(2, "0")}

                  <span>/</span>

                  {String(slides.length).padStart(2, "0")}
                </div>
              </div>

              {/* Slider Dots */}

              <div className="slider-dots">
                {slides.map((image, index) => (
                  <button
                    type="button"
                    key={`${image}-${index}`}
                    className={
                      index === currentSlide
                        ? "slider-dot active"
                        : "slider-dot"
                    }
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to project image ${index + 1}`}
                    aria-current={
                      index === currentSlide ? "true" : undefined
                    }
                  />
                ))}
              </div>
            </motion.div>
          ) : (
            /*
              لو المشروع عنده صورة واحدة فقط
              استخدم الـProjectVisual العادي
            */
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.98,
                y: 15,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              <ProjectVisual project={p} />
            </motion.div>
          )}

          {/* =====================================================
              PROJECT FACTS
          ===================================================== */}

          <div className="case-facts">
            <div>
              <span>My role</span>
              <p>{p.role}</p>
            </div>

            <div>
              <span>Tools Actually Used</span>
              <p>{p.tools.join(" · ")}</p>
            </div>

            <div>
              <span>Result</span>
              <p>{p.outcome}</p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CASE STUDY CONTENT
      ===================================================== */}

      <section className="section">
        <div className="container case-body">
          {/* Context */}

          <article>
            <span>01 / Context</span>

            <h2>What was happening?</h2>

            <p>{p.context}</p>
          </article>

          {/* Problem */}

          <article>
            <span>02 / Problem</span>

            <h2>What needed to improve?</h2>

            <p>{p.problem}</p>
          </article>

          {/* Approach */}

          <article>
            <span>03 / Approach</span>

            <h2>How I framed the work.</h2>

            <ul>
              {p.approach.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          {/* Solution */}

          <article>
            <span>04 / Solution</span>

            <h2>What I built or created.</h2>

            <ul>
              {p.solution.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          {/* Reflection */}

          <article>
            <span>05 / Reflection</span>

            <h2>What the work reinforced.</h2>

            <p>{p.learning}</p>
          </article>

          {/* =====================================================
              PROJECT LINKS
          ===================================================== */}

          {hasLinks && (
            <article>
              <span>06 / Links</span>

              <h2>See the work.</h2>

              <div className="actions">
                {p.liveUrl && (
                  <a
                    className="button primary"
                    href={p.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live project

                    <ExternalLink size={17} />
                  </a>
                )}

                {p.githubUrl && (
                  <a
                    className="button secondary"
                    href={p.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub

                    <Github size={17} />
                  </a>
                )}
              </div>
            </article>
          )}
        </div>
      </section>
    </Layout>
  );
}