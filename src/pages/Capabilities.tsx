import { capabilities } from "../data";
import { Layout } from "../components/layout";
import { PageIntro, Eyebrow } from "../components/Typography";
import { PageMeta } from "../components/PageMeta";
import { motion } from "motion/react";

export function Capabilities() {
  return (
    <Layout>
      <PageMeta 
        title="Automation, Data, AI, Creative & Web — Gerges Remon"
        description="I choose the discipline around the problem, offering business automation, data analytics, web development, and digital content."
      />
      
      <PageIntro 
        eyebrow="Capabilities" 
        title="Technology, communication, and business context—working together." 
        body="I choose the discipline around the problem, not the other way around."
      />
      
      <section className="section compact">
        <div className="container capability-detail">
          {capabilities.map((c, i) => (
            <motion.article 
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span>0{i + 1}</span>
              <div>
                <h2>{c.title}</h2>
                <p>{c.description}</p>
              </div>
              <div>
                <small>Problems it helps solve</small>
                <p>{c.solves}</p>
              </div>
              <div className="tool-row">
                {c.tools.map(t => <span key={t}>{t}</span>)}
              </div>
            </motion.article>
          ))}
        </div>
        
        <motion.div 
          className="container learning"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Eyebrow>Continuous development</Eyebrow>
          <h2>Currently deepening the analytical side of the practice.</h2>
          <p>
            Data analysis, business intelligence, SQL, Power BI, exploratory analysis, 
            and responsible AI-assisted workflows.
          </p>
        </motion.div>
      </section>
    </Layout>
  );
}
