import { useState } from "react";
import { projects } from "../data";
import { Layout } from "../components/layout";
import { ProjectCard } from "../components/ProjectCard";
import { PageMeta } from "../components/PageMeta";

const filters = [
  "All",
  "Automation",
  "Data",
  "AI",
  "Creative",
  "Web",
  "Business Systems",
] as const;

type Filter = (typeof filters)[number];

const filterMap: Record<Exclude<Filter, "All">, string[]> = {
  Automation: [
    "Automation",
    "Automation & Business Systems",
  ],

  Data: [
    "Data",
    "Data & Analytics",
  ],

  AI: [
    "AI",
    "AI-Assisted Workflows",
  ],

  Creative: [
    "Creative",
    "Content & Visual Communication",
    "Design & Presentation",
    "Brand Communication",
    "Marketing",
  ],

  Web: [
    "Web",
    "Web & Front-End Development",
  ],

  "Business Systems": [
    "Business Systems",
    "Automation & Business Systems",
  ],
};

export function Work() {
  const [activeFilter, setActiveFilter] =
    useState<Filter>("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) =>
          project.category.some((category) =>
            filterMap[activeFilter].includes(category)
          )
        );

  return (
    <Layout>
      <PageMeta
        title="Work — Gerges Remon"
        description="Selected projects across automation, data analytics, AI-assisted workflows, visual communication, business systems, and front-end development."
      />

      <section className="page-intro">
        <div className="container">
          <p className="eyebrow">
            Selected Work
          </p>

          <h1>
            Systems, insights,
            <br />
            communication &
            <br />
            digital experiences.
          </h1>

          <p>
            A selection of real and practical work across
            automation, analytics, AI-assisted workflows,
            marketing, design, business systems, and web
            development.
          </p>
        </div>
      </section>

      <section className="section compact">
        <div className="container">

          {/* FILTER BUTTONS */}

          <div className="filters">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={
                  activeFilter === filter
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setActiveFilter(filter)
                }
              >
                {filter}
              </button>
            ))}
          </div>

          {/* PROJECTS */}

          <div className="project-list">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
              />
            ))}
          </div>

          {/* EMPTY STATE */}

          {filteredProjects.length === 0 && (
            <div className="empty-projects">
              <p>
                No projects found in this category.
              </p>
            </div>
          )}

        </div>
      </section>
    </Layout>
  );
}