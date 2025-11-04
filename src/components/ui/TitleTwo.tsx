interface titleTwoProps {
  children: string;
  gradient: string;
}

const TitleTwo = ({ children, gradient }: titleTwoProps) => {
  return (
    <>
      <h1 className="relative font-bold tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-6 md:mb-8">
        <span className="relative inline-block">
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-purple-500 animate-gradient"
            style={{
              backgroundImage: gradient,
              backgroundSize: "200% 200%",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {children}
          </span>

          <span className="absolute -bottom-2 left-0 right-0 h-2 sm:h-3 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-purple-600/30 blur-lg rounded-full"></span>
        </span>
      </h1>
    </>
  );
};

export default TitleTwo;
