import { ReactNode } from "react";
import { motion } from "motion/react";

export const Eyebrow = ({ children }: { children: ReactNode }) => (
  <motion.p 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="eyebrow"
  >
    {children}
  </motion.p>
);

export function SectionHeading({ kicker, title, body }: { kicker: string, title: string, body?: string }) {
  return (
    <div className="section-head">
      <Eyebrow>{kicker}</Eyebrow>
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {title}
      </motion.h2>
      {body && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {body}
        </motion.p>
      )}
    </div>
  );
}

export function PageIntro({ eyebrow, title, body }: { eyebrow: string, title: string, body: string }) {
  return (
    <section className="page-intro">
      <div className="container">
        <Eyebrow>{eyebrow}</Eyebrow>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {body}
        </motion.p>
      </div>
    </section>
  );
}
