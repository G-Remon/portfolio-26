import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import type { Project } from "../data";

export function ProjectVisual({ project }: { project: Project }) {
  const imageSrc = project.visualEvidence && project.visualEvidence.length > 0 ? project.visualEvidence[0] : null;
  
  return (
    <div className={imageSrc ? "project-visual has-image" : "project-visual system-visual"}>
      {imageSrc ? (
        <img src={imageSrc} alt={`${project.title} interface preview`} loading="lazy" />
      ) : (
        <div style={{ padding: '40px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <span style={{ fontSize: '10px', letterSpacing: '0.12em', color: 'var(--navy)', fontWeight: 800, textTransform: 'uppercase' }}>
            Visual Evidence
          </span>
          <p style={{ fontSize: '16px', color: 'var(--slate)', margin: 0, fontWeight: 500, lineHeight: 1.4 }}>
            Confidential work — process shown with anonymized information
          </p>
        </div>
      )}
    </div>
  );
}

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <motion.article 
      className="project-card"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <ProjectVisual project={project} />
      <div className="project-copy">
        <div className="tag-row">
          {project.category.map(c => <span key={c}>{c}</span>)}
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
            <dd>{project.result}</dd>
          </div>
        </dl>
        <div className="tool-row">
          {project.tools.slice(0, 4).map(t => <span key={t}>{t}</span>)}
        </div>
        <Link className="text-link" to={`/work/${project.slug}`}>
          View case study <ArrowRight size={17} />
        </Link>
      </div>
    </motion.article>
  );
}
