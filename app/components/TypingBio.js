'use client';

import { useState, useEffect } from 'react';
import styles from './TypingBio.module.css';

const fullText = `Senior Software Engineer with 6+ years of experience building scalable, high-performance web applications using Next.js, React, and TypeScript. Proven track record of delivering revenue-generating features, improving conversion rates, and optimizing SEO and performance metrics. At Kaidee, maintaining and developing new features across the Kaidee marketplace platform, designing scalable frontend architecture and delivering end-to-end user flows. Strong expertise in performance optimization, system design, and user-centric product development.`;

const TypingBio = () => {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(fullText.slice(0, i));
      if (i >= fullText.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 18);
    return () => clearInterval(interval);
  }, []);

  return (
    <p className={styles.bio}>
      {displayed}
      {!done && <span className={styles.cursor}>|</span>}
      <noscript>
        {fullText}
      </noscript>
    </p>
  );
};

export default TypingBio;
