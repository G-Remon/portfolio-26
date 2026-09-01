import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "../data";
import { Layout } from "../components/layout";
import { PageIntro, Eyebrow } from "../components/Typography";
import { PageMeta } from "../components/PageMeta";
import { ContactForm } from "../components/ContactForm";
import { motion } from "motion/react";

export function Contact() {
  return (
    <Layout>
      <PageMeta 
        title="Contact Gerges Remon"
        description="Share the business problem, current workflow, or outcome you need. Let's find the best solution."
      />
      
      <PageIntro 
        eyebrow="Contact" 
        title="Tell me what needs to work better." 
        body="Share the business problem, current workflow, or outcome you need. I’ll help identify the most useful next step."
      />
      
      <section className="section compact">
        <div className="container contact-grid">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ContactForm />
          </motion.div>
          
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Eyebrow>Direct contact</Eyebrow>
            <a href={`mailto:${profile.email}`}>
              <Mail /> {profile.email}
            </a>
            {/* Direct Phone Call */}
            <a href={`tel:${profile.phone}`} target="_blank" rel="noreferrer">
              <Phone /> Call {profile.phone}
            </a>
            {/* WhatsApp Explicit Link */}
            <a href={`https://wa.me/20${profile.phone.slice(1)}`} target="_blank" rel="noreferrer">
              <Phone /> WhatsApp
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin /> LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Github /> GitHub
            </a>
            <p>
              {profile.location}<br />
              Available for on-site and remote collaboration.
            </p>
          </motion.aside>
        </div>
      </section>
    </Layout>
  );
}
