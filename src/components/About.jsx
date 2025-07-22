import React from 'react';
import aboutData from '../data/aboutData';
import styles from './About.module.scss';
import ceoImg from '../assets/ceo.jpg';

const About = () => (
  <div className={styles.aboutPage}>
    <section className={styles.legacySection}>
      <div className={styles.bgVideoWrapper}>
        <video className={styles.bgVideo} src={aboutData.legacyVideo} autoPlay loop muted playsInline poster="" />
        <div className={styles.bgOverlay}></div>
        <h1 className={styles.sectionTitle}>Our Legacy</h1>
      </div>
      <p className={styles.sectionText}>{aboutData.legacy}</p>
    </section>
    <section className={styles.philosophySection}>
      <div className={styles.bgVideoWrapper}>
        <video className={styles.bgVideo} src={aboutData.philosophyVideo} autoPlay loop muted playsInline poster="" />
        <div className={styles.bgOverlay}></div>
        <h2 className={styles.sectionTitle}>Our Philosophy</h2>
      </div>
      <p className={styles.sectionText}>{aboutData.philosophy}</p>
    </section>
    <section className={styles.expertiseSection}>
      <div className={styles.bgVideoWrapper}>
        <video className={styles.bgVideo} src={aboutData.expertiseVideo} autoPlay loop muted playsInline poster="" />
        <div className={styles.bgOverlay}></div>
        <h2 className={styles.sectionTitle}>Our Expertise</h2>
      </div>
      <p className={styles.sectionText}>{aboutData.expertise}</p>
    </section>
    <section className={styles.statsSection}>
      <h2 className={styles.sectionSubtitle}>India's Leading Plot Development Specialist</h2>
      <div className={styles.statsGrid}>
        {aboutData.stats.map(stat => (
          <div key={stat.label} className={styles.statCard}>
            <div className={styles.statValue}>{stat.value}</div>
            <div className={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
    <section className={styles.ceoSection}>
      <h2 className={styles.sectionSubtitle}>A Note From CEO</h2>
      <div className={styles.ceoFlex}>
        <img src={ceoImg} alt={aboutData.ceoNote.name} className={styles.ceoImg} />
        <blockquote className={styles.ceoQuote}>
          “{aboutData.ceoNote.quote}”
          <footer className={styles.ceoFooter}>
            <strong>{aboutData.ceoNote.name}</strong><br/>{aboutData.ceoNote.title}
          </footer>
        </blockquote>
      </div>
    </section>
    <section className={styles.leadershipSection}>
      <h2 className={styles.sectionSubtitle}>Our Leadership</h2>
      <div className={styles.leadershipGrid}>
        {aboutData.leadership.map(leader => (
          <div key={leader.name} className={styles.leaderCard}>
            <img src={leader.image} alt={leader.name} className={styles.leaderImg} />
            <div className={styles.leaderName}>{leader.name}</div>
            <div className={styles.leaderTitle}>{leader.title}</div>
          </div>
        ))}
      </div>
    </section>
    <section className={styles.testimonialsSection}>
      <h2 className={styles.sectionSubtitle}>Testimonials</h2>
      <div className={styles.testimonialsGrid}>
        {aboutData.testimonials.map((t, i) => (
          <blockquote key={i} className={styles.testimonialCard}>
            <img src={t.image} alt={t.name} className={styles.testimonialImg} />
            “{t.quote}”
            <footer className={styles.testimonialFooter}>
              <strong>{t.name}</strong><br/>{t.title}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
    <section className={styles.contactSection}>
      <h2 className={styles.sectionSubtitle}>Contact</h2>
      <div className={styles.contactInfo}>
        <div><strong>Address:</strong> {aboutData.contact.address}</div>
        <div><strong>Phone:</strong> {aboutData.contact.phone}</div>
        <div><strong>Email:</strong> {aboutData.contact.email}</div>
      </div>
    </section>
  </div>
);

export default About; 