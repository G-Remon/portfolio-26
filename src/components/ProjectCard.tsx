import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Maximize2 } from "lucide-react";
import { motion } from "motion/react";
import type { Project } from "../data";
import { ImageLightbox } from "./ImageLightbox";

export function ProjectVisual({ project }: { project: Project }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const images =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : project.image
        ? [project.image]
        : [];

  return (
    <>
      <div
        className={
          project.image
            ? "project-visual has-image"
            : "project-visual system-visual"
        }
        onClick={(e) => {
          // Stop click from bubbling up to the card — image opens lightbox only
          e.stopPropagation();
          if (project.image) {
            setLightboxOpen(true);
          }
        }}
        role={project.image ? "button" : undefined}
        tabIndex={project.image ? 0 : undefined}
        onKeyDown={(e) => {
          if (project.image && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            e.stopPropagation();
            setLightboxOpen(true);
          }
        }}
        aria-label={
          project.image
            ? `View full size preview for ${project.title}`
            : undefined
        }
      >
        {project.image ? (
          <>
            <img
              src={project.image}
              alt={`${project.title} project preview`}
              loading="lazy"
              onError={(e) => {
                console.error(
                  `Failed to load project image: ${project.image}`
                );
                e.currentTarget.style.display = "none";
              }}
            />

            <span className="image-expand-badge">
              <Maximize2 size={13} aria-hidden="true" />
              View full size
            </span>
          </>
        ) : (
          <div className="project-no-image">
            <span>Visual Evidence</span>
            <p>Project documentation available inside the case study.</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && images.length > 0 && (
        <ImageLightbox
          images={images}
          altPrefix={project.title}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}

export function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  const navigate = useNavigate();

  const handleCardClick = (e: React.MouseEvent<HTMLElement>) => {
    // Do not navigate if the user clicked a nested interactive element
    const target = e.target as HTMLElement;
    const isInteractive = target.closest(
      "button, a, [role='button'], input, select, textarea, .project-visual"
    );
    if (isInteractive) return;

    navigate(`/work/${project.slug}`);
  };

  const handleCardKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      navigate(`/work/${project.slug}`);
    }
  };

  return (
    <motion.article
      className="project-card"
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
      tabIndex={0}
      role="link"
      aria-label={`View case study for ${project.title}`}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: Math.min(index * 0.06, 0.25),
      }}
    >
      {/* PROJECT IMAGE — has its own click handler for lightbox */}
      <ProjectVisual project={project} />

      {/* PROJECT CONTENT */}
      <div className="project-copy">
        <div className="tag-row">
          {project.category.map((category) => (
            <span key={category}>{category}</span>
          ))}
        </div>

        <h3>{project.title}</h3>

        <p>{project.summary}</p>

        <dl>
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>

          <div>
            <dt>Result</dt>
            <dd>{project.outcome}</dd>
          </div>
        </dl>

        <div className="tool-row">
          {project.tools.slice(0, 4).map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>

        {/* This Link stops propagation itself since <a> is intercepted by the guard */}
        <Link
          className="text-link"
          to={`/work/${project.slug}`}
          onClick={(e) => e.stopPropagation()}
        >
          View case study
          <ArrowRight size={17} />
        </Link>
      </div>
    </motion.article>
  );
}