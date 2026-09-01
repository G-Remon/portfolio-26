import { Layout } from "../components/layout";
import { PageIntro } from "../components/Typography";
import { PageMeta } from "../components/PageMeta";
import { motion } from "motion/react";

export function About() {
  return (
    <Layout>
      <PageMeta 
        title="About Gerges Remon — Digital Solutions Specialist"
        description="From building interfaces to building connected solutions. Grounded by hands-on experience in business systems and digital communication."
      />
      
      <PageIntro 
        eyebrow="About" 
        title="I started with interfaces. Real business work widened the view." 
        body="Today, I approach digital work by understanding the problem first, then choosing the right mix of technology, data, automation, content, or design."
      />
      
      <section className="section compact">
        <div className="container about-grid">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img src="/assets/main image.png" alt="Gerges Remon portrait" />
          </motion.div>
          
          <motion.div 
            className="prose"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2>From building pages to building connected solutions.</h2>
            <p>
              I began primarily with front-end development and digital interfaces. As I became more involved 
              in real operational work, the questions changed: How can this report take less time? How can 
              this data become useful? How can a technical product be easier to understand?
            </p>
            <p>
              That work led me into business automation, data analysis, corporate communication, content systems, 
              presentations, and AI-assisted production. Front-end development remains part of the toolkit, but it 
              no longer defines the whole practice.
            </p>
            <p>
              I now work at the intersection of business systems and digital communication—grounded by hands-on 
              experience in an engineering and construction-solutions environment.
            </p>
            
            <div className="about-note">
              <strong>Working principle</strong>
              <p>
                Understand the business problem first. Build only what improves clarity, execution, or decision-making.
              </p>
            </div>
          </motion.div>
        </div>
        
        <div className="container timeline">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span>2023–2027</span>
            <h3>Computer Science</h3>
            <p>New Cairo Academy</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <span>2024–2025</span>
            <h3>Front-End Development</h3>
            <p>150+ training hours at Route Academy</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <span>Current practice</span>
            <h3>Integrated Digital Solutions</h3>
            <p>Automation, data, AI-assisted workflows, content, design, and web.</p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
