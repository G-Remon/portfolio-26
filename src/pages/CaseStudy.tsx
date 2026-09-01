import { useParams, Link } from "react-router-dom";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data";
import { Layout } from "../components/layout";
import { ProjectVisual } from "../components/ProjectCard";
import { PageMeta } from "../components/PageMeta";
import { NotFound } from "./NotFound";
import { motion } from "motion/react";

export function CaseStudy() {
  const { slug } = useParams();
  const p = projects.find(x => x.slug === slug);

  if (!p) {
    return <NotFound />;
  }

  const hasLinks = p.liveUrl || p.githubUrl;

  return (
    <Layout>
      <PageMeta 
        title={`${p.title} — Gerges Remon`}
        description={p.summary}
        image={p.image}
      />
      
      <section className="case-hero">
        <div className="container">
          <Link className="back" to="/work">← Back to work</Link>
          <div className="tag-row">
            {p.category.map(c => <span key={c}>{c}</span>)}
          </div>
          <h1>{p.title}</h1>
          <p>{p.summary}</p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <ProjectVisual project={p} />
          </motion.div>
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

      <section className="section">
        <div className="container case-body">
          <article>
            <span>01 / Context</span>
            <h2>What was happening?</h2>
            <p>{p.context}</p>
          </article>
          
          <article>
            <span>02 / Problem</span>
            <h2>What needed to improve?</h2>
            <p>{p.problem}</p>
          </article>

          <article>
            <span>03 / Approach</span>
            <h2>How I framed the work.</h2>
            <ul>
              {p.approach.map(x => <li key={x}>{x}</li>)}
            </ul>
          </article>

          <article>
            <span>04 / Solution</span>
            <h2>What I built or created.</h2>
            <ul>
              {p.solution.map(x => <li key={x}>{x}</li>)}
            </ul>
          </article>

          <article>
            <span>05 / Reflection</span>
            <h2>What the work reinforced.</h2>
            <p>{p.learning}</p>
          </article>

          {hasLinks && (
            <article>
              <span>06 / Links</span>
              <h2>See the work.</h2>
              <div className="actions">
                {p.liveUrl && (
                  <a className="button primary" href={p.liveUrl} target="_blank" rel="noreferrer">
                    Live project <ExternalLink size={17} />
                  </a>
                )}
                {p.githubUrl && (
                  <a className="button secondary" href={p.githubUrl} target="_blank" rel="noreferrer">
                    GitHub <Github size={17} />
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
