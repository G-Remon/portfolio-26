import Tags from "../ui/Tags";
import Title from "../ui/Title";
import Slider from "../ui/Slider";
import Description from "../ui/Description";
import {
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import { SiCodeforces, SiLeetcode } from "react-icons/si";

interface RightSideProps {
  name: {
    content: string;
    gradient: string;
  };
  tags: string[];
  description: {
    content: string;
    highlights: {
      start: number;
      end: number;
      color: string;
    }[];
  };
  resumeButton: {
    resumeLink: string;
    resumeGradient: string;
    resumeColor1: string;
  };
  links: {
    id: string;
    link: string;
    preview: boolean;
  }[];
}

const RightSide = ({
  name,
  tags,
  description,
  resumeButton,
  links,
}: RightSideProps) => {
  const getIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "github":
        return FaGithub;
      case "linkedin":
        return FaLinkedin;
      case "x":
        return FaXTwitter;
      case "codeforces":
        return SiCodeforces;
      case "leetcode":
        return SiLeetcode;
      default:
        return FaGithub;
    }
  };

  return (
    <>
      <Tags tags={tags} />
      <Title name={name} />
      <Slider />
      <Description
        highlights={description.highlights}
        content={description.content}
      />
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 mt-8 md:mt-10">
        <div className="relative group">
          <button
            className="btn-primary relative px-6 md:px-8 py-3 md:py-4 font-bold rounded-xl transition-all duration-300 group-hover:scale-105 cursor-pointer overflow-hidden"
            style={{
              background: resumeButton.resumeGradient,
              boxShadow: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 0 30px -5px ${resumeButton.resumeColor1}, 0 4px 20px rgba(0, 0, 0, 0.3)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <a
              href={resumeButton.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center gap-2 z-10"
            >
              <span className="bg-gradient-to-r from-white to-[#d4fff1] bg-clip-text text-transparent font-semibold text-sm md:text-base">
                View My Resume
              </span>
              <FaArrowRight className="text-white transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </button>
        </div>

        <ul className="flex items-center gap-3 md:gap-4">
          {links
            .filter(({ preview }) => preview)
            .map(({ id, link }) => {
              const IconComponent = getIcon(id);
              return (
                <li
                  className="relative group/social"
                  key={id}
                >
                  <a 
                    href={link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="relative p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover/social:scale-110 block"
                  >
                    <IconComponent
                      fontSize={28}
                      className="text-white/90 group-hover/social:text-white transition-all duration-300 drop-shadow-lg"
                    />
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover/social:opacity-100 transition-opacity duration-300"></span>
                  </a>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default RightSide;
