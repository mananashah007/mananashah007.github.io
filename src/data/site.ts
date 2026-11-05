// ---------------------------------------------------------------------------
// EDIT THIS FILE FIRST.
// Everything personal on the site — name, links, jobs, education, skills,
// certifications, awards — lives here. Components read from this file.
// ---------------------------------------------------------------------------

export const site = {
  name: 'Manan Shah',
  // Shown as initials in the avatar circle when there is no photo.
  initials: 'MS',
  role: 'Senior Data Scientist',
  // One or two sentences. This is the first thing a recruiter reads.
  tagline:
    'I work on product analytics, experimentation and causal inference — and write about the statistics, economics and business questions behind the numbers.',
  email: 'shah.a.manan@gmail.com',
  location: 'Bengaluru, India',
  // Optional: drop a square photo at public/photo.jpg and uncomment the next line.
  // photo: 'photo.jpg',
  links: [
    { label: 'Email', href: 'mailto:shah.a.manan@gmail.com', icon: 'mail' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mananshah096/', icon: 'linkedin' },
    { label: 'GitHub', href: 'https://github.com/mananashah007', icon: 'github' },
    { label: 'Résumé', href: 'manan-shah-resume.pdf', icon: 'file' },
  ],
  // A short line of context under the name (location, availability…).
  // Delete if not useful; keep it under ~60 characters.
  currently: 'Senior data science roles',
  // The short "Focus" card next to the hero. Keep to three or four items.
  focus: ['Experimentation & causal inference', 'Product & business analytics', 'ML, NLP & GenAI tooling'],
};

export type Experience = {
  role: string;
  org: string;
  location?: string;
  start: string;
  end: string;
  summary?: string;
  bullets: string[];
  tags?: string[];
};

export const experience: Experience[] = [
  {
    role: 'Senior Data Scientist',
    org: 'PayPal',
    location: 'Bengaluru, India',
    start: 'Jul 2025',
    end: 'Present',
    summary: 'Product analytics and experimentation for Resolutions & Protection.',
    bullets: [
      'Led product analytics and experimentation across key customer journeys, designing statistically rigorous A/B testing frameworks that identified a $1.2M+ cost-saving opportunity and informed product roadmap decisions.',
      'Built a scalable end-to-end batch data pipeline that tracks and visualises portfolio metrics across Product, Policy and Operations, replacing manual reporting with self-serve monitoring.',
      'Analysed out-of-SLA costs across dispute journeys in SQL and Python, identified process and product bugs, and worked with Engineering to prioritise root-cause fixes.',
      'Shipped an AI-powered self-serve analytics tool (Claude Code) letting business stakeholders query and explore portfolio metrics in natural language.',
    ],
    tags: ['A/B testing', 'Causal inference', 'SQL', 'Python', 'Generative AI'],
  },
  {
    role: 'Senior Consultant',
    org: 'Ernst & Young',
    location: 'Bengaluru, India',
    start: 'Aug 2023',
    end: 'Mar 2024',
    summary: 'Customer journey analytics and GenAI for a major enterprise client.',
    bullets: [
      'Mapped end-to-end customer journeys in Adobe Analytics, connecting mid-funnel behaviour to business outcomes and defining measurement-driven product requirements.',
      'Led NLP analysis of ~1M call and chatbot transcripts (topic modelling, sentiment analysis, text classification) to surface the drivers of customer friction and reduce leakage to high-cost channels.',
      'Designed and deployed a retrieval-augmented (RAG) document chatbot that improved support efficiency by 12% and cut query resolution time by ~10%.',
    ],
    tags: ['NLP', 'RAG', 'Adobe Analytics', 'Python'],
  },
  {
    role: 'Consultant',
    org: 'Fractal Analytics',
    location: 'Mumbai, India',
    start: 'Apr 2019',
    end: 'Aug 2023',
    summary: 'Pricing, marketing effectiveness and personalisation across CPG and e-commerce.',
    bullets: [
      'Built Media Mix Models to quantify the causal ROI of e-commerce promotional spend, optimising CPC budgets and identifying high-performing keywords for measurable savings.',
      'Led pricing and promotion modelling using regression and causal analysis across European markets, generating $800K in additional profit for an FMCG client.',
      'Developed a recommendation engine using collaborative filtering and ML-based personalisation for an Indian CPG manufacturer, driving 2.5% incremental sales growth.',
      'Modelled the search-rank algorithms of major e-commerce retailers, improving organic ranking of client products by 2.2 positions across European markets.',
      'Designed an inventory tracking dashboard (SQL, Python, Power BI) that delivered $2M in supply-chain cost savings.',
    ],
    tags: ['MMM', 'Causal inference', 'Recommendations', 'PySpark', 'Power BI'],
  },
  {
    role: 'Associate Analyst',
    org: 'Zycus Infotech',
    location: 'Mumbai, India',
    start: 'Aug 2018',
    end: 'Apr 2019',
    bullets: [
      'Cleaned, categorised and curated procurement data across ERP systems, delivering insights that improved procurement strategies for key clients.',
      'Ran user acceptance testing for product releases, reducing post-release issues by 40% and protecting data accuracy.',
    ],
    tags: ['SQL', 'Data quality', 'UAT'],
  },
];

export type Education = {
  degree: string;
  school: string;
  location?: string;
  year: string;
  detail?: string;
  courses?: string[];
};

export const education: Education[] = [
  {
    degree: 'MBA',
    school: 'Indian Institute of Management (IIM), Ahmedabad',
    location: 'Ahmedabad, India',
    year: '2024 — 2025',
    detail: 'Business and product strategy alongside the analytics work.',
  },
  {
    degree: 'B.E., Electronics and Telecommunication',
    school: 'Mumbai University',
    location: 'Mumbai, India',
    year: '2014 — 2018',
  },
];

export type SkillGroup = {
  title: string;
  blurb?: string;
  skills: string[];
};

export const skills: SkillGroup[] = [
  {
    title: 'Measurement & experimentation',
    blurb: 'How decisions get made',
    skills: [
      'A/B testing',
      'Experimental design',
      'Causal inference',
      'Incrementality studies',
      'Funnel analysis',
      'Statistics',
    ],
  },
  {
    title: 'Machine learning & AI',
    blurb: 'Models in production and in analysis',
    skills: [
      'Statistical modelling',
      'NLP',
      'Topic modelling & text classification',
      'Generative AI (RAG)',
      'Model tuning & validation',
      'Recommendation systems',
    ],
  },
  {
    title: 'Technical',
    blurb: 'Day-to-day tools',
    skills: ['Python', 'SQL', 'PySpark', 'BigQuery', 'Databricks', 'Tableau', 'dbt', 'Claude Code'],
  },
  {
    title: 'Stakeholder & communication',
    blurb: 'Getting the analysis used',
    skills: [
      'Cross-functional collaboration',
      'Executive communication',
      'Technical documentation',
      'Client-facing delivery',
      'Mentoring',
    ],
  },
];

export type Certification = { name: string; issuer?: string; year?: string };

export const certifications: Certification[] = [
  { name: 'Databricks Associate Spark Developer 3.0' },
  { name: 'Introduction to Generative AI', issuer: 'Google' },
  { name: 'ETL pipelines using SQL on Databricks' },
  { name: 'Deep Learning', issuer: 'Coursera' },
  { name: 'dbt Fundamentals' },
];

export type Award = { title: string; org: string; note?: string };

export const awards: Award[] = [
  {
    title: 'PROPS Award',
    org: 'PayPal',
    note: 'End-to-end ownership of high-impact product initiatives.',
  },
  {
    title: 'Best Upcoming Consultant',
    org: 'Fractal Analytics',
    note: 'For exceptional team leadership.',
  },
  {
    title: 'KAIZEN Award',
    org: 'Fractal Analytics',
    note: 'For exceeding expectations on a client-critical project.',
  },
  {
    title: 'Good Samaritan & Spot Award',
    org: 'Zycus',
    note: 'Cross-team collaboration and fast delivery.',
  },
];

// Optional. Add entries here and the "Selected projects" section appears on the
// home page automatically; leave it empty to hide the section.
export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  href?: string;
  repo?: string;
  year?: string;
};

export const projects: Project[] = [];
