'use client';

import styles from './Experience.module.css';

const experiences = [
  {
    title: 'Kaidee',
    role: 'Senior Software Engineer',
    period: 'Oct 2024 – Present',
    description: 'Led frontend across 3 business units — launched Pinned Ads (+150 monthly orders), Storefronts & Reviews (+15% engagement), and reusable component patterns that cut dev time by 25%.',
    icon: '🛒',
  },
  {
    title: 'FPT Software',
    role: 'Senior Software Engineer',
    period: 'Apr 2023 – Oct 2024',
    description: 'Led a cross-functional team of 5–7 to deliver back-office apps for 2 BUs. Built reusable component libraries reducing dev time by 10%, and maintained 2 insurtech platforms with high availability.',
    icon: '💻',
  },
  {
    title: 'MoneyHero Group',
    role: 'Software Engineer',
    period: 'Mar 2020 – Feb 2023',
    description: 'Increased conversion by 12% with "Add to Favorite" on Money101. Revamped SingSaver\'s loan journey (–8% drop-off), unified blog design across 6 markets, and boosted Lighthouse SEO from 70 to 90+.',
    icon: '💰',
  },
  {
    title: 'Pomelo',
    role: 'Senior Quality Assurance',
    period: 'Dec 2019 – Mar 2020',
    description: 'Led end-to-end automation testing across Web, iOS, and Android — increased test coverage to 90% and built automated API test suites with Postman.',
    icon: '🧪',
  },
  {
    title: 'Wongnai',
    role: 'Quality Assurance',
    period: 'Feb 2019 – Aug 2019',
    description: 'QA engineer in Agile/Scrum team. Developed automation scripts with Puppeteer, increased test coverage to 90%, and identified critical defects early in the dev cycle.',
    icon: '🔍',
  },
];

const Experience = () => {
  return (
    <section className={styles.section} id="experience">
      <div className={styles.gradientOrb}></div>
      <div className={styles.container}>
        <h2 className={styles.title}>Work Experience</h2>
        <div className={styles.grid}>
          {experiences.map((exp, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.cardGlow}></div>
              <div className={styles.cardContent}>
                <div className={styles.iconWrapper}>
                  <span className={styles.icon}>{exp.icon}</span>
                </div>
                <div className={styles.textContent}>
                  <h3 className={styles.cardTitle}>{exp.title}</h3>
                  <p className={styles.cardRole}>{exp.role} · {exp.period}</p>
                  <p className={styles.cardDesc}>{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
