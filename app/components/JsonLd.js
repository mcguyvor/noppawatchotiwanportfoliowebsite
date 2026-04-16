const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Noppawat Chotiwan',
  url: 'https://noppawatchotiwan1996.web.app',
  jobTitle: 'Senior Software Engineer',
  worksFor: {
    '@type': 'Organization',
    name: 'Kaidee',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Chulalongkorn University',
  },
  knowsAbout: [
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'Frontend Development',
  ],
  sameAs: [
    'https://github.com/mcguyvor',
    'https://www.linkedin.com/in/noppawat-chotiwan-938822178/',
  ],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
