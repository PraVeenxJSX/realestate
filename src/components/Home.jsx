import React from 'react';
import aboutData from '../data/aboutData';
import projectsData from '../data/projectsData';
import presenceData from '../data/presenceData';
import blogData from '../data/blogData';
import styles from './Home.module.scss';
import { AnimatedSection, StaggeredAnimation } from './ScrollAnimations';

const presenceLocations = [
  { name: "Noida International Airport (Jewar)", lat: 28.133, lng: 77.553 },
  { name: "Goa (Mopa Airport)", lat: 15.740, lng: 73.824 },
  { name: "Dehradun", lat: 30.316, lng: 78.032 },
  { name: "Haldwani", lat: 29.218, lng: 79.522 }
];

const stats = [
    { label: 'PROJECTS DELIVERED', value: 4 },
    { label: 'YEARS EXPERIENCE', value: 10 },
    { label: 'PLOTS SOLD', value: 500 },
];

const statusTabs = [
    {
        label: 'Selling Fast',
        key: 'Selling Fast',
        bg: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    },
    {
        label: 'Launching Soon',
        key: 'Launching Soon',
        bg: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80',
    },
    {
        label: 'Sold Out',
        key: 'Sold Out',
        bg: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=1200&q=80',
    },
];

const HERO_VIDEO = 'https://www.w3schools.com/html/mov_bbb.mp4';

const StatCard = ({ label, value }) => {
    const ref = React.useRef();
    React.useEffect(() => {
        let start = 0;
        const duration = 1000;
        const frameRate = 60;
        const totalFrames = duration / (1000 / frameRate);
        let frame = 0;
        const counter = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            const current = Math.floor(progress * value);
            ref.current.innerText = current + '+';
            if (frame >= totalFrames) {
                clearInterval(counter);
                ref.current.innerText = value + '+';
            }
        }, 1000 / frameRate);
    }, [value]);

    return (
        <div className={styles.statCard}>
            <div className={styles.statValue} ref={ref}></div>
            <div className={styles.statLabel}>{label}</div>
        </div>
    );
};

const Home = () => {
    const [activeTab, setActiveTab] = React.useState('Selling Fast');
    const filteredProjects = projectsData.filter((p) => p.status === activeTab);
    const recentBlogs = blogData.slice(0, 3);
    const activeTabObj = statusTabs.find((tab) => tab.key === activeTab);

    return (
        <div className={styles.homePage}>
            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.heroVideoWrapper}>
                    <video
                        className={styles.heroVideo}
                        src={HERO_VIDEO}
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                    <div className={styles.heroVideoOverlay}></div>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroHeadline}>
                            Pioneering Luxury Living Across India’s Most Promising Locations
                        </h1>
                        <button className={styles.heroCta}>EXPLORE</button>
                        <p className={styles.heroSubheadline}>
                            At HavenHub Infra, we transcend traditional real estate boundaries to become architects of India’s most coveted residential destinations.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <AnimatedSection animation="fadeInUp" delay={200}>
                <section className={styles.statsSection}>
                    <h2 className={styles.statsHeadline}>
                        Transforming Strategic Locations into Lifestyle Destinations
                    </h2>
                    <p className={styles.statsSubheadline}>
                        Over 10 years of expertise in identifying, developing, and delivering
                        high-potential land investments
                    </p>
                    <StaggeredAnimation className={styles.statsGrid} staggerDelay={150}>
                        {stats.map((stat) => (
                            <StatCard key={stat.label} label={stat.label} value={stat.value} />
                        ))}
                    </StaggeredAnimation>
                </section>
            </AnimatedSection>

            {/* Projects Section */}
            <section
                className={styles.projectsSection}
                style={{
                    background: `linear-gradient(to bottom, rgba(30,41,59,0.45), rgba(30,41,59,0.15), rgba(30,41,59,0.55)), url('${activeTabObj.bg}') center/cover no-repeat`,
                    transition: 'background 0.6s ease-in-out',
                }}
            >
                <h2 className={styles.projectsHeadline}>Our Projects</h2>
                <div className={styles.projectTabs}>
                    {statusTabs.map((tab) => (
                        <button
                            key={tab.key}
                            className={tab.key === activeTab ? styles.activeTab : styles.tab}
                            onClick={() => setActiveTab(tab.key)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
                <div className={styles.projectGrid}>
                    {filteredProjects.map((proj) => (
                        <div key={proj.id} className={styles.projectCard}>
                            <img src={proj.image} alt={proj.name} className={styles.projectCardImage} loading="lazy" />
                            <h3 className={styles.projectCardTitle}>{proj.name}</h3>
                            <div className={styles.projectCardLocation}>{proj.location}</div>
                            <div className={styles.projectCardArea}>Area: {proj.area}</div>
                            <button className={styles.projectCardBtn}>View Details</button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Presence Section */}
            <section className={styles.presenceSection}>
  <div className={styles.presenceVideoWrapper}>
    <video
      className={styles.presenceVideoBg}
      src="https://www.w3schools.com/html/movie.mp4" // Random video background
      autoPlay
      loop
      muted
      playsInline
    />
    <div className={styles.presenceVideoOverlay}>
      <div className={styles.presenceContentCard}>
        <h2 className={styles.presenceHeadline}>A Growing Footprint</h2>
        <h3 className={styles.presenceTitle}>OUR PRESENCE</h3>
        <p className={styles.presenceSummary}>
          From the fast-developing industrial corridors near Noida International Airport (Jewar) to the high-tourism zones of Goa's Mopa Airport, and the tranquil, high-altitude opportunities of Dehradun and Haldwani, HavenHub Infra is present wherever land holds untapped promise. We don't just follow market trends; we anticipate them, ensuring our investors access the highest ROI opportunities across diverse geographies and lifestyle preferences.
        </p>
      </div>
    </div>
  </div>
</section>

            {/* Blog Section */}
            <section className={styles.blogSection}>
                <h2 className={styles.blogHeadline}>Insights & Future Visions</h2>
                <div className={styles.blogGrid}>
                    {recentBlogs.map((blog) => (
                        <div key={blog.id} className={styles.blogCard}>
                            <img src={blog.image} alt={blog.title} className={styles.blogCardImage} loading="lazy" />
                            <div className={styles.blogCardContent}>
                                <h3 className={styles.blogCardTitle}>{blog.title}</h3>
                                <p className={styles.blogCardDate}>{blog.date}</p>
                                <p className={styles.blogCardSummary}>{blog.summary}</p>
                                <a href={blog.url} className={styles.blogCardReadMore}>
                                    Read More
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Enquiry Now Video Section */}
                <div className={styles.enquiryVideoSection}>
                    <video
                        className={styles.enquiryVideoBg}
                        src="https://www.w3schools.com/html/movie.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                    <div className={styles.enquiryVideoOverlay}>
                        <p className={styles.blogCtaText}>
                            Need investment advice? Get expert insights and strategies!
                        </p>
                        <button className={styles.blogCtaBtn}>ENQUIRY NOW</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
