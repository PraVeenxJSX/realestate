import React from 'react';
import styles from './WhyChooseUs.module.scss';
import SectionTitle from './SectionTitle';
import AnimatedSection from './AnimatedSection';
import aboutData from '../data/aboutData';

const WhyChooseUs = () => (
  <AnimatedSection id="why-us" className={styles.whyChooseUs}>
    <SectionTitle>Why Choose Us</SectionTitle>
    <div className={styles.whyContentWrapper}>
      <div className={styles.whyMission}>
        <h3 className={styles.whyHeadline}>{aboutData.aboutHeadline}</h3>
        <p className={styles.whyText}>{aboutData.aboutText}</p>
        <p className={styles.whyMissionText}>{aboutData.mission}</p>
      </div>
      <div className={styles.whyStats}>
        <div className={styles.whyStatsRow}>
          <div className={styles.whyStatCard}>
            <div className={styles.whyStatValue}>4+</div>
            <div className={styles.whyStatLabel}>Projects Successfully Delivered</div>
          </div>
          <div className={styles.whyStatCard}>
            <div className={styles.whyStatValue}>10+</div>
            <div className={styles.whyStatLabel}>Years Experience</div>
          </div>
          <div className={styles.whyStatCard}>
            <div className={styles.whyStatValue}>100+</div>
            <div className={styles.whyStatLabel}>Acres Thoughtfully Developed</div>
          </div>
          <div className={styles.whyStatCard}>
            <div className={styles.whyStatValue}>500+</div>
            <div className={styles.whyStatLabel}>Plots Sold</div>
          </div>
        </div>
        {aboutData.stats.map((stat, i) => (
          <div
            key={stat.label}
            className={styles.whyStatCard + ' animated'}
            style={{'--delay': `${i * 120}ms`, transition: 'transform 0.3s, box-shadow 0.3s'}}
            tabIndex={0}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.07) rotateY(6deg)'}
            onMouseLeave={e => e.currentTarget.style.transform = ''}
            onFocus={e => e.currentTarget.style.transform = 'scale(1.07) rotateY(6deg)'}
            onBlur={e => e.currentTarget.style.transform = ''}
          >
            <div className={styles.whyStatValue}>{stat.value}</div>
            <div className={styles.whyStatLabel}>{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default WhyChooseUs;