import React, { useRef, useEffect, useState } from 'react';
import styles from './AnimatedSection.module.scss';

const useOnScreen = (options) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, options);

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [ref, options]);

    return [ref, isVisible];
};

const AnimatedSection = ({ children, className, id }) => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1, triggerOnce: true });
    return (
        <section
            id={id}
            ref={ref}
            className={[
                styles.animatedSection,
                className,
                isVisible ? styles.visible : styles.hidden
            ].filter(Boolean).join(' ')}
        >
            {children}
        </section>
    );
};

export default AnimatedSection; 