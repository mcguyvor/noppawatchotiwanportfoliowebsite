'use client';

import styles from './Skills.module.css';

const skills = [
  // Frontend
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'JavaScript', icon: '🟨' },
  { name: 'Tailwind CSS', icon: '🎨' },
  { name: 'Styled-components', icon: '💅' },
  { name: 'Ant Design', icon: '🐜' },
  { name: 'WordPress', icon: '📝' },
  { name: 'PHP', icon: '🐘' },
  // Backend
  { name: 'Node.js', icon: '🟢' },
  { name: 'GraphQL', icon: '◈' },
  { name: 'REST APIs', icon: '🔗' },
  // Testing
  { name: 'Jest', icon: '🃏' },
  { name: 'Playwright', icon: '🎭' },
  { name: 'Cypress', icon: '🌲' },
  { name: 'Puppeteer', icon: '🤖' },
  { name: 'Postman', icon: '📮' },
  // Cloud & DevOps
  { name: 'AWS', icon: '☁️' },
  { name: 'GCP', icon: '🌐' },
  { name: 'Docker', icon: '🐳' },
  { name: 'CircleCI', icon: '⚙️' },
  { name: 'Jenkins', icon: '🔧' },
  { name: 'Argo CD', icon: '🚀' },
  // Monitoring & CMS
  { name: 'Splunk', icon: '📊' },
  { name: 'Contentstack', icon: '📦' },
  { name: 'Strapi', icon: '🗂️' },
  // Tools
  { name: 'Git', icon: '🔀' },
  { name: 'Figma', icon: '🎯' },
  { name: 'Jira', icon: '📋' },
  { name: 'Firebase', icon: '🔥' },
];

const Skills = () => {
  return (
    <section className={styles.section} id="skills">
      <div className={styles.container}>
        <h2 className={styles.srOnly}>Skills &amp; Technologies</h2>
        <p className={styles.subtitle}>
          I&apos;m currently looking to join a{' '}
          <span className={styles.highlight}>cross-functional</span> team
        </p>
        <p className={styles.subtext}>
          that values improving people&apos;s lives through accessible design
        </p>
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div className={styles.skillBubble} key={index}>
              <span className={styles.skillIcon}>{skill.icon}</span>
              <span className={styles.skillName}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
