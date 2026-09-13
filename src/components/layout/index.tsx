import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ExternalLink, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { profile } from "../../data";
import { ThemeToggle } from "../ThemeToggle";
import { motion, AnimatePresence } from "motion/react";

const nav = [
  ["/", "Home"],
  ["/work", "Work"],
  ["/#certificates", "Certificates"],
  ["/capabilities", "Capabilities"],
  ["/about", "About"],
  ["/contact", "Contact"],
];

function ScrollTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const elem = document.querySelector(hash);
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (to: string) => {
    setOpen(false);
    if (to.includes("#")) {
      const hash = to.substring(to.indexOf("#"));
      if (location.pathname === "/") {
        const elem = document.querySelector(hash);
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

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
            className="menu-button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        <nav
          className={open ? "main-nav open" : "main-nav"}
          aria-label="Primary navigation"
        >
          {nav.map(([to, label]) => {
            const isHashLink = to.includes("#");
            return isHashLink ? (
              <a
                key={to}
                href={to}
                onClick={(e) => {
                  if (location.pathname === "/") {
                    e.preventDefault();
                  }
                  handleNavClick(to);
                }}
                className={location.hash === "#certificates" ? "active" : ""}
              >
                {label}
              </a>
            ) : (
              <NavLink
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive && !location.hash ? "active" : ""
                }
                end={to === "/"}
              >
                {label}
              </NavLink>
            );
          })}
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
