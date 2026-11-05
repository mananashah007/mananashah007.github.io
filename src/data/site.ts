// ---------------------------------------------------------------------------
// EDIT THIS FILE FIRST.
// Almost everything personal on the site — name, links, jobs, education,
// skills, projects — lives here. Components read from this file.
// ---------------------------------------------------------------------------

export const site = {
  name: 'Manan Shah',
  // Shown as initials in the avatar circle when there is no photo.
  initials: 'MS',
  role: 'Data Analyst & Writer',
  // One or two sentences. This is the first thing a recruiter reads.
  tagline:
    'I turn messy data into decisions — and write about the statistics, economics and business questions behind them.',
  email: 'you@example.com',
  location: 'Mumbai, India',
  // Optional: drop a square photo at public/photo.jpg and uncomment the next line.
  // photo: 'photo.jpg',
  links: [
    { label: 'Email', href: 'mailto:you@example.com', icon: 'mail' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-handle', icon: 'linkedin' },
    { label: 'GitHub', href: 'https://github.com/your-handle', icon: 'github' },
    { label: 'Résumé (PDF)', href: 'resume.pdf', icon: 'file' },
  ],
  // Short "currently" line in the hero (keep it under ~40 characters so it
  // fits on one line on a phone). Delete if not useful.
  currently: 'Open to data roles',
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
    role: 'Data Analyst',
    org: 'Company Name',
    location: 'Mumbai, India',
    start: 'Jan 2024',
    end: 'Present',
    summary: 'Analytics for the growth team — reporting, experimentation and forecasting.',
    bullets: [
      'Built a churn early-warning model that identified at-risk accounts two months ahead of renewal, enabling the CS team to cut logo churn by X%.',
      'Replaced manual weekly reporting with a dbt + Looker pipeline, saving ~6 analyst-hours per week and standardising definitions across teams.',
      'Designed and analysed A/B tests for onboarding changes; raised activation by X pts across Y experiments.',
    ],
    tags: ['SQL', 'Python', 'dbt', 'Looker', 'A/B testing'],
  },
  {
    role: 'Analytics Intern',
    org: 'Previous Company',
    location: 'Remote',
    start: 'May 2023',
    end: 'Dec 2023',
    bullets: [
      'Automated a pricing sensitivity analysis in Python, surfacing three segments where a small discount lifted revenue without margin loss.',
      'Partnered with marketing to build a propensity score model for campaign targeting; improved response rate from X% to Y%.',
    ],
    tags: ['Python', 'pandas', 'scikit-learn', 'Excel'],
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
    degree: 'MSc in Statistics',
    school: 'University Name',
    location: 'City, Country',
    year: '2021 — 2023',
    detail: 'Dissertation on causal inference for observational marketing data.',
    courses: ['Causal inference', 'Bayesian statistics', 'Time series', 'Econometrics'],
  },
  {
    degree: 'BSc in Economics',
    school: 'University Name',
    location: 'City, Country',
    year: '2018 — 2021',
    detail: 'Graduated with honours.',
    courses: ['Microeconomics', 'Econometrics', 'Game theory'],
  },
];

export type SkillGroup = {
  title: string;
  blurb?: string;
  skills: string[];
};

export const skills: SkillGroup[] = [
  {
    title: 'Analysis & modelling',
    blurb: 'Statistics, experimentation, causal inference',
    skills: ['Regression', 'A/B testing', 'Causal inference', 'Time series', 'Clustering', 'Bayesian basics'],
  },
  {
    title: 'Programming',
    blurb: 'Day-to-day tools',
    skills: ['Python (pandas, numpy, scikit-learn)', 'SQL', 'R', 'Git', 'dbt', 'Streamlit'],
  },
  {
    title: 'Visualisation & reporting',
    blurb: 'Getting the story across',
    skills: ['Looker', 'Power BI', 'Matplotlib / seaborn', 'Excel', 'Notion', 'Slide design'],
  },
  {
    title: 'Business & communication',
    blurb: 'Working with the rest of the company',
    skills: ['Stakeholder interviews', 'Metrics definition', 'Experiment design', 'Written communication'],
  },
];

export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  href?: string;
  repo?: string;
  year?: string;
};

export const projects: Project[] = [
  {
    title: 'Project One',
    blurb:
      'One or two lines on the problem, what you built, and the outcome. Numbers help: “~40% faster”, “3k monthly users”, “cut report time from 2 days to 20 minutes”.',
    tags: ['Python', 'Streamlit'],
    href: 'https://example.com',
    repo: 'https://github.com/your-handle/project-one',
    year: '2024',
  },
  {
    title: 'Project Two',
    blurb:
      'A second project. If you have nothing code-shaped, a written analysis or data story works well here too.',
    tags: ['SQL', 'dbt'],
    repo: 'https://github.com/your-handle/project-two',
    year: '2023',
  },
];

// Nav order. The blog is a separate page.
export const nav = [
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Education', href: '/#education' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Writing', href: '/blog/' },
];
