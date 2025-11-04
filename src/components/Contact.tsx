import { motion } from "framer-motion";
import TitleTwo from "./ui/TitleTwo";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import ContactCard from "./contact/ContactCard";
import templateData from "../../templateOneData.json";

const Contact = () => {
  const data = templateData.Contact.contact;

  return (
    <section
      id="contact"
      className="relative my-20 md:my-32 lg:my-40 mx-auto max-w-7xl px-4 sm:px-6 md:px-8 space-y-12 md:space-y-16"
    >
      <TitleTwo gradient={templateData.Contact.title}>Get In Touch</TitleTwo>

      <p className="text-base md:text-lg lg:text-xl font-medium text-white/75 max-w-3xl text-center mx-auto mb-12 md:mb-16 leading-relaxed">
        I'm always open to new opportunities and collaborations. Feel free to
        reach out through any of these channels.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <ContactCard
            title="Email"
            icon={<FiMail className="text-4xl md:text-5xl text-blue-400" />}
            value={data.email}
            color={{
              primary: "text-blue-400",
              secondary: "bg-blue-500/20",
              hover: "bg-blue-500/30",
            }}
            link={{
              href: `mailto:${data.email}`,
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <ContactCard
            title={"Phone & WhatsApp"}
            icon={<FiPhone className="text-4xl md:text-5xl text-green-400" />}
            value={data.phone}
            color={{
              primary: "text-green-400",
              secondary: "bg-green-500/20",
              hover: "bg-green-500/30",
            }}
            link={{
              href: `https://wa.me/${data.phone.replace(/[^0-9]/g, "")}`,
              icon: <FaWhatsapp className="text-green-400 text-xl md:text-2xl" />,
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <ContactCard
            title="Location"
            icon={<FiMapPin className="text-4xl md:text-5xl text-purple-400" />}
            value={data.location}
            color={{
              primary: "text-purple-400",
              secondary: "bg-purple-500/20",
              hover: "bg-purple-500/30",
            }}
            additionalInfo="Available for remote work worldwide"
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, amount: 0.3 }}
        className="mt-16 md:mt-20 text-center"
      >
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Looking Forward to Hearing from You!
        </h3>
        <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
          Whether you have a project in mind, a job opportunity, or just want to
          say hello, don't hesitate to reach out. I typically respond within 24
          hours.
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
