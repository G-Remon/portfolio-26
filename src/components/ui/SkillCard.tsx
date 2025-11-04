import { IconType } from "react-icons";
import { TbBrandCpp } from "react-icons/tb";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiGithub,
  SiGit,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiDjango,
  SiFlask,
  SiSpring,
  SiPhp,
  SiSharp,
  SiDotnet,
  SiRuby,
  SiRubyonrails,
  SiVuedotjs,
  SiAngular,
  SiSvelte,
  SiNuxtdotjs,
  SiGatsby,
  SiFirebase,
  SiAmazon,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiGrafana,
  SiElasticsearch,
  SiJest,
  SiMocha,
  SiCypress,
  SiSelenium,
  SiFigma,
  SiAdobexd,
  SiAdobephotoshop,
  SiWordpress,
  SiShopify,
  SiWebpack,
  SiVite,
  SiSass,
  SiLess,
  SiStyledcomponents,
  SiSwift,
  SiKotlin,
  SiDart,
  SiFlutter,
  SiReactivex,
  SiGraphql,
  SiApollographql,
  SiElixir,
  SiGo,
  SiRust,
  SiWebgl,
  SiThreedotjs,
  SiElectron,
  SiRaspberrypi,
  SiArduino,
} from "react-icons/si";

interface SkillCardProps {
  icon: string;
  name: string;
  color: string;
  index: number;
  isEditing?: boolean;
  onDelete?: (name: string) => void;
}

const getIconComponent = (iconName: string): IconType => {
  const iconMap: { [key: string]: IconType } = {
    TbBrandCpp,
    SiPython,
    SiJavascript,
    SiTypescript,
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiBootstrap,
    SiReact,
    SiNextdotjs,
    SiRedux,
    SiGithub,
    SiGit,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiPostgresql,
    SiMysql,
    SiDjango,
    SiFlask,
    SiSpring,
    SiPhp,
    SiSharp,
    SiDotnet,
    SiRuby,
    SiRubyonrails,
    SiVuedotjs,
    SiAngular,
    SiSvelte,
    SiNuxtdotjs,
    SiGatsby,
    SiFirebase,
    SiAmazon,
    SiGooglecloud,
    SiDocker,
    SiKubernetes,
    SiGrafana,
    SiElasticsearch,
    SiJest,
    SiMocha,
    SiCypress,
    SiSelenium,
    SiFigma,
    SiAdobexd,
    SiAdobephotoshop,
    SiWordpress,
    SiShopify,
    SiWebpack,
    SiVite,
    SiSass,
    SiLess,
    SiStyledcomponents,
    SiSwift,
    SiKotlin,
    SiDart,
    SiFlutter,
    SiReactivex,
    SiGraphql,
    SiApollographql,
    SiElixir,
    SiGo,
    SiRust,
    SiWebgl,
    SiThreedotjs,
    SiElectron,
    SiRaspberrypi,
    SiArduino,
  };

  return iconMap[iconName] || SiReact;
};

const SkillCard = ({ icon, name, color, index }: SkillCardProps) => {
  const IconComponent = getIconComponent(icon);

  return (
    <div
      className={`group relative flex flex-col items-center justify-center p-4 md:p-6 bg-[#1f1e24] rounded-xl md:rounded-2xl 
      transition-all duration-500 hover:bg-[#28262f] hover:transform hover:scale-110 hover:-translate-y-3
      opacity-0 animate-fade-in-up border border-white/5 hover:border-white/20
      shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-purple-500/20`}
      style={{
        animationDelay: `${index * 0.05}s`,
      }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-purple-600/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-purple-600/10 rounded-xl md:rounded-2xl transition-all duration-500 pointer-events-none"></div>
      
      <div
        className={`text-3xl md:text-4xl mb-3 md:mb-4 transition-all duration-500 group-hover:scale-125 group-hover:-translate-y-2 
        relative z-10 group-hover:drop-shadow-2xl`}
        style={{ color }}
      >
        <IconComponent />
      </div>

      <span
        className={`relative text-white font-medium text-sm md:text-base text-center
        transition-all duration-500 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text z-10`}
      >
        {name}
      </span>
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{
        boxShadow: `0 0 30px ${color}40`,
      }}></div>
    </div>
  );
};

export default SkillCard;
