import styles from './Hero.module.css';
import TypingBio from './TypingBio';

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
          <h1 className={styles.roleTitle}>I&apos;m a Senior Software Engineer.<span className={styles.cursor}>|</span></h1>
          <p className={styles.currentRole}>
            Currently, I&apos;m a working at{' '}
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

        <TypingBio />
        <noscript>
          <p style={{
            fontFamily: "'Preahvihear', sans-serif",
            fontSize: '1.1rem',
            color: '#ffffff',
            lineHeight: 1.8,
            maxWidth: '900px',
            opacity: 0.9,
          }}>
            Senior Software Engineer with 6+ years of experience building scalable, high-performance web applications using Next.js, React, and TypeScript. Proven track record of delivering revenue-generating features, improving conversion rates, and optimizing SEO and performance metrics. At Kaidee, maintaining and developing new features across the Kaidee marketplace platform, designing scalable frontend architecture and delivering end-to-end user flows. Strong expertise in performance optimization, system design, and user-centric product development.
          </p>
        </noscript>

        <div className={styles.ctaRow}>
          <a
            href="/resume/noppawatchotiwan2026resume.pdf"
            download
            className={styles.resumeBtn}
          >
            📄 Resume
          </a>
          <a
            href="https://github.com/mcguyvor"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="GitHub"
          >
            <img
              src="/media/github-logo.png"
              alt="GitHub"
              width="24"
              height="24"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/noppawat-chotiwan-938822178/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="LinkedIn"
          >
            <img
              src="/media/linkedin.png"
              alt="LinkedIn"
              width="24"
              height="24"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
