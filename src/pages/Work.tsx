import { useState, useMemo } from "react";
import { projects } from "../data";
import { Layout } from "../components/layout";
import { PageIntro } from "../components/Typography";
import { ProjectCard } from "../components/ProjectCard";
import { PageMeta } from "../components/PageMeta";

export function Work() {
  const cats = ["All", "Automation", "Data", "AI", "Creative", "Web", "Business Systems"];
  const [filter, setFilter] = useState("All");

  const list = useMemo(() => 
    filter === "All" ? projects : projects.filter(p => p.category.includes(filter))
  , [filter]);

  return (
    <Layout>
      <PageMeta 
        title="Projects & Case Studies — Gerges Remon"
        description="A portfolio of connected digital solutions across business automation, data analytics, web development, and technical communication."
      />
      <PageIntro 
        eyebrow="Selected projects" 
        title="Proof lives in the work." 
        body="Projects are presented around the problem, my actual role, the process, and the result—without invented metrics or vague technology lists."
      />
      <section className="section compact">
        <div className="container">
          <div className="filters" aria-label="Filter projects">
            {cats.map(c => (
              <button 
                className={filter === c ? "active" : ""} 
                onClick={() => setFilter(c)} 
                key={c}
                aria-pressed={filter === c}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="project-list">
            {list.map((p, index) => (
              <ProjectCard key={p.slug} project={p} index={index} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
