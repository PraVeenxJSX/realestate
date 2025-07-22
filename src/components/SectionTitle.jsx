import React from 'react';
import styles from './SectionTitle.module.scss';

const SectionTitle = ({ children }) => (
    <h2 className={styles.sectionTitle}>{children}</h2>
);

export default SectionTitle; 