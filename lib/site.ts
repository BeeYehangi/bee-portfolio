export const site = {
  name: 'Bimaya Yehangi Eriyawala',
  nickname: 'Bee',
  title: 'Software Engineer · Growing into AI & ML',
  location: 'Gonapola, Sri Lanka',
  email: 'yehangibimaya@gmail.com',
  github: 'https://github.com/BeeYehangi',
  linkedin: 'https://www.linkedin.com/in/bimaya-yehangi-813147367',
}

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export type Skill = { name: string; learning?: boolean }

export const skillGroups: { title: string; skills: Skill[] }[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'HTML & CSS' },
      { name: 'Tailwind CSS' },
      { name: 'Figma' },
      { name: 'Canva' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Java' },
      { name: 'Spring Boot' },
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'REST APIs' },
      { name: 'JWT' },
    ],
  },
  {
    title: 'Data / ML',
    skills: [
      { name: 'Python' },
      { name: 'NumPy' },
      { name: 'Pandas' },
      { name: 'EDA' },
      { name: 'SPSS' },
      { name: 'scikit-learn', learning: true },
      { name: 'PyTorch', learning: true },
      { name: 'TensorFlow', learning: true },
    ],
  },
  {
    title: 'Quality & Tools',
    skills: [
      { name: 'Manual testing' },
      { name: 'Test case writing' },
      { name: 'Postman' },
      { name: 'MySQL' },
      { name: 'Git / GitHub' },
    ],
  },
]

export type Project = {
  name: string
  label: string
  description: string
  tags: string[]
  /** Link to the repository. Replace with the exact repo URL once it is public. */
  github?: string
  /**
   * Interface preview. Put a screenshot in /public/projects/ and set e.g.
   * image: '/projects/smart-finance.png'. Leave empty to show a placeholder.
   */
  image?: string
  planned?: boolean
}

export const projects: Project[] = [
  {
    name: 'Smart Finance Assistant',
    label: 'Final Year Project · Kingston University',
    description:
      'A data-driven web app with real-time analytics dashboards, trend charts and automated threshold alerts. Raw spending data is aggregated in MySQL and turned into clear insight. Secured with JWT authentication and AES-256 encryption, and checked with manual test cases.',
    tags: ['React', 'Node.js', 'MySQL', 'Chart.js', 'JWT', 'AES-256'],
    github: site.github,
    image: undefined,
  },
  {
    name: 'Online Food Ordering System',
    label: 'Full-stack · IJSE CMJD',
    description:
      'A full-stack ordering platform with a layered architecture, JWT role-based access and API tracking for the complete order lifecycle. Every endpoint and role was validated in Postman, including targeted tests for who can and cannot access what.',
    tags: ['React', 'TypeScript', 'Spring Boot', 'Spring Security', 'MySQL', 'JWT'],
    github: site.github,
    image: undefined,
  },
  {
    name: 'GearRent Pro',
    label: 'Desktop · IJSE CMJD',
    description:
      'A multi-branch equipment rental system with dynamic pricing, stacked discounts and automated branch revenue reports. Database transactions and input validation keep the data consistent.',
    tags: ['Java', 'JavaFX', 'MySQL', 'JDBC'],
    github: site.github,
    image: undefined,
  },
  {
    name: 'Customer purchase prediction',
    label: 'Next up · CAME programme',
    description:
      'Planned: take a messy customer dataset through cleaning, exploratory analysis and model comparison, with the imbalanced target handled properly. Notebook and write-up to follow.',
    tags: ['Python', 'Pandas', 'scikit-learn'],
    planned: true,
  },
]
