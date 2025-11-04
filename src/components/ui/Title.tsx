interface TitleProps {
  name: {
    content: string;
    gradient: string;
  };
}

const Title = ({ name }: TitleProps) => {
  return (
    <>
      <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight mb-4">
        <span className="text-white/90">Hello, I am</span>
        <span className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl inline-block ml-2 sm:ml-3">
          <span
            className="relative outline-none focus:border-b-2 focus:border-purple-500 animate-gradient"
            style={{
              backgroundImage: name.gradient,
              backgroundSize: "200% 200%",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {name.content}
          </span>

          <span className="absolute -bottom-1 left-0 right-0 h-2 sm:h-3 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-purple-600/30 blur-lg rounded-full" />
        </span>
      </h1>
    </>
  );
};

export default Title;
