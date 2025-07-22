import React, { useEffect, useState, useRef } from 'react';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import styles from './Header.module.scss';
import navData from '../data/navData';
import logo from '../assets/logo.svg';

const iconMap = {
  linkedin: <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.594v5.602z"/></svg>,
  instagram: <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.687.334-3.678 1.325-.991.991-1.267 2.402-1.325 3.678-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.687 1.325 3.678.991.991 2.402 1.267 3.678 1.325 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.687-.334 3.678-1.325.991-.991 1.267-2.402 1.325-3.678.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.267-3.678-1.325-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>,
  facebook: <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .733.592 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.729 0 1.322-.591 1.322-1.324v-21.35c0-.733-.593-1.325-1.326-1.325z"/></svg>,
  twitter: <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482c-4.086-.205-7.713-2.164-10.141-5.144a4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636a10.012 10.012 0 0 0 2.457-2.548z"/></svg>,
  youtube: <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.117c-1.863-.508-9.391-.508-9.391-.508s-7.527 0-9.391.508a2.994 2.994 0 0 0-2.107 2.117c-.508 1.863-.508 5.754-.508 5.754s0 3.891.508 5.754a2.994 2.994 0 0 0 2.107 2.117c1.863.508 9.391.508 9.391.508s7.527 0 9.391-.508a2.994 2.994 0 0 0 2.107-2.117c.508-1.863.508-5.754.508-5.754s0-3.891-.508-5.754zm-13.498 9.754v-7l6.5 3.5-6.5 3.5z"/></svg>
};

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
        const onScroll = () => {
            setScrolled(window.scrollY > 12);
        };
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
            window.location.href = href;
        }
        setIsOpen(false);
        setProjectsOpen(false);
    };

    const toggleDarkMode = () => {
        setDarkMode((prev) => !prev);
    };

    // Dropdown open/close handlers
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
                <a
  href="/"
  className={styles.logo}
  aria-label="Home"
  tabIndex={0}
  style={{
    transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1), filter 0.3s',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  }}
>
  <img
    src={logo}
    alt="HavenHub Info Logo"
    style={{
      height: 60,
      width: 'auto',
      objectFit: 'contain',
      filter: 'drop-shadow(0 2px 8px #2563eb33)',
      transition: 'filter 0.3s',
      background: 'transparent',
      borderRadius: '0.5rem',
      padding: 0,
      maxWidth: 220
    }}
  />
  
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
                            style={{position: 'relative', display: 'inline-block'}}
                          >
                            <button
                              className={styles.navLink + ' ' + styles.navDropdownBtn}
                              aria-haspopup="true"
                              aria-expanded={projectsOpen}
                              onClick={e => { e.preventDefault(); setProjectsOpen(v => !v); }}
                              style={{display: 'flex', alignItems: 'center', gap: 4, fontWeight: 600}}
                            >
                              {link.label} <ChevronDown size={18} style={{transition: 'transform 0.2s', transform: projectsOpen ? 'rotate(180deg)' : 'none'}} />
                            </button>
                            {projectsOpen && (
                              <div className={styles.projectsDropdown} role="menu" tabIndex={-1}>
                                <div className={styles.projectsDropdownInner}>
                                  {link.sublinks.map((cat, i) => (
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
                    style={{transition: 'background 0.2s, color 0.2s'}}
                >
                    <span style={{display: 'inline-block', transition: 'transform 0.3s'}}>{darkMode ? <Sun size={20} /> : <Moon size={20} />}</span>
                </button>
                <div className={styles.menuButton}>
                    <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={24} /> : <Menu size={24} />}</button>
                </div>
            </div>
            {isOpen && (
                <div className={styles.mobileNavWrapper}>
                    <nav className={styles.mobileNav}>
                        {navData.links.map(link => (
                            <a key={link.label} href={link.href} onClick={e => handleNavClick(e, link.href)} className={styles.mobileNavLink}>{link.label}</a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;