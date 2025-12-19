import { ResumeData, WorkExperience, SkillCategory, Project } from '@/lib/types/resume'

const workExperience: WorkExperience[] = [
  {
    id: 'vortx',
    company: 'Vórtx',
    position: 'DevOps Specialist',
    startDate: new Date('2025-03-10'),
    endDate: undefined,
    location: 'Hybrid (São Paulo, Brazil / Remote)',
    description: 'Implementing DevOps best practices and infrastructure automation for internal teams including banking as a service (BaaS) platform',
    responsibilities: [
      'Leading DevOps initiatives to enhance infrastructure automation and CI/CD pipelines',
      'Collaborating with development teams to integrate DevOps practices into the software development lifecycle',
      'Developing custom software solutions tailored to internal team needs',
      'Implementing CI/CD pipelines and cloud infrastructure setups',
      'Improving system reliability and scalability through automation',
      'Best practices evangelist for DevOps culture within the organization',
      'Offering training and workshops on DevOps tools and methodologies',
      'API Gateway management and automation',
      'Kubernetes architecture design and implementation',
      'GitHub and Repository patterns standardization',
      'Infrastructure as Code (IaC) implementation using Terraform and other tools'
    ],
    achievements: [
      'Governance controls implemented for infrastructure as code (IaC) deployments',
      'Transitioned Fargate ECS workloads to Kubernetes, enhancing scalability and management',
      'Conducted workshops that improved team efficiency and collaboration'
    ],
    technologies: [
      'Python', 'JavaScript', 'TypeScript', 'Docker', 'Kubernetes',
      'Terraform', 'GitHub', 'AWS', 'CI/CD', 'GitOps', 'API Gateway', 'Helm'
    ],
    companyLogo: '/images/logo-vortx.svg',
    type: 'full-time'
  },
  {
    id: 'millennium-bcp',
    company: 'Millennium BCP',
    position: 'DevOps Engineer',
    startDate: new Date('2021-07-01'),
    endDate: undefined,
    location: 'Lisbon, Portugal',
    description: 'Working as a member of an ALM Team, focus on delivering the best solutions within connection infrastructure cloud and on-premises into development of internal and external products for Millennium BCP',
    responsibilities: [
      'Leading the creation of tools and automation for software deployment across multiple environments',
      'Developed a Command Line Tool (CLI) that streamlined operational support and improved daily efficiency',
      'Responsible for enhancing and introducing new paradigms in software production pipelines',
      'Implemented automation for automatic provisioning of developer workspaces',
      'Lead the implementation of security and audit gateways, as well as resource cleanup routines',
      'Deployed an automatic update system for security patches in images generated for all microservices',
      'Integrated security routines early in the development cycle (shift-left)',
      'Evangelist for agility, DevOps, and GitOps practices'
    ],
    achievements: [
      'Delivered ready-to-use developer environments in under 5 minutes',
      'Reduced delivery time and increased flexibility in software production pipelines',
      'Strengthened software delivery security across the company',
      'Promoted adoption of continuous integration, continuous delivery, and infrastructure as code'
    ],
    technologies: [
      '.NET', 'Nginx', 'JavaScript', 'Linux', 'Kubernetes', 'Azure Container Registry',
      'Python', 'Poetry', 'Node.js', 'PowerShell Core', 'Bash', 'Docker', 'Docker Compose',
      'Terraform', 'Azure DevOps', 'GitOps', 'Flux', 'ARGO Workflow', 'ServiceNow'
    ],
    companyLogo: '/images/mbcp.png',
    type: 'full-time'
  },
  {
    id: 'aubay',
    company: 'Aubay',
    position: 'DevOps Consultant',
    startDate: new Date('2019-10-01'),
    endDate: new Date('2021-06-30'),
    location: 'Lisbon, Portugal',
    description: 'Supported multiple development teams in adopting agile methodologies for effective code delivery',
    responsibilities: [
      'Support multiple development teams in how to delivery their code with agile methodologies',
      'Creation of architecture and documentation standards for developers',
      'Improvements into Ops and Developers communication',
      'Standards for GIT SCM patterns',
      'Responsible for creating CI/CD standards for projects in .NETCore, React Frontend, Android and iOS Native',
      'Monorepo standards patterns',
      'Kubernetes/AKS Support and Maintenance',
      'Using TypeScript/JavaScript into projects for technological solutions'
    ],
    technologies: [
      '.NET Core', 'React', 'TypeScript', 'JavaScript', 'Kubernetes', 'AKS',
      'Azure DevOps', 'YAML Pipelines', 'Android', 'iOS', 'React Native', 'AppCenter'
    ],
    companyLogo: '/images/aubay.png',
    type: 'full-time'
  },
  {
    id: 'yara',
    company: 'Yara International',
    position: 'Software Engineer',
    startDate: new Date('2018-09-01'),
    endDate: new Date('2019-09-30'),
    location: 'Oslo, Norway',
    description: 'Develop and maintain full app solution using NodeJS with a complete ReactJS and ReactNative stack and UX best practices',
    responsibilities: [
      'Developing Agro Solutions for Professional and Small Farmers',
      'Development of solutions using Serverless Architecture',
      'Architectural stack development with Terraform, Kubernetes, Ambassador and Docker',
      'Development in complete JS stack, NodeJS, ReactJS + Redux',
      'Application development for smallholders farmers using React-Native',
      'GitOps implementation using Terraform',
      'Development of internal solutions using GraphQL',
      'Development of data analysis tool with OCR technology using PYTHON + RabbitMQ'
    ],
    achievements: [
      'CSD (Certified Scrum Developer) training',
      'Developer Community Manager'
    ],
    technologies: [
      'Node.js', 'React', 'React Native', 'Redux', 'GraphQL', 'Python',
      'RabbitMQ', 'Terraform', 'Kubernetes', 'Docker', 'Serverless', 'OCR'
    ],
    companyLogo: '/images/Yara_logo.svg.png',
    type: 'full-time'
  },
  {
    id: 'empiricus',
    company: 'Empiricus Research',
    position: 'Software Engineer',
    startDate: new Date('2018-03-01'),
    endDate: new Date('2018-08-31'),
    location: 'São Paulo, Brazil',
    description: 'Create financial and strong resilient currency converting system for internal and external consulting use',
    responsibilities: [
      'Development of impact systems in sales and for the area of Customer Services',
      'Development of CRUD White-Label system using Python / Flask',
      'Development of centralized StackStock query system, using different API vendors',
      'Implementation of Celery for management of application tasks',
      'DevOps made easy using Docker and Docker Compose on all projects',
      'Deploy using Jenkins',
      'AWS Provider management'
    ],
    technologies: [
      'Python', 'Flask', 'Celery', 'Docker', 'Docker Compose', 'Jenkins', 'AWS'
    ],
    companyLogo: '/images/empiricus.png',
    type: 'full-time'
  },
  {
    id: 'pearson',
    company: 'Pearson Brasil',
    position: 'Full-Stack Engineer',
    startDate: new Date('2016-04-01'),
    endDate: new Date('2017-06-30'),
    location: 'São Paulo, Brazil',
    description: 'Develop games and digital products for Wizard English School for children, teenagers and adults',
    responsibilities: [
      'Acted as Scrum Master and developer for new digital products for the Wizard brand',
      'Developed APIs for multiple projects using Flask-Rest and RESTful architecture',
      'Developed games for Wizard Schools\' products using Haxe and the OpenFL framework',
      'Developed and maintained web systems using Python and Django',
      'Applied TDD concepts in all projects',
      'Implemented Watson APIs for cognitive and data science results',
      'Led the integration of an Adaptive Learning System'
    ],
    achievements: [
      '4th place in the 2016 Pearson Growth Internal Innovation Hackathon',
      'Developed innovative product focused on Adult English Learning and Employability'
    ],
    technologies: [
      'Python', 'Django', 'Flask', 'Haxe', 'OpenFL', 'Watson APIs', 'TDD',
      'Text-to-Speech', 'Speech-to-Text', 'OAuth', 'AWS'
    ],
    companyLogo: '/images/pearson.jpg',
    type: 'full-time'
  },
  {
    id: 'appticket',
    company: 'AppTicket',
    position: 'Full-Stack Engineer',
    startDate: new Date('2013-06-01'),
    endDate: new Date('2016-03-31'),
    location: 'São Paulo, Brazil',
    description: 'Designed and implemented a comprehensive platform for ticket sales, focusing on scalability, user experience, and operational efficiency',
    responsibilities: [
      'Built a robust reservation system to handle high-demand events',
      'Utilized PHP for backend logic, CSS3 and HTML5 for responsive front-end designs',
      'Created a mobile application combining ticket sales functionality with social features',
      'Designed and deployed APIs consumed by the mobile application',
      'Leveraged Amazon Web Services for hosting, data storage, and scaling',
      'Developed an automated email marketing system',
      'Utilized Gulp and JavaScript modules for streamlining email template generation'
    ],
    achievements: [
      'Real-time availability and seamless user interaction',
      'Enhanced user engagement and event discoverability',
      'Optimized platform performance and reduced downtime',
      'Personalized communication increasing engagement'
    ],
    technologies: [
      'PHP', 'JavaScript', 'HTML5', 'CSS3', 'Gulp', 'RESTful APIs',
      'AWS', 'Responsive Design', 'Real-Time Systems'
    ],
    companyLogo: '/images/appticket.png',
    type: 'full-time'
  },
  {
    id: 'planit',
    company: 'PlanIT',
    position: 'Programmer',
    startDate: new Date('2007-05-01'),
    endDate: new Date('2012-08-31'),
    location: 'Mogi das Cruzes, São Paulo, Brazil',
    description: 'Programmer using Visual FoxPro for CRM and Financial systems, PostgreSQL database, and server administration.',
    responsibilities: [
      'Developed and maintained CRM and financial systems using Visual FoxPro',
      'Designed and optimized PostgreSQL databases for business applications',
      'Administered Linux servers for system reliability and performance',
      'Provided technical support and troubleshooting for internal and external users',
      'Collaborated with business stakeholders to gather requirements and deliver solutions'
    ],
    achievements: [
      'Improved system stability and performance through database optimization',
      'Successfully migrated legacy data to PostgreSQL',
      'Enhanced user experience and operational efficiency in CRM workflows'
    ],
    technologies: [
      'Visual FoxPro', 'PostgreSQL', 'Linux', 'CRM Systems', 'Financial Systems'
    ],
    companyLogo: '/images/planit_logo.jpg',
    type: 'full-time'
  }
]

const skillCategories: SkillCategory[] = [
  {
    name: 'DevOps & Infrastructure',
    icon: '🚀',
    color: '#3B82F6',
    skills: [
      { name: 'Docker', level: 9, yearsExperience: 8, category: 'DevOps & Infrastructure', featured: true },
      { name: 'Kubernetes', level: 8, yearsExperience: 6, category: 'DevOps & Infrastructure', featured: true },
      { name: 'Terraform', level: 8, yearsExperience: 5, category: 'DevOps & Infrastructure', featured: true },
      { name: 'Azure DevOps', level: 9, yearsExperience: 6, category: 'DevOps & Infrastructure', featured: true },
      { name: 'AWS', level: 7, yearsExperience: 7, category: 'DevOps & Infrastructure' },
      { name: 'GitOps', level: 8, yearsExperience: 4, category: 'DevOps & Infrastructure' },
      { name: 'CI/CD', level: 9, yearsExperience: 8, category: 'DevOps & Infrastructure', featured: true }
    ]
  },
  {
    name: 'Programming Languages',
    icon: '💻',
    color: '#10B981',
    skills: [
      { name: 'Python', level: 9, yearsExperience: 10, category: 'Programming Languages', featured: true },
      { name: 'JavaScript', level: 8, yearsExperience: 12, category: 'Programming Languages', featured: true },
      { name: 'TypeScript', level: 8, yearsExperience: 6, category: 'Programming Languages', featured: true },
      { name: 'C#/.NET', level: 7, yearsExperience: 5, category: 'Programming Languages' },
      { name: 'PowerShell', level: 8, yearsExperience: 4, category: 'Programming Languages' },
      { name: 'Bash', level: 8, yearsExperience: 8, category: 'Programming Languages' },
      { name: 'PHP', level: 6, yearsExperience: 5, category: 'Programming Languages' }
    ]
  },
  {
    name: 'Frontend Development',
    icon: '🎨',
    color: '#F59E0B',
    skills: [
      { name: 'React', level: 8, yearsExperience: 7, category: 'Frontend Development', featured: true },
      { name: 'Next.js', level: 8, yearsExperience: 3, category: 'Frontend Development', featured: true },
      { name: 'HTML5', level: 9, yearsExperience: 15, category: 'Frontend Development' },
      { name: 'CSS3', level: 8, yearsExperience: 15, category: 'Frontend Development' },
      { name: 'Tailwind CSS', level: 7, yearsExperience: 2, category: 'Frontend Development' },
      { name: 'React Native', level: 7, yearsExperience: 4, category: 'Frontend Development' }
    ]
  },
  {
    name: 'Backend Development',
    icon: '⚙️',
    color: '#8B5CF6',
    skills: [
      { name: 'Node.js', level: 8, yearsExperience: 7, category: 'Backend Development', featured: true },
      { name: 'Flask', level: 8, yearsExperience: 6, category: 'Backend Development' },
      { name: 'Django', level: 7, yearsExperience: 4, category: 'Backend Development' },
      { name: 'GraphQL', level: 7, yearsExperience: 3, category: 'Backend Development' },
      { name: 'RESTful APIs', level: 9, yearsExperience: 10, category: 'Backend Development', featured: true },
      { name: 'Microservices', level: 8, yearsExperience: 5, category: 'Backend Development' }
    ]
  },
  {
    name: 'Methodologies & Practices',
    icon: '📊',
    color: '#EF4444',
    skills: [
      { name: 'Scrum', level: 9, yearsExperience: 8, category: 'Methodologies & Practices', featured: true },
      { name: 'Agile', level: 9, yearsExperience: 8, category: 'Methodologies & Practices', featured: true },
      { name: 'TDD', level: 7, yearsExperience: 5, category: 'Methodologies & Practices' },
      { name: 'DevSecOps', level: 8, yearsExperience: 4, category: 'Methodologies & Practices' },
      { name: 'Code Review', level: 8, yearsExperience: 8, category: 'Methodologies & Practices' },
      { name: 'Technical Leadership', level: 7, yearsExperience: 5, category: 'Methodologies & Practices' }
    ]
  }
]

const projects: Project[] = [
  {
    id: 'azdevops-pipeline-variables',
    name: 'Azure DevOps Pipeline Variables',
    description: 'Tool for managing Azure DevOps pipeline variables efficiently',
    longDescription: 'A comprehensive tool designed to streamline the management of Azure DevOps pipeline variables across multiple projects and environments.',
    technologies: ['TypeScript', 'Azure DevOps API', 'Node.js', 'CLI'],
    startDate: new Date('2022-01-01'),
    endDate: new Date('2022-06-30'),
    status: 'completed',
    role: 'Developer',
    teamSize: 1,
    images: ['/images/projects/extension-devops-jsontovariable.png'],
    demoUrl: '/projects/azdevops-pipeline-variables',
    githubUrl: 'https://github.com/kauemendes/azdevops-pipeline-variables',
    highlights: [
      'Automated variable management across environments',
      'Reduced deployment configuration time by 80%',
      'CLI interface for easy integration'
    ],
    impact: [
      { metric: 'Time Saved', value: '80%', description: 'Reduction in variable management time' },
      { metric: 'Error Rate', value: '95%', description: 'Decrease in configuration errors' }
    ],
    featured: true
  },
  {
    id: 'azdevops-json-to-variable',
    name: 'Azure DevOps JSON to Variable',
    description: 'Convert JSON configurations to Azure DevOps variables',
    longDescription: 'A utility tool that converts JSON configuration files into Azure DevOps pipeline variables, enabling better configuration management.',
    technologies: ['JavaScript', 'Azure DevOps', 'JSON', 'Automation'],
    startDate: new Date('2021-08-01'),
    endDate: new Date('2021-12-31'),
    status: 'completed',
    role: 'Developer',
    teamSize: 1,
    images: ['/images/projects/extension-devops-printvariables.png'],
    demoUrl: '/projects/azdevops-json-to-variable',
    githubUrl: 'https://github.com/kauemendes/azdevops-json-to-variable',
    highlights: [
      'Automated JSON to variable conversion',
      'Support for nested JSON structures',
      'Batch processing capabilities'
    ],
    featured: true
  },
  {
    id: 'pinguimcast',
    name: 'PinguimCast',
    description: 'Podcast platform for tech enthusiasts',
    longDescription: 'A modern podcast platform built for tech enthusiasts, featuring episode management, streaming capabilities, and community features.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Audio Processing'],
    startDate: new Date('2020-03-01'),
    endDate: new Date('2020-12-31'),
    status: 'completed',
    role: 'Host',
    teamSize: 2,
    images: ['/images/projects/pinguimcastlogo.png'],
    demoUrl: '/projects/pinguimcast',
    highlights: [
      'Audio streaming and management',
      'Community engagement features',
      'Responsive design for all devices'
    ],
    featured: true
  }
]

export const resumeData: ResumeData = {
  personal: {
    name: 'Kaue Mendes',
    title: 'DevOps Engineer & Software Developer',
    email: 'kaue.mendes@gmail.com',
    phone: '+55 11 998 982 401',
    location: 'São Paulo, Brazil',
    website: 'https://kauecode.com',
    summary: 'I am an incredibly passionate individual, dedicated to creating code that transforms people\'s lives, whether through automation, innovative products, or impactful pull requests. What drives me is creating a collaborative and diverse work environment.',
    avatar: '/images/hero_3.jpg'
  },
  social: [
    {
      platform: 'LinkedIn',
      username: 'kauemendes',
      url: 'https://www.linkedin.com/in/kauemendes',
      icon: 'linkedin',
      featured: true
    },
    {
      platform: 'GitHub',
      username: 'kauemendes',
      url: 'https://github.com/kauemendes',
      icon: 'github',
      featured: true
    },
    {
      platform: 'Twitter',
      username: 'kauemendes',
      url: 'https://twitter.com/kauemendes',
      icon: 'twitter',
      featured: false
    }
  ],
  experience: workExperience,
  education: [
    {
      id: 'network-technology',
      institution: 'University of Mogi Das Cruzes',
      degree: 'Technology',
      field: 'Network Technology',
      startDate: new Date('2007-01-01'),
      endDate: new Date('2009-12-31'),
      location: 'Mogi das Cruzes, São Paulo, Brazil',
      description: 'Focused in network and internet infrastructure and automation'
    },
    {
      id: 'mba-game-and-software',
      institution: 'FIAP',
      degree: 'MBA',
      field: 'Software and Game Development',
      startDate: new Date('2014-01-01'),
      endDate: new Date('2015-12-31'),
      location: 'São Paulo, Brazil',
      description: 'Focused in software and game development'
    }
  ],
  skills: skillCategories,
  projects: projects,
  achievements: [
    {
      id: 'pearson-hackathon',
      title: '4th Place - Pearson Growth Internal Innovation Hackathon',
      description: 'Developed innovative product focused on Adult English Learning and Employability',
      date: new Date('2016-11-01'),
      category: 'award',
      organization: 'Pearson Brasil'
    }
  ],
  certifications: [
    {
      id: 'csd',
      name: 'Certified Scrum Developer',
      issuer: 'Scrum Alliance',
      issueDate: new Date('2019-03-01'),
      description: 'Certified in Scrum development practices and agile methodologies'
    },
    {
      id: 'cpa-20',
      name: 'CPA-20',
      issuer: 'Anbima',
      issueDate: new Date('2025-07-20'),
      description: 'Certified in investment analysis and portfolio management'
    }
  ],
  languages: [
    { name: 'Portuguese', level: 'native' },
    { name: 'English', level: 'fluent' },
    { name: 'Spanish', level: 'intermediate' }
  ],
  volunteer: [],
  lastUpdated: new Date(),
  version: '1.0.0'
}