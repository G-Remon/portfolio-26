import { motion } from "framer-motion";
import LeftSide from "./about/LeftSide";
import RightSide from "./about/RightSide";
import templateOneData from "../../templateOneData.json";

const About = () => {
  const data = templateOneData.About;

  return (
    <section
      id="about"
      className="flex flex-wrap justify-center gap-28 py-20 relative"
    >
      <motion.div
        className="group relative w-fit h-fit p-1"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <LeftSide imgURL={data.imgUrl} availability={data.availability} />
      </motion.div>


      <div className="space-y-6 max-w-xl">
        <RightSide 
          name={data.name}
          tags={data.tags}
          description={data.description}
          resumeButton={data.resumeButton}
          links={data.links}
        />
      </div>

    </section>
  );
};

export default About;
