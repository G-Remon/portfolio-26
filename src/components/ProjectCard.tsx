import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import type { Project } from "../data";

export function ProjectVisual({
  project,
}: {
  project: Project;
}) {
  return (
    <div
      className={
        project.image
          ? "project-visual has-image"
          : "project-visual system-visual"
      }
    >
      {project.image ? (
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
      ) : (
        <div className="project-no-image">
          <span>Visual Evidence</span>

          <p>
            Project documentation available inside the case study.
          </p>
        </div>
      )}
    </div>
  );
}

export function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  return (
    <motion.article
      className="project-card"
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.5,
        delay: Math.min(index * 0.06, 0.25),
      }}
    >
      {/* ===============================
          PROJECT IMAGE
      =============================== */}

      <ProjectVisual project={project} />

      {/* ===============================
          PROJECT CONTENT
      =============================== */}

      <div className="project-copy">

        {/* Categories */}

        <div className="tag-row">
          {project.category.map((category) => (
            <span key={category}>
              {category}
            </span>
          ))}
        </div>

        {/* Title */}

        <h3>{project.title}</h3>

        {/* Summary */}

        <p>{project.summary}</p>

        {/* Details */}

        <dl>
          <div>
            <dt>Role</dt>

            <dd>
              {project.role}
            </dd>
          </div>

          <div>
            <dt>Result</dt>

            <dd>
              {project.outcome}
            </dd>
          </div>
        </dl>

        {/* Tools */}

        <div className="tool-row">
          {project.tools
            .slice(0, 4)
            .map((tool) => (
              <span key={tool}>
                {tool}
              </span>
            ))}
        </div>

        {/* Case Study Link */}

        <Link
          className="text-link"
          to={`/work/${project.slug}`}
        >
          View case study

          <ArrowRight size={17} />
        </Link>
      </div>
    </motion.article>
  );
}