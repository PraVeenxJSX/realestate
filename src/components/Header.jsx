import React, { useEffect, useState, useRef } from 'react';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import styles from './Header.module.scss';
import navData from '../data/navData';
import logo from '../assets/logo.svg';
import { useNavigate } from 'react-router-dom'; // ✅ NEW

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored) return stored === 'dark';
    }
    return false;
  });

  const headerRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const projectsTimeout = useRef();
  const navigate = useNavigate(); // ✅ NEW

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      const targetElement = document.getElementById(href.replace('#', ''));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href); // ✅ REPLACED window.location.href
    }
    setIsOpen(false);
    setProjectsOpen(false);
  };

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  const openProjects = () => {
    clearTimeout(projectsTimeout.current);
    setProjectsOpen(true);
  };

  const closeProjects = () => {
    projectsTimeout.current = setTimeout(() => setProjectsOpen(false), 120);
  };

  return (
    <header ref={headerRef} className={styles.header + (scrolled ? ' ' + styles.headerScrolled : '')}>
      <div className={styles.headerContainer}>
        <a href="/" className={styles.logo} aria-label="Home" tabIndex={0}>
          <img src={logo} alt="HavenHub Info Logo" style={{ height: 60, maxWidth: 220 }} />
        </a>

        <nav className={styles.nav}>
          {navData.links.map(link => (
            link.label === 'Projects' && link.sublinks ? (
              <div
                key={link.label}
                className={styles.navDropdownWrapper}
                onMouseEnter={openProjects}
                onMouseLeave={closeProjects}
                tabIndex={0}
                onFocus={openProjects}
                onBlur={closeProjects}
              >
                <button
                  className={styles.navLink + ' ' + styles.navDropdownBtn}
                  aria-haspopup="true"
                  aria-expanded={projectsOpen}
                  onClick={e => { e.preventDefault(); setProjectsOpen(v => !v); }}
                >
                  {link.label} <ChevronDown size={18} style={{ transform: projectsOpen ? 'rotate(180deg)' : 'none' }} />
                </button>
                {projectsOpen && (
                  <div className={styles.projectsDropdown} role="menu" tabIndex={-1}>
                    <div className={styles.projectsDropdownInner}>
                      {link.sublinks.map(cat => (
                        <div key={cat.label} className={styles.projectsDropdownCol}>
                          <div className={styles.projectsDropdownColTitle}>{cat.label}</div>
                          <ul className={styles.projectsDropdownList}>
                            {cat.projects.map(proj => (
                              <li key={proj.label} className={styles.projectsDropdownListItem}>
                                <a
                                  href={proj.href}
                                  className={styles.projectsDropdownLink}
                                  onClick={e => handleNavClick(e, proj.href)}
                                  tabIndex={0}
                                >
                                  {proj.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={e => handleNavClick(e, link.href)}
                className={styles.navLink}
              >
                {link.label}
              </a>
            )
          ))}
        </nav>

        <button
          onClick={toggleDarkMode}
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          className={styles.darkModeToggle}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <div className={styles.menuButton}>
          <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={24} /> : <Menu size={24} />}</button>
        </div>
      </div>

      {isOpen && (
        <div className={styles.mobileNavWrapper}>
          <nav className={styles.mobileNav}>
            {navData.links.map(link => (
              <a key={link.label} href={link.href} onClick={e => handleNavClick(e, link.href)} className={styles.mobileNavLink}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;