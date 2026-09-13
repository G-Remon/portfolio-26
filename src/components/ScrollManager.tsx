import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export function ScrollManager() {
  const location = useLocation();
  const navigationType = useNavigationType();

  const storageKey = `scroll:${location.pathname}${location.search}${location.hash}`;

  // Continuously record scroll position for current route in sessionStorage
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          sessionStorage.setItem(storageKey, window.scrollY.toString());
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      // Save final scroll position before route unmounts
      sessionStorage.setItem(storageKey, window.scrollY.toString());
      window.removeEventListener("scroll", handleScroll);
    };
  }, [storageKey]);

  // Handle scroll position restoration or scroll to top/hash on navigation
  useEffect(() => {
    const isPopNavigation = navigationType === "POP";
    const hash = location.hash;

    if (hash) {
      // Hash navigation (e.g. /#certificates)
      const timer = setTimeout(() => {
        const elem = document.querySelector(hash);
        if (elem) {
          elem.scrollIntoView({
            behavior: isPopNavigation ? "auto" : "smooth",
          });
        }
      }, 50);

      return () => clearTimeout(timer);
    } else if (isPopNavigation) {
      // Browser Back / Forward / Refresh
      const savedPosition = sessionStorage.getItem(storageKey);
      if (savedPosition !== null) {
        const top = parseInt(savedPosition, 10);
        // Use double rAF to wait for DOM layout & AnimatePresence to settle
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            window.scrollTo({ top, behavior: "auto" });
          });
        });
      } else {
        window.scrollTo({ top: 0, behavior: "auto" });
      }
    } else {
      // Normal PUSH / REPLACE navigation to new route
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [location.pathname, location.search, location.hash, navigationType, storageKey]);

  return null;
}
