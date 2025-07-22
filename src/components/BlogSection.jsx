import React, { useState, useMemo } from 'react';
import styles from './BlogSection.module.scss';
import SectionTitle from './SectionTitle';
import AnimatedSection from './AnimatedSection';
import blogData from '../data/blogData';

const BLOGS_PER_PAGE = 6;

const ArrowIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
);

const BlogSection = () => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(blogData.length / BLOGS_PER_PAGE);

  const paginatedBlogs = useMemo(() => {
    const start = (page - 1) * BLOGS_PER_PAGE;
    return blogData.slice(start, start + BLOGS_PER_PAGE);
  }, [page]);

  const recentBlogs = useMemo(() => blogData.slice(0, 3), []);

  return (
    <AnimatedSection id="blog" className={styles.blogSection}>
      <SectionTitle>Insights & Advice</SectionTitle>
      <div className={styles.blogGrid}>
        {paginatedBlogs.map((post, i) => (
          <a
            key={post.id}
            href={post.url}
            className={styles.blogCard + ' animated'}
            target="_blank"
            rel="noopener noreferrer"
            style={{'--delay': `${i * 120}ms`, transition: 'transform 0.3s, box-shadow 0.3s'}}
            tabIndex={0}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04) rotateY(3deg)'}
            onMouseLeave={e => e.currentTarget.style.transform = ''}
            onFocus={e => e.currentTarget.style.transform = 'scale(1.04) rotateY(3deg)'}
            onBlur={e => e.currentTarget.style.transform = ''}
          >
            <img src={post.image} alt={post.title} className={styles.blogCardImage} />
            <div className={styles.blogCardContent}>
              <p className={styles.blogCardDate}>{post.date}</p>
              <h3 className={styles.blogCardTitle}>{post.title}</h3>
              <p className={styles.blogCardSummary}>{post.summary}</p>
              <span className={styles.blogCardReadMore} style={{display: 'inline-flex', alignItems: 'center', gap: '0.3em'}}>
                Read More <ArrowIcon />
              </span>
            </div>
          </a>
        ))}
      </div>
      <div className={styles.paginationWrapper}>
        <button disabled={page === 1} onClick={() => setPage(page - 1)} className={styles.paginationBtn}>Previous</button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i + 1}
            className={page === i + 1 ? styles.paginationBtnActive : styles.paginationBtn}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button disabled={page === totalPages} onClick={() => setPage(page + 1)} className={styles.paginationBtn}>Next</button>
      </div>
      <SectionTitle>Recent Blogs</SectionTitle>
      <div className={styles.recentBlogGrid}>
        {recentBlogs.map((post, i) => (
          <a
            key={post.id}
            href={post.url}
            className={styles.recentBlogCard + ' animated'}
            target="_blank"
            rel="noopener noreferrer"
            style={{'--delay': `${i * 120}ms`, transition: 'transform 0.3s, box-shadow 0.3s'}}
            tabIndex={0}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04) rotateY(3deg)'}
            onMouseLeave={e => e.currentTarget.style.transform = ''}
            onFocus={e => e.currentTarget.style.transform = 'scale(1.04) rotateY(3deg)'}
            onBlur={e => e.currentTarget.style.transform = ''}
          >
            <img src={post.image} alt={post.title} className={styles.recentBlogCardImage} />
            <div className={styles.recentBlogCardContent}>
              <p className={styles.recentBlogCardDate}>{post.date}</p>
              <h3 className={styles.recentBlogCardTitle}>{post.title}</h3>
              <span className={styles.recentBlogCardReadMore} style={{display: 'inline-flex', alignItems: 'center', gap: '0.3em'}}>
                Read More <ArrowIcon />
              </span>
            </div>
          </a>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default BlogSection; 