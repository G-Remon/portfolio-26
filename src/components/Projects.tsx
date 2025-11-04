import ProjectCard from "./ui/ProjectCard";
import TitleTwo from "./ui/TitleTwo";
import templateData from "../../templateOneData.json";

const Projects = () => {
  const projects = templateData.Projects.projects;

  return (
    <section
      id="projects"
      className="my-20 md:my-32 lg:my-40 mx-auto max-w-7xl px-4 sm:px-6 md:px-8"
    >
      <TitleTwo gradient={templateData.Projects.title}>My Projects</TitleTwo>

      <p className="text-base md:text-lg lg:text-xl font-medium text-white/75 max-w-3xl text-center mx-auto mb-12 md:mb-16 leading-relaxed">
        Discover my creative and practical work, see how I solve problems and
        build real value
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              technologies={project.tech}
              liveDemo={project.liveDemo}
              img={project.imgSrc}
              repo={project.repo}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
