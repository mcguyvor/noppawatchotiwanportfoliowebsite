'use client';

import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.gradientOrb1}></div>
      <div className={styles.gradientOrb2}></div>
      <div className={styles.container}>
        <div className={styles.intro}>
          <p className={styles.greeting}>
            Hello! I Am <span className={styles.highlight}>Noppawat Chotiwan</span>
          </p>
          <div className={styles.profileRow}>
            <div className={styles.avatarWrapper}>
              <div className={styles.avatarGlow}></div>
              <img
                src="/media/nerd.png"
                alt="Noppawat Chotiwan - Senior Software Engineer"
                className={styles.avatar}
                width="180"
                height="180"
              />
            </div>
          </div>
        </div>

        <div className={styles.roleSection}>
          <h1 className={styles.roleTitle}>I&apos;m a Senior Software Engineer.|</h1>
          <p className={styles.currentRole}>
            Currently, I&apos;m a Software Engineer at{' '}
            <a
              href="https://www.kaidee.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.companyLink}
            >
              Kaidee
            </a>
          </p>
        </div>

        <p className={styles.bio}>
         Senior Software Engineer with 6+ years of experience building scalable, high-performance web applications using Next.js, React, and TypeScript.
Proven track record of delivering revenue-generating features, improving conversion rates, and optimizing SEO and performance metrics.
At Kaidee,
maintaining and developing new features across the Kaidee marketplace platform, designing scalable frontend architecture and delivering end-to-
end user flows. Strong expertise in performance optimization, system design, and user-centric product development.
        </p>

        <a
          href="/resume/noppawatchotiwan2026resume.pdf"
          download
          className={styles.resumeBtn}
        >
          📄 Download Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
