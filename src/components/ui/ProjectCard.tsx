import { FaGithub } from "react-icons/fa";
import { IoPlayCircleOutline } from "react-icons/io5";

interface Technology {
  name: string;
  color: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: Technology[];
  liveDemo: string;
  repo: string;
  img: string;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  liveDemo,
  repo,
  img,
}: ProjectCardProps) => {
  return (
    <div className="relative group h-full">
      <div className="relative h-full p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 rounded-2xl md:rounded-3xl group transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/30">
        <div className="bg-[#1f1e24] p-5 md:p-6 rounded-2xl md:rounded-3xl h-full space-y-5 md:space-y-6 relative overflow-hidden border border-white/5">
          {/* Gradient Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-purple-600/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-purple-600/10 transition-all duration-500 pointer-events-none"></div>
          
          <div className="aspect-video overflow-hidden rounded-xl md:rounded-2xl border border-white/10 relative group-hover:border-white/20 transition-all duration-300">
            <img
              src={img}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          <div className="flex flex-col justify-between space-y-5 md:space-y-6 relative z-10">
            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
              {title}
            </h3>
            <p className="text-white/70 leading-relaxed text-sm md:text-base line-clamp-4">{description}</p>      
            
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className={`px-3 py-1.5 text-xs md:text-sm font-medium rounded-lg bg-white/5 border border-white/10 hover:border-white/20 ${tech.color} transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
            
            <div className="flex gap-3 pt-2">
              {liveDemo && (
                <a
                  href={liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center justify-center gap-2 px-4 py-2.5 flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl transition-all relative overflow-hidden font-semibold text-sm md:text-base group/btn"
                >
                  <IoPlayCircleOutline className="w-5 h-5 transition-transform duration-300 group-hover/btn:scale-110" />
                  <span className="tracking-wide">Live Demo</span>
                </a>
              )}

              {repo && (
                <a
                  href={repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 flex-1 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white rounded-xl transition-all relative overflow-hidden font-semibold text-sm md:text-base group/btn"
                >
                  <FaGithub className="w-5 h-5 transition-transform duration-300 group-hover/btn:scale-110" />
                  <span className="tracking-wide">GitHub</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
