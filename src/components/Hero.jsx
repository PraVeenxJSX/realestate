import React, { useRef, useEffect } from 'react';
import styles from './Hero.module.scss';
import heroData from '../data/heroData';

const Hero = () => {
    const heroRef = useRef(null);
    const videoRef = useRef(null);

    // 3D parallax effect for headline/subheadline
    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;
        const section = heroRef.current;
        if (!section) return;
        const parallaxEls = section.querySelectorAll('.' + styles.parallaxText);

        function handleParallax(x, y) {
            parallaxEls.forEach(el => {
                const speed = parseFloat(el.dataset.speed) || 1;
                el.style.transform = `translate3d(${x * speed}px, ${y * speed}px, 0) scale(1.04)`;
            });
        }

        function resetParallax() {
            parallaxEls.forEach(el => {
                el.style.transform = '';
            });
        }

        function onMouseMove(e) {
            const { width, height, left, top } = section.getBoundingClientRect();
            const x = ((e.clientX - left) / width - 0.5) * 40;
            const y = ((e.clientY - top) / height - 0.5) * 24;
            handleParallax(x, y);
        }

        function onMouseLeave() {
            resetParallax();
        }

        // Mobile device orientation
        function onDeviceOrientation(e) {
            if (!e.gamma || !e.beta) return;
            const x = (e.gamma / 45) * 20; // gamma: left-to-right
            const y = (e.beta / 90 - 0.5) * 20; // beta: front-to-back
            handleParallax(x, y);
        }

        section.addEventListener('mousemove', onMouseMove);
        section.addEventListener('mouseleave', onMouseLeave);
        window.addEventListener('deviceorientation', onDeviceOrientation);
        return () => {
            section.removeEventListener('mousemove', onMouseMove);
            section.removeEventListener('mouseleave', onMouseLeave);
            window.removeEventListener('deviceorientation', onDeviceOrientation);
        };
    }, []);

    // Subtle floating/zoom effect for video background
    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;
        const video = videoRef.current;
        if (!video) return;
        video.style.animation = `${styles.heroZoom} 12s ease-in-out infinite alternate`;
        return () => {
            video.style.animation = '';
        };
    }, []);

    return (
        <section
            id="home"
            ref={heroRef}
            className={styles.hero}
        >
            <video
                ref={videoRef}
                className={styles.heroVideo}
                autoPlay
                loop
                muted
                playsInline
                poster={heroData.poster}
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
            >
                <source src={heroData.video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={styles.heroOverlay}></div>
            <div className={styles.heroContent}>
                <h1 data-speed="0.5" className={styles.parallaxText} style={{animationDelay: '0.2s'}}>
                    {heroData.headline}
                </h1>
                <p data-speed="0.2" className={styles.parallaxText} style={{animationDelay: '0.4s'}}>
                    {heroData.subheadline}
                </p>
                <div className={styles.heroButtons} style={{animationDelay: '0.6s'}}>
                    <a href="#projects" className={styles.heroButtonPrimary}>{heroData.cta1}</a>
                    <a href="#contact" className={styles.heroButtonSecondary}>{heroData.cta2}</a>
                </div>
            </div>
        </section>
    );
};

export default Hero; 