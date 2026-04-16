import styles from './Portfolio.module.css';

const projects = [
  {
    imgSrc: '/media/moviedb.gif',
    title: 'Movie Database',
    detail:
      'A web app for browsing movies. View top movies, search by title, and get detailed information about each movie including ratings and reviews.',
    stack: 'React · React Hooks · Bootstrap · Axios',
    pageSrc: 'https://moviemacboss.firebaseapp.com/',
    gitHubSrc: 'https://github.com/mcguyvor/moviedbmacboss',
  },
  {
    imgSrc: '/media/nytreackhookgif.gif',
    title: 'Bangkok Time',
    detail:
      'News App where users can pick the news by month and year. The app uses the New York Times API for resources.',
    stack: 'React · React Hooks · Bootstrap · Axios',
    pageSrc: 'https://nytreacthookpractice.firebaseapp.com/',
    gitHubSrc: 'https://github.com/mcguyvor/react-hook-new-york-time-api',
  },
  {
    imgSrc: '/media/ecommerse.png',
    title: 'E-Commerce Store',
    detail:
      'E-commerce web app with Google signup. Focused on design patterns and optimization with Redux state management.',
    stack: 'React · Redux · Firebase · Google Auth',
    pageSrc: 'https://crown-db-a4e72.firebaseapp.com/',
    gitHubSrc: 'https://github.com/mcguyvor/Miniblog-project',
  },
  {
    imgSrc: '/media/restaurant-manager.gif',
    title: 'Restaurant Manager',
    detail:
      'Restaurant manager web app enabling users to add or remove products and order products from the website.',
    stack: 'React · Redux · Redux Form · Axios',
    pageSrc: null,
    gitHubSrc: 'https://github.com/mcguyvor/client',
  },
];

const Portfolio = () => {
  return (
    <section className={styles.section} id="portfolio">
      <div className={styles.gradientOrb1}></div>
      <div className={styles.gradientOrb2}></div>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Featured Projects</h2>
        {projects.map((project, index) => (
          <div
            className={`${styles.projectRow} ${index % 2 !== 0 ? styles.reversed : ''}`}
            key={index}
          >
            <div className={styles.projectImage}>
              <div className={styles.imageCard}>
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  width="540"
                  height="320"
                />
              </div>
            </div>
            <div className={styles.projectText}>
              <p className={styles.featured}>Featured Project</p>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <div className={styles.descCard}>
                <p className={styles.projectDesc}>{project.detail}</p>
              </div>
              <p className={styles.stack}>{project.stack}</p>
              <div className={styles.links}>
                {project.pageSrc && (
                  <a
                    href={project.pageSrc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkIcon}
                    aria-label="Visit live site"
                  >
                    🔗
                  </a>
                )}
                <a
                  href={project.gitHubSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkIcon}
                  aria-label="View on GitHub"
                >
                  <img
                    src="/media/github-logo.png"
                    alt="GitHub"
                    width="24"
                    height="24"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
