import TitleTwo from "./ui/TitleTwo";
import ExperienceCardLeft from "./ui/ExperienceCardLeft";
import ExperienceCardRight from "./ui/ExperienceCardRight";
import { useState, useEffect } from "react";
import { FaGraduationCap, FaCode, FaLaptopCode } from "react-icons/fa";
import templateData from "../../templateOneData.json";

const Experience = () => {
  const data = templateData.Experiences.experience;
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1250);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getIconComponent = (iconName?: string) => {
    switch (iconName) {
      case "Education":
        return <FaGraduationCap className="w-6 h-6" />;
      case "Development":
        return <FaCode className="w-6 h-6" />;
      case "Programming":
        return <FaLaptopCode className="w-6 h-6" />;
      default:
        return <FaGraduationCap className="w-6 h-6" />;
    }
  };

  return (
    <section
      id="experience"
      className="relative my-20 md:my-32 lg:my-40 mx-auto max-w-7xl px-4 sm:px-6 md:px-8 space-y-8 md:space-y-12"
    >
      <TitleTwo gradient={templateData.Experiences.title}>
        My Experience
      </TitleTwo>

      {isLargeScreen ? (
        <>
          <div className="absolute left-1/2 w-0.5 md:w-1 h-full bg-gradient-to-b from-blue-500/60 via-purple-500/60 to-purple-600/60 transform -translate-x-1/2 rounded-full" />
          <ul className="py-4 md:py-8 space-y-12 md:space-y-16 relative">
            {data.map((item, index) => {
              if (item.left === true) {
                return (
                  <div key={index} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                    <ExperienceCardLeft
                      date={item.period || ""}
                      title={item.title}
                      foundation={item.company}
                      description={item.description}
                      logo={getIconComponent(item.icon)}
                      small={false}
                    />
                  </div>
                );
              } else {
                return (
                  <div key={index} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                    <ExperienceCardRight
                      date={item.period || ""}
                      title={item.title}
                      foundation={item.company}
                      description={item.description}
                      logo={getIconComponent(item.icon)}
                    />
                  </div>
                );
              }
            })}
          </ul>
        </>
      ) : (
        <>
          <div className="absolute left-4 md:left-8 w-0.5 md:w-1 h-full bg-gradient-to-b from-blue-500/60 via-purple-500/60 to-purple-600/60 rounded-full" />
          <ul className="space-y-12 md:space-y-16 ml-8 md:ml-12">
            {data.map((item, index) => (
              <div key={index} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <ExperienceCardLeft
                  date={item.period || ""}
                  title={item.title}
                  foundation={item.company}
                  description={item.description}
                  logo={getIconComponent(item.icon)}
                  small={true}
                />
              </div>
            ))}
          </ul>
        </>
      )}
    </section>
  );
};

export default Experience;
