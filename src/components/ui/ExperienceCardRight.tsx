// ExperienceCardRight.jsx
import { IoIosArrowForward } from "react-icons/io";
import { ReactElement } from "react";

interface ExperienceCardProps {
  date: string;
  title: string;
  foundation: string;
  description: string;
  logo: ReactElement;
}

const ExperienceCardRight = ({
  date,
  title,
  foundation,
  description,
  logo,
}: ExperienceCardProps) => {
  return (
    <div className="relative group">
      <div className="absolute left-1/2 -translate-x-1/2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-white/20 rounded-full p-2.5 md:p-3 z-10 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-white/40 group-hover:shadow-lg group-hover:shadow-purple-500/30">
        <div className="text-white/90 group-hover:text-white transition-colors duration-300">
          {logo}
        </div>
      </div>
      <div className="relative bg-[#1f1e24] border border-white/10 hover:border-white/20 p-5 md:p-6 w-[380px] md:w-[420px] ml-[120px] rounded-2xl md:rounded-3xl transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-1">
        <IoIosArrowForward
          className="absolute right-[-22px] top-[6px] text-white/40 group-hover:text-white/60 transition-colors duration-300"
          fontSize={32}
        />
        <p className="text-xs md:text-sm text-white/60 font-medium mb-1">{date}</p>
        <h3 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
          {title}
        </h3>
        <p className="text-sm md:text-base text-white/70 font-medium mb-3">{foundation}</p>
        <div className="text-white/70 text-sm md:text-base leading-relaxed mt-3">
          <p className="whitespace-pre-line">{description}</p>
        </div>
        
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-purple-600/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-purple-600/5 rounded-2xl md:rounded-3xl transition-all duration-500 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default ExperienceCardRight;
