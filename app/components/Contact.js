'use client';

import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <h2 className={styles.title}>Contact</h2>
        <p className={styles.description}>
          I&apos;m currently looking to join a cross-functional team that values
          improving people&apos;s lives through accessible design, or have a
          project in mind? Let&apos;s connect.
        </p>
        <a href="mailto:noppawatchotiwan@gmail.com" className={styles.email}>
          noppawatchotiwan@gmail.com
        </a>
        <div className={styles.socials}>
          <a
            href="https://github.com/mcguyvor"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="GitHub"
          >
            <img
              src="/media/github-logo.png"
              alt="GitHub"
              width="20"
              height="20"
              loading="lazy"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/noppawat-chotiwan-938822178/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="LinkedIn"
          >
            <img
              src="/media/linkedin.png"
              alt="LinkedIn"
              width="20"
              height="20"
              loading="lazy"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
