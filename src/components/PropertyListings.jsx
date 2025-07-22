import React, { useState, useMemo } from 'react';
import AnimatedSection from './AnimatedSection';
import SectionTitle from './SectionTitle';
import styles from './PropertyListings.module.scss';
import projectsData from '../data/projectsData';

const statusTabs = ['Selling Fast', 'Launching Soon', 'Sold Out'];

const MapIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 20l-5.447-2.724A2 2 0 0 1 2 15.382V6.618a2 2 0 0 1 1.553-1.894l5.447-1.724a2 2 0 0 1 1.262 0l5.447 1.724A2 2 0 0 1 18 6.618v8.764a2 2 0 0 1-1.553 1.894L11 20a2 2 0 0 1-1.262 0z"/><circle cx="12" cy="10" r="3"/></svg>
);
const DocIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M7 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/><path d="M16 2v4a2 2 0 0 0 2 2h4"/></svg>
);

const PropertyListings = () => {
  const [activeTab, setActiveTab] = useState('Selling Fast');

  const filteredProjects = useMemo(() =>
    projectsData.filter(p => p.status === activeTab),
    [activeTab]
  );

  return (
    <AnimatedSection id="projects" className={styles.propertyListings}>
      <div className={styles.propertyListingsContainer}>
        <SectionTitle>Our Projects</SectionTitle>
        <div className={styles.projectTabs}>
          {statusTabs.map(tab => (
            <button
              key={tab}
              className={tab === activeTab ? styles.activeTab : styles.tab}
              onClick={() => setActiveTab(tab)}
              tabIndex={0}
              style={{transition: 'background 0.2s, color 0.2s'}}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className={styles.projectGrid}>
          {filteredProjects.map((proj, i) => (
            <div
              key={proj.id}
              className={`${styles.projectCard} animated`}
              style={{'--delay': `${i * 120}ms`}}
              tabIndex={0}
            >
              <div className={styles.projectImageWrapper}>
                <img src={proj.image} alt={proj.name} className={styles.projectImage} />
                <span className={styles.projectStatus + ' ' + styles[proj.status.replace(/\s/g, '').toLowerCase()]}>{proj.status}</span>
              </div>
              <div className={styles.projectCardContent}>
                <h3 className={styles.projectCardTitle}>{proj.name}</h3>
                <p className={styles.projectCardLocation}>{proj.location}</p>
                <p className={styles.projectCardArea}>Area: {proj.area}</p>
                <div className={styles.projectCardActions}>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(proj.location)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectActionBtn}
                    tabIndex={0}
                    style={{transition: 'background 0.2s, color 0.2s, border 0.2s'}}
                  >
                    <MapIcon /> Map
                  </a>
                  <a
                    href="/brochure.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectActionBtn}
                    tabIndex={0}
                    style={{transition: 'background 0.2s, color 0.2s, border 0.2s'}}
                  >
                    <DocIcon /> Brochure
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default PropertyListings; 