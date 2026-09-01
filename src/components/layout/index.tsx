import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ExternalLink, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { profile } from "../../data";
import { motion, AnimatePresence } from "motion/react";

const nav = [
  ["/", "Home"],
  ["/work", "Work"],
  ["/capabilities", "Capabilities"],
  ["/about", "About"],
  ["/contact", "Contact"]
];

function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

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
        
        <button 
          className="menu-button" 
          onClick={() => setOpen(!open)} 
          aria-expanded={open} 
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
        
        <nav className={open ? "main-nav open" : "main-nav"} aria-label="Primary navigation">
          {nav.map(([to, label]) => (
            <NavLink 
              key={to} 
              to={to} 
              onClick={() => setOpen(false)} 
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {label}
            </NavLink>
          ))}
          <a className="nav-cta" href={profile.resume} target="_blank" rel="noreferrer">
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
          <p>Turning business problems into systems, insights, and digital experiences.</p>
        </div>
        <div className="footer-links">
          {nav.slice(1).map(([to, label]) => (
            <Link key={to} to={to}>{label}</Link>
          ))}
        </div>
        <div className="socials">
          <a href={profile.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin /></a>
          <a href={profile.github} aria-label="GitHub" target="_blank" rel="noreferrer"><Github /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email"><Mail /></a>
        </div>
      </div>
      <div className="container footer-bottom">
        © {new Date().getFullYear()} Gerges Remon. Built with purpose in Cairo.
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollTop />
      <Header />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={useLocation().pathname}
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
