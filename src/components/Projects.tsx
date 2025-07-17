import ProjectCard from "./ui/ProjectCard";
import TitleTwo from "./ui/TitleTwo";
import templateData from "../../templateOneData.json";

const Projects = () => {
  const projects = templateData.Projects.projects;

  return (
    <section
      id="projects"
      className="my-20 md:my-32 mx-auto max-w-6xl  md:px-2"
    >
      <TitleTwo gradient={templateData.Projects.title}>My Projects</TitleTwo>

      <p className="text-base md:text-lg font-medium text-white/70 max-w-3xl text-center mx-auto mb-8 md:mb-12 ">
        Discover my creative and practical work, see how I solve problems and
        build real value
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            technologies={project.tech}
            liveDemo={project.liveDemo}
            img={project.imgSrc}
            repo={project.repo}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
