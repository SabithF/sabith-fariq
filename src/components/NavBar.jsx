import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Hamburger from "./other_components/Hamburger";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const NavBar = () => {
  const navRef = useRef(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeId, setActiveId] = useState(null);

  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsNavOpen(false);
  }, [location.pathname]);

  // Close when clicked outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsNavOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside, { passive: true });
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Detect scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      {
        threshold: [0.25, 0.5, 0.75],
        rootMargin: "-20% 0px -40% 0px",
      }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const ContainerClass = [
    // mobile/base
    "fixed top-6 left-0 right-0 z-50 text-white",
    "transition-[margin,background,border-radius,box-shadow,backdrop-filter,border] duration-300 ease-in-out",
    // desktop-only
    isScrolled
      ? "md:mx-[20%] md:rounded-3xl md:bg-slate-900/20 md:backdrop-blur-md md:border md:border-white/10 md:shadow-lg"
      : "md:mx-[10%] md:rounded-none md:bg-transparent md:backdrop-blur-0 md:border md:border-transparent md:shadow-none",
  ].join(" ");

  const LiveDot = () => (
    <span className="relative mr-2 inline-flex h-2.5 w-2.5">
      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400/70 animate-ping" />
      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
    </span>
  );

  return (
    <nav ref={navRef} className={ContainerClass} role="navigation" aria-label="Main">
      <div className="flex items-center justify-between px-10 py-3">
        <a href="#hero" className="font-Dancing text-liveButton rounded-full focus:outline-none">
          SF
        </a>

        {/* Desktop menu */}
        <div className="hidden md:block text-textGray">
          <ul className="flex gap-5">
            {SECTIONS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={[
                    "hover:text-textWhite cursor-pointer transition-colors",
                    activeId === id ? "text-liveButton" : "",
                  ].join(" ")}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <Hamburger
            isOpen={isNavOpen}
            onToggle={() => setIsNavOpen((v) => !v)}
            ariaControls="mobile-menu"
          />
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isNavOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 0.3 } }}
              exit={{ opacity: 0 }}
              id="mobile-menu"
              className="absolute top-full right-10 z-50 rounded-3xl border-t border-white/10 bg-slate-900/90 backdrop-blur text-white"
            >
              <ul className="gap-3 py-6 px-6 rounded-xl min-w-44">
                {SECTIONS.map(({ id, label }) => (
                  <li
                    key={id}
                    className="hover:text-textWhite border-b border-blue-200/30 mt-3 first:mt-0 py-1 px-4 rounded-lg hover:bg-blue-900/20 cursor-pointer flex items-center"
                  >
                    {activeId === id && <LiveDot />}
                    <a
                      href={`#${id}`}
                      className="block w-full"
                      onClick={() => setIsNavOpen(false)}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default NavBar;
