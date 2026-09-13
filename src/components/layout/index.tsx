import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../../data";
import { ThemeToggle } from "../ThemeToggle";
import { ScrollManager } from "../ScrollManager";
import { BackButton } from "../BackButton";
import { motion, AnimatePresence } from "motion/react";

const nav = [
  ["/", "Home"],
  ["/work", "Work"],
  ["/certificates", "Certificates"],
  ["/capabilities", "Capabilities"],
  ["/about", "About"],
  ["/contact", "Contact"],
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link to="/" className="brand" aria-label="Gerges Remon home">
          <span>GR</span>
          <div>
            Gerges Remon
            <small>Digital Solutions & Creative Technology</small>
          </div>
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <ThemeToggle />

          <button
            type="button"
            className={open ? "menu-button open" : "menu-button"}
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close navigation" : "Open navigation"}
            title={open ? "Close navigation" : "Open navigation"}
          >
            <span className="menu-icon-box" aria-hidden="true">
              <span className="menu-line top-line" />
              <span className="menu-line mid-line" />
              <span className="menu-line bot-line" />
            </span>
          </button>
        </div>

        <nav
          className={open ? "main-nav open" : "main-nav"}
          aria-label="Primary navigation"
        >
          {nav.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? "active" : "")}
              end={to === "/"}
            >
              {label}
            </NavLink>
          ))}
          <a
            className="nav-cta"
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
          >
            Resume <ExternalLink size={15} />
          </a>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div>
          <strong>{profile.name}</strong>
          <p>
            Turning business problems into systems, insights, and digital
            experiences.
          </p>
        </div>
        <div className="footer-links">
          {nav.slice(1).map(([to, label]) => (
            <Link key={to} to={to}>
              {label}
            </Link>
          ))}
        </div>
        <div className="socials">
          <a
            href={profile.linkedin}
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin />
          </a>
          <a
            href={profile.github}
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <Github />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <Mail />
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        © {new Date().getFullYear()} Gerges Remon. Built with purpose in Cairo.
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <>
      <ScrollManager />
      <Header />
      <BackButton />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
