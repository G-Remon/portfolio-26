import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import type { Project } from "../data";

export function ProjectVisual({ project, onClick }: { project: Project; onClick?: () => void }) {
  return (
    <div
      className={
        project.image
          ? "project-visual has-image"
          : "project-visual system-visual"
      }
      onClick={onClick}
    >
      {project.image ? (
        <img
          src={project.image}
          alt={`${project.title} project preview`}
          loading="lazy"
          onError={(e) => {
            console.error(`Failed to load project image: ${project.image}`);
            e.currentTarget.style.display = "none";
          }}
        />
      ) : (
        <div className="project-no-image">
          <span>Visual Evidence</span>
          <p>Project documentation available inside the case study.</p>
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
  const navigate = useNavigate();

  const handleCardClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    // Allow existing <a> links to handle themselves
    if (target.closest("a")) return;
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
      {/* PROJECT IMAGE — clicks navigate to case study */}
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