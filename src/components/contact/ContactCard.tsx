
        import { motion } from "framer-motion";

interface PreviewContactCardProps {
  title: string;
  icon: React.ReactNode;
  value: string;
  color: {
    primary: string;
    secondary: string;
    hover: string;
  };
  link?: {
    href: string;
    icon?: React.ReactNode;
  };
  additionalInfo?: string;
}

const ContactCard = ({
  title,
  icon,
  value,
  color,
  link,
  additionalInfo,
}: PreviewContactCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="relative group flex flex-col items-center justify-center p-6 md:p-8 rounded-2xl md:rounded-3xl bg-[#1f1e24] border border-white/10 hover:border-white/20 transition-all h-full hover:shadow-xl hover:shadow-purple-500/20"
    >
      {/* Gradient overlay on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color.secondary} opacity-0 group-hover:opacity-100 rounded-2xl md:rounded-3xl transition-opacity duration-500 pointer-events-none`}></div>
      
      <div className={`relative p-4 md:p-5 ${color.secondary} rounded-full mb-4 md:mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/30 z-10`}>
        {icon}
      </div>

      <h3 className={`relative text-xl md:text-2xl font-bold mb-3 md:mb-4 z-10 ${color.primary} group-hover:scale-105 transition-transform duration-300`}>
        {title}
      </h3>

      {link ? (
        <a
          href={link.href}
          className={`relative text-white/80 hover:text-white transition-all duration-300 flex items-center gap-2 justify-center group/link z-10 hover:scale-105`}
        >
          <span className="text-sm md:text-base break-all">{value}</span>
          <span className="transition-transform duration-300 group-hover/link:translate-x-1">
            {link.icon}
          </span>
        </a>
      ) : (
        <>
          <p className="relative text-white/80 text-center text-sm md:text-base mb-2 z-10">{value}</p>
          {additionalInfo && (
            <p className="relative text-white/60 text-xs md:text-sm mt-2 text-center z-10">
              {additionalInfo}
            </p>
          )}
        </>
      )}
    </motion.div>
  );
};

export default ContactCard;
