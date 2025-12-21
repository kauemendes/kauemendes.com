import { ResumeData, WorkExperience, SkillCategory, Project } from '@/lib/types/resume'

const workExperience: WorkExperience[] = [
  {
    id: 'vortx',
    company: 'Vórtx',
    position: 'Especialista DevOps',
    startDate: new Date('2025-03-10'),
    endDate: undefined,
    location: 'Híbrido (São Paulo, Brasil / Remoto)',
    description: 'Implementando melhores práticas de DevOps e automação de infraestrutura para equipes internas, incluindo plataforma de banking as a service (BaaS)',
    responsibilities: [
      'Liderando iniciativas DevOps para aprimorar automação de infraestrutura e pipelines de CI/CD',
      'Colaborando com equipes de desenvolvimento para integrar práticas DevOps no ciclo de desenvolvimento',
      'Desenvolvendo soluções de software customizadas para necessidades das equipes internas',
      'Implementando pipelines de CI/CD e configurações de infraestrutura cloud',
      'Melhorando confiabilidade e escalabilidade de sistemas através de automação',
      'Evangelista de melhores práticas para cultura DevOps na organização',
      'Oferecendo treinamentos e workshops sobre ferramentas e metodologias DevOps',
      'Gerenciamento e automação de API Gateway',
      'Design e implementação de arquitetura Kubernetes',
      'Padronização de GitHub e padrões de repositório',
      'Implementação de Infraestrutura como Código (IaC) usando Terraform e outras ferramentas'
    ],
    achievements: [
      'Controles de governança implementados para deploys de infraestrutura como código (IaC)',
      'Transição de workloads Fargate ECS para Kubernetes, melhorando escalabilidade e gerenciamento',
      'Workshops realizados que melhoraram eficiência e colaboração das equipes'
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
    position: 'Engenheiro DevOps',
    startDate: new Date('2021-07-01'),
    endDate: undefined,
    location: 'Lisboa, Portugal',
    description: 'Trabalhando como membro de uma Equipe ALM, focado em entregar as melhores soluções de conexão entre infraestrutura cloud e on-premises no desenvolvimento de produtos internos e externos para o Millennium BCP',
    responsibilities: [
      'Liderando a criação de ferramentas e automação para deploy de software em múltiplos ambientes',
      'Desenvolvi uma Ferramenta de Linha de Comando (CLI) que otimizou suporte operacional e melhorou eficiência diária',
      'Responsável por aprimorar e introduzir novos paradigmas em pipelines de produção de software',
      'Implementei automação para provisionamento automático de ambientes de desenvolvedor',
      'Liderei a implementação de gateways de segurança e auditoria, bem como rotinas de limpeza de recursos',
      'Deploy de sistema de atualização automática para patches de segurança em imagens geradas para todos os microsserviços',
      'Integrei rotinas de segurança no início do ciclo de desenvolvimento (shift-left)',
      'Evangelista de práticas de agilidade, DevOps e GitOps'
    ],
    achievements: [
      'Entrega de ambientes de desenvolvedor prontos para uso em menos de 5 minutos',
      'Redução do tempo de entrega e aumento de flexibilidade em pipelines de produção',
      'Fortalecimento da segurança de entrega de software em toda a empresa',
      'Promoção da adoção de integração contínua, entrega contínua e infraestrutura como código'
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
    position: 'Consultor DevOps',
    startDate: new Date('2019-10-01'),
    endDate: new Date('2021-06-30'),
    location: 'Lisboa, Portugal',
    description: 'Apoiei múltiplas equipes de desenvolvimento na adoção de metodologias ágeis para entrega eficaz de código',
    responsibilities: [
      'Apoiar múltiplas equipes de desenvolvimento em como entregar código com metodologias ágeis',
      'Criação de padrões de arquitetura e documentação para desenvolvedores',
      'Melhorias na comunicação entre Ops e Desenvolvedores',
      'Padrões para patterns GIT SCM',
      'Responsável por criar padrões de CI/CD para projetos em .NETCore, React Frontend, Android e iOS Nativo',
      'Padrões de Monorepo',
      'Suporte e Manutenção de Kubernetes/AKS',
      'Uso de TypeScript/JavaScript em projetos para soluções tecnológicas'
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
    position: 'Engenheiro de Software',
    startDate: new Date('2018-09-01'),
    endDate: new Date('2019-09-30'),
    location: 'Oslo, Noruega',
    description: 'Desenvolver e manter solução completa de aplicativo usando NodeJS com stack completa ReactJS e ReactNative e melhores práticas de UX',
    responsibilities: [
      'Desenvolvendo Soluções Agro para Agricultores Profissionais e Pequenos',
      'Desenvolvimento de soluções usando Arquitetura Serverless',
      'Desenvolvimento de stack arquitetural com Terraform, Kubernetes, Ambassador e Docker',
      'Desenvolvimento em stack JS completa, NodeJS, ReactJS + Redux',
      'Desenvolvimento de aplicativo para pequenos agricultores usando React-Native',
      'Implementação de GitOps usando Terraform',
      'Desenvolvimento de soluções internas usando GraphQL',
      'Desenvolvimento de ferramenta de análise de dados com tecnologia OCR usando PYTHON + RabbitMQ'
    ],
    achievements: [
      'Treinamento CSD (Certified Scrum Developer)',
      'Gerente da Comunidade de Desenvolvedores'
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
    position: 'Engenheiro de Software',
    startDate: new Date('2018-03-01'),
    endDate: new Date('2018-08-31'),
    location: 'São Paulo, Brasil',
    description: 'Criar sistema financeiro e resiliente de conversão de moeda para uso interno e externo de consultoria',
    responsibilities: [
      'Desenvolvimento de sistemas de impacto em vendas e para área de Atendimento ao Cliente',
      'Desenvolvimento de sistema CRUD White-Label usando Python / Flask',
      'Desenvolvimento de sistema centralizado de consulta StackStock, usando diferentes fornecedores de API',
      'Implementação de Celery para gerenciamento de tarefas de aplicação',
      'DevOps simplificado usando Docker e Docker Compose em todos os projetos',
      'Deploy usando Jenkins',
      'Gerenciamento de provedor AWS'
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
    position: 'Engenheiro Full-Stack',
    startDate: new Date('2016-04-01'),
    endDate: new Date('2017-06-30'),
    location: 'São Paulo, Brasil',
    description: 'Desenvolver jogos e produtos digitais para Wizard Escola de Inglês para crianças, adolescentes e adultos',
    responsibilities: [
      'Atuei como Scrum Master e desenvolvedor para novos produtos digitais da marca Wizard',
      'Desenvolvi APIs para múltiplos projetos usando Flask-Rest e arquitetura RESTful',
      'Desenvolvi jogos para produtos das Escolas Wizard usando Haxe e framework OpenFL',
      'Desenvolvi e mantive sistemas web usando Python e Django',
      'Apliquei conceitos de TDD em todos os projetos',
      'Implementei APIs Watson para resultados cognitivos e de data science',
      'Liderei a integração de um Sistema de Aprendizado Adaptativo'
    ],
    achievements: [
      '4º lugar no Hackathon Interno de Inovação Pearson Growth 2016',
      'Desenvolvi produto inovador focado em Aprendizado de Inglês para Adultos e Empregabilidade'
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
    position: 'Engenheiro Full-Stack',
    startDate: new Date('2013-06-01'),
    endDate: new Date('2016-03-31'),
    location: 'São Paulo, Brasil',
    description: 'Projetei e implementei uma plataforma abrangente para venda de ingressos, focando em escalabilidade, experiência do usuário e eficiência operacional',
    responsibilities: [
      'Construí um sistema robusto de reservas para eventos de alta demanda',
      'Utilizei PHP para lógica backend, CSS3 e HTML5 para designs frontend responsivos',
      'Criei um aplicativo móvel combinando funcionalidade de venda de ingressos com recursos sociais',
      'Projetei e implantei APIs consumidas pelo aplicativo móvel',
      'Aproveitei Amazon Web Services para hospedagem, armazenamento de dados e escalabilidade',
      'Desenvolvi um sistema automatizado de email marketing',
      'Utilizei Gulp e módulos JavaScript para otimizar geração de templates de email'
    ],
    achievements: [
      'Disponibilidade em tempo real e interação perfeita do usuário',
      'Engajamento aprimorado do usuário e descoberta de eventos',
      'Performance otimizada da plataforma e redução de tempo de inatividade',
      'Comunicação personalizada aumentando engajamento'
    ],
    technologies: [
      'PHP', 'JavaScript', 'HTML5', 'CSS3', 'Gulp', 'RESTful APIs',
      'AWS', 'Design Responsivo', 'Sistemas em Tempo Real'
    ],
    companyLogo: '/images/appticket.png',
    type: 'full-time'
  },
  {
    id: 'planit',
    company: 'PlanIT',
    position: 'Programador',
    startDate: new Date('2007-05-01'),
    endDate: new Date('2012-08-31'),
    location: 'Mogi das Cruzes, São Paulo, Brasil',
    description: 'Programador usando Visual FoxPro para sistemas CRM e Financeiros, banco de dados PostgreSQL e administração de servidores.',
    responsibilities: [
      'Desenvolvi e mantive sistemas CRM e financeiros usando Visual FoxPro',
      'Projetei e otimizei bancos de dados PostgreSQL para aplicações de negócios',
      'Administrei servidores Linux para confiabilidade e performance do sistema',
      'Forneci suporte técnico e troubleshooting para usuários internos e externos',
      'Colaborei com stakeholders de negócios para coletar requisitos e entregar soluções'
    ],
    achievements: [
      'Melhorei estabilidade e performance do sistema através de otimização de banco de dados',
      'Migrei com sucesso dados legados para PostgreSQL',
      'Aprimorei experiência do usuário e eficiência operacional em workflows de CRM'
    ],
    technologies: [
      'Visual FoxPro', 'PostgreSQL', 'Linux', 'Sistemas CRM', 'Sistemas Financeiros'
    ],
    companyLogo: '/images/planit_logo.jpg',
    type: 'full-time'
  }
]

const skillCategories: SkillCategory[] = [
  {
    name: 'DevOps & Infraestrutura',
    icon: '🚀',
    color: '#3B82F6',
    skills: [
      { name: 'Docker', level: 9, yearsExperience: 8, category: 'DevOps & Infraestrutura', featured: true },
      { name: 'Kubernetes', level: 8, yearsExperience: 6, category: 'DevOps & Infraestrutura', featured: true },
      { name: 'Terraform', level: 8, yearsExperience: 5, category: 'DevOps & Infraestrutura', featured: true },
      { name: 'Azure DevOps', level: 9, yearsExperience: 6, category: 'DevOps & Infraestrutura', featured: true },
      { name: 'AWS', level: 7, yearsExperience: 7, category: 'DevOps & Infraestrutura' },
      { name: 'GitOps', level: 8, yearsExperience: 4, category: 'DevOps & Infraestrutura' },
      { name: 'CI/CD', level: 9, yearsExperience: 8, category: 'DevOps & Infraestrutura', featured: true }
    ]
  },
  {
    name: 'Linguagens de Programação',
    icon: '💻',
    color: '#10B981',
    skills: [
      { name: 'Python', level: 9, yearsExperience: 10, category: 'Linguagens de Programação', featured: true },
      { name: 'JavaScript', level: 8, yearsExperience: 12, category: 'Linguagens de Programação', featured: true },
      { name: 'TypeScript', level: 8, yearsExperience: 6, category: 'Linguagens de Programação', featured: true },
      { name: 'C#/.NET', level: 7, yearsExperience: 5, category: 'Linguagens de Programação' },
      { name: 'PowerShell', level: 8, yearsExperience: 4, category: 'Linguagens de Programação' },
      { name: 'Bash', level: 8, yearsExperience: 8, category: 'Linguagens de Programação' },
      { name: 'PHP', level: 6, yearsExperience: 5, category: 'Linguagens de Programação' }
    ]
  },
  {
    name: 'Desenvolvimento Frontend',
    icon: '🎨',
    color: '#F59E0B',
    skills: [
      { name: 'React', level: 8, yearsExperience: 7, category: 'Desenvolvimento Frontend', featured: true },
      { name: 'Next.js', level: 8, yearsExperience: 3, category: 'Desenvolvimento Frontend', featured: true },
      { name: 'HTML5', level: 9, yearsExperience: 15, category: 'Desenvolvimento Frontend' },
      { name: 'CSS3', level: 8, yearsExperience: 15, category: 'Desenvolvimento Frontend' },
      { name: 'Tailwind CSS', level: 7, yearsExperience: 2, category: 'Desenvolvimento Frontend' },
      { name: 'React Native', level: 7, yearsExperience: 4, category: 'Desenvolvimento Frontend' }
    ]
  },
  {
    name: 'Desenvolvimento Backend',
    icon: '⚙️',
    color: '#8B5CF6',
    skills: [
      { name: 'Node.js', level: 8, yearsExperience: 7, category: 'Desenvolvimento Backend', featured: true },
      { name: 'Flask', level: 8, yearsExperience: 6, category: 'Desenvolvimento Backend' },
      { name: 'Django', level: 7, yearsExperience: 4, category: 'Desenvolvimento Backend' },
      { name: 'GraphQL', level: 7, yearsExperience: 3, category: 'Desenvolvimento Backend' },
      { name: 'APIs RESTful', level: 9, yearsExperience: 10, category: 'Desenvolvimento Backend', featured: true },
      { name: 'Microsserviços', level: 8, yearsExperience: 5, category: 'Desenvolvimento Backend' }
    ]
  },
  {
    name: 'Metodologias & Práticas',
    icon: '📊',
    color: '#EF4444',
    skills: [
      { name: 'Scrum', level: 9, yearsExperience: 8, category: 'Metodologias & Práticas', featured: true },
      { name: 'Ágil', level: 9, yearsExperience: 8, category: 'Metodologias & Práticas', featured: true },
      { name: 'TDD', level: 7, yearsExperience: 5, category: 'Metodologias & Práticas' },
      { name: 'DevSecOps', level: 8, yearsExperience: 4, category: 'Metodologias & Práticas' },
      { name: 'Code Review', level: 8, yearsExperience: 8, category: 'Metodologias & Práticas' },
      { name: 'Liderança Técnica', level: 7, yearsExperience: 5, category: 'Metodologias & Práticas' }
    ]
  }
]

const projects: Project[] = [
  {
    id: 'azdevops-pipeline-variables',
    name: 'Azure DevOps Pipeline Variables',
    description: 'Ferramenta para gerenciar variáveis de pipeline do Azure DevOps de forma eficiente',
    longDescription: 'Uma ferramenta abrangente projetada para otimizar o gerenciamento de variáveis de pipeline do Azure DevOps em múltiplos projetos e ambientes.',
    technologies: ['TypeScript', 'Azure DevOps API', 'Node.js', 'CLI'],
    startDate: new Date('2022-01-01'),
    endDate: new Date('2022-06-30'),
    status: 'completed',
    role: 'Desenvolvedor',
    teamSize: 1,
    images: ['/images/projects/extension-devops-jsontovariable.png'],
    demoUrl: '/projects/azdevops-pipeline-variables',
    githubUrl: 'https://github.com/kauemendes/azdevops-pipeline-variables',
    highlights: [
      'Gerenciamento automatizado de variáveis entre ambientes',
      'Redução de 80% no tempo de configuração de deploy',
      'Interface CLI para fácil integração'
    ],
    impact: [
      { metric: 'Tempo Economizado', value: '80%', description: 'Redução no tempo de gerenciamento de variáveis' },
      { metric: 'Taxa de Erro', value: '95%', description: 'Diminuição em erros de configuração' }
    ],
    featured: true
  },
  {
    id: 'azdevops-json-to-variable',
    name: 'Azure DevOps JSON to Variable',
    description: 'Converter configurações JSON em variáveis do Azure DevOps',
    longDescription: 'Uma ferramenta utilitária que converte arquivos de configuração JSON em variáveis de pipeline do Azure DevOps, permitindo melhor gerenciamento de configuração.',
    technologies: ['JavaScript', 'Azure DevOps', 'JSON', 'Automação'],
    startDate: new Date('2021-08-01'),
    endDate: new Date('2021-12-31'),
    status: 'completed',
    role: 'Desenvolvedor',
    teamSize: 1,
    images: ['/images/projects/extension-devops-printvariables.png'],
    demoUrl: '/projects/azdevops-json-to-variable',
    githubUrl: 'https://github.com/kauemendes/azdevops-json-to-variable',
    highlights: [
      'Conversão automatizada de JSON para variável',
      'Suporte para estruturas JSON aninhadas',
      'Capacidades de processamento em lote'
    ],
    featured: true
  },
  {
    id: 'pinguimcast',
    name: 'PinguimCast',
    description: 'Plataforma de podcast para entusiastas de tecnologia',
    longDescription: 'Uma plataforma moderna de podcast construída para entusiastas de tecnologia, com gerenciamento de episódios, capacidades de streaming e recursos de comunidade.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Processamento de Áudio'],
    startDate: new Date('2020-03-01'),
    endDate: new Date('2020-12-31'),
    status: 'completed',
    role: 'Apresentador',
    teamSize: 2,
    images: ['/images/projects/pinguimcastlogo.png'],
    demoUrl: '/projects/pinguimcast',
    highlights: [
      'Streaming e gerenciamento de áudio',
      'Recursos de engajamento da comunidade',
      'Design responsivo para todos os dispositivos'
    ],
    featured: true
  }
]

export const resumeData: ResumeData = {
  personal: {
    name: 'Kaue Mendes',
    title: 'Engenheiro DevOps & Desenvolvedor de Software',
    email: 'kaue.mendes@gmail.com',
    phone: '+55 11 998 982 401',
    location: 'São Paulo, Brasil',
    website: 'https://kauecode.com',
    summary: 'Sou uma pessoa incrivelmente apaixonada, dedicada a criar código que transforma a vida das pessoas, seja através de automação, produtos inovadores ou pull requests impactantes. O que me move é criar um ambiente de trabalho colaborativo e diverso.',
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
      institution: 'Universidade de Mogi Das Cruzes',
      degree: 'Tecnólogo',
      field: 'Tecnologia em Redes',
      startDate: new Date('2007-01-01'),
      endDate: new Date('2009-12-31'),
      location: 'Mogi das Cruzes, São Paulo, Brasil',
      description: 'Focado em infraestrutura de rede e internet e automação'
    },
    {
      id: 'mba-game-and-software',
      institution: 'FIAP',
      degree: 'MBA',
      field: 'Desenvolvimento de Software e Games',
      startDate: new Date('2014-01-01'),
      endDate: new Date('2015-12-31'),
      location: 'São Paulo, Brasil',
      description: 'Focado em desenvolvimento de software e jogos'
    }
  ],
  skills: skillCategories,
  projects: projects,
  achievements: [
    {
      id: 'pearson-hackathon',
      title: '4º Lugar - Hackathon Interno de Inovação Pearson Growth',
      description: 'Desenvolvi produto inovador focado em Aprendizado de Inglês para Adultos e Empregabilidade',
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
      description: 'Certificado em práticas de desenvolvimento Scrum e metodologias ágeis'
    },
    {
      id: 'cpa-20',
      name: 'CPA-20',
      issuer: 'Anbima',
      issueDate: new Date('2025-07-20'),
      description: 'Certificado em análise de investimentos e gestão de portfólio'
    }
  ],
  languages: [
    { name: 'Português', level: 'native' },
    { name: 'Inglês', level: 'fluent' },
    { name: 'Espanhol', level: 'intermediate' }
  ],
  volunteer: [],
  lastUpdated: new Date(),
  version: '1.0.0'
}
