import { motion } from "framer-motion";
import LeftSide from "./about/LeftSide";
import RightSide from "./about/RightSide";
import templateOneData from "../../templateOneData.json";

const About = () => {
  const data = templateOneData.About;

  return (
    <section
      id="about"
      className="flex flex-col lg:flex-row flex-wrap justify-center items-center gap-12 lg:gap-16 xl:gap-24 py-16 md:py-20 lg:py-28 relative"
    >
      <motion.div
        className="group relative w-fit h-fit p-1"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <LeftSide imgURL={data.imgUrl} availability={data.availability} />
      </motion.div>

      <motion.div 
        className="space-y-6 md:space-y-8 max-w-xl w-full"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <RightSide 
          name={data.name}
          tags={data.tags}
          description={data.description}
          resumeButton={data.resumeButton}
          links={data.links}
        />
      </motion.div>

    </section>
  );
};

export default About;
