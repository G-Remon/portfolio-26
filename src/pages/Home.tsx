import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { profile, projects, capabilities } from "../data";
import { Layout } from "../components/layout";
import { Eyebrow, SectionHeading } from "../components/Typography";
import { ProjectCard } from "../components/ProjectCard";
import { PageMeta } from "../components/PageMeta";
import { motion } from "motion/react";

export function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <Layout>
      <PageMeta 
        title="Gerges Remon — Digital Solutions, Automation, Data & Creative Technology"
        description="I turn business problems into systems, insights, and digital experiences across automation, data, AI-assisted workflows, content, design, and web."
      />
      
      <section className="hero">
        <div className="container hero-grid">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Eyebrow>Digital Solutions & Creative Technology</Eyebrow>
            <h1>
              I turn business problems into <em>systems, insights,</em> and digital experiences.
            </h1>
            <p className="hero-copy">
              I work across automation, data analysis, AI-assisted workflows, content, 
              visual communication, and web development—connecting technology and creativity 
              to build practical digital solutions.
            </p>
            <div className="actions">
              <Link className="button primary" to="/work">
                Explore my work <ArrowRight size={18} />
              </Link>
              <a className="button secondary" href={profile.resume} target="_blank" rel="noreferrer">
                Download CV
              </a>
              <Link className="quiet-link" to="/contact">
                Let’s talk
              </Link>
            </div>
          </motion.div>
          <motion.div 
            className="hero-panel"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img src="/assets/main.png" alt="Portrait of Gerges Remon" fetchPriority="high" />
            <div>
              <span>Based in Cairo</span>
              <strong>
                Business-aware.<br />
                Technical when needed.<br />
                Clear by design.
              </strong>
            </div>
          </motion.div>
        </div>
        <div className="container capability-strip">
          <span>Automation</span>
          <span>Data</span>
          <span>AI</span>
          <span>Creative</span>
          <span>Web</span>
        </div>
      </section>

      {/* NEW: WHAT I CAN HELP WITH */}
      <section className="section soft">
        <div className="container">
          <SectionHeading 
            kicker="What I can help with" 
            title="Concrete offers to solve operational friction." 
            body="I connect business context with technical execution."
          />
          <div className="capability-grid">
            {capabilities.slice(0, 3).map((c, i) => (
              <motion.article 
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span>0{i + 1}</span>
                <h3>{c.title}</h3>
                <p>{c.description}</p>
                <small>Helps with: {c.solves}</small>
              </motion.article>
            ))}
          </div>
          <div className="capability-grid" style={{ borderTop: 0, marginTop: '-25px' }}>
            {capabilities.slice(3, 6).map((c, i) => (
              <motion.article 
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i + 3) * 0.1 }}
              >
                <span>0{i + 4}</span>
                <h3>{c.title}</h3>
                <p>{c.description}</p>
                <small>Helps with: {c.solves}</small>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading 
            kicker="Selected work" 
            title="Work that connects execution to a real business need." 
            body="A mix of operational systems, analytical thinking, AI-assisted experiences, and web products." 
          />
          <div className="project-list">
            {featured.map((p, index) => (
              <ProjectCard key={p.slug} project={p} index={index} />
            ))}
          </div>
          <Link className="button secondary" to="/work">
            See all projects <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="section dark">
        <div className="container journey">
          <SectionHeading 
            kicker="Professional journey" 
            title="A broader practice, built one real need at a time." 
          />
          <div className="journey-line">
            {["Web Development", "Digital Content", "Business Automation", "Data Analysis", "AI-Assisted Workflows", "Integrated Solutions"].map((x, i) => (
              <motion.div 
                key={x}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span>{i + 1}</span>
                <p>{x}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <motion.div 
          className="container final-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Eyebrow>Have a practical problem to solve?</Eyebrow>
          <h2>Let’s turn it into a clearer system, story, or digital experience.</h2>
          <Link className="button primary" to="/contact">
            Start a conversation <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </Layout>
  );
}
