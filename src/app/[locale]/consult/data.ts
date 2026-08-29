import type { useTranslations } from 'next-intl';

type Translator = ReturnType<typeof useTranslations>;

/**
 * Consulting copy. Extracted verbatim from the page component, which had grown
 * to 808 lines with all of this inline. Copy still uses `isPt` ternaries rather
 * than the message files — moving ~24 bilingual entries across is a separate
 * pass, and doing it here would risk transcribing them wrong.
 */
export function getConsultData(isPt: boolean, t: Translator) {
  const services = [
    {
      id: 'enterprise-ai',
      title: t('services.enterpriseAi'),
      featured: true,
      description: isPt
        ? 'Arquitetura, governança e operação de IA em ambiente empresarial — do MVP ao IAOps em produção'
        : 'Architecture, governance and operations for AI in the enterprise — from MVP to IAOps in production',
      features: isPt ? [
        'Arquitetura de IA empresarial e estratégia de adoção',
        'Sistemas multi-agente e workflows agênticos (Vibe Coding)',
        'Integração com MCPs empresariais e ferramentas internas',
        'IAOps: pipelines, observabilidade e governança de modelos',
        'Implantação de modelos LLM em Kubernetes com GPUs (vLLM, Ollama, Triton)',
        'AWS Bedrock, OpenAI, Anthropic, Mistral, Llama — gestão multi-modelo',
        'Spec-Driven Development e padrões para projetos com IA',
        'OpenWebUI, Codex, Claude Code e plataformas internas de IA',
        'RAG, engenharia de contexto e bases de conhecimento corporativas',
        'Otimização de processos e automação com IA',
        'Segurança, compliance e custo de operação de IA'
      ] : [
        'Enterprise AI architecture and adoption strategy',
        'Multi-agent systems and agentic workflows (Vibe Coding)',
        'Integration with enterprise MCPs and internal tooling',
        'IAOps: pipelines, observability and model governance',
        'LLM model deployment on Kubernetes with GPUs (vLLM, Ollama, Triton)',
        'AWS Bedrock, OpenAI, Anthropic, Mistral, Llama — multi-model management',
        'Spec-Driven Development and patterns for AI projects',
        'OpenWebUI, Codex, Claude Code and internal AI platforms',
        'RAG, context engineering and corporate knowledge bases',
        'Process optimization and AI-driven automation',
        'AI security, compliance and operating cost'
      ]
    },
    {
      id: 'cloud-infrastructure',
      title: t('services.cloudInfrastructure'),
      description: isPt ? 'Design e implementação completa de soluções cloud' : 'Complete cloud solutions design and implementation',
      features: isPt ? [
        'Design de arquitetura cloud Azure/AWS/GCP',
        'Infraestrutura como Código (Terraform, ARM, Bicep)',
        'Planejamento de alta disponibilidade e recuperação de desastres',
        'Estratégias e execução de migração cloud',
        'Otimização de custos e gerenciamento de recursos',
        'Implementação de segurança e conformidade'
      ] : [
        'Azure/AWS/GCP cloud architecture design',
        'Infrastructure as Code (Terraform, ARM, Bicep)',
        'High availability and disaster recovery planning',
        'Cloud migration strategies and execution',
        'Cost optimization and resource management',
        'Security and compliance implementation'
      ]
    },
    {
      id: 'devops-automation',
      title: t('services.devopsAutomation'),
      description: isPt ? 'Automação ponta a ponta e implementação de pipelines CI/CD' : 'End-to-end automation and CI/CD pipeline implementation',
      features: isPt ? [
        'Design e implementação de pipelines CI/CD',
        'Configuração de Azure DevOps, GitHub Actions, Jenkins',
        'Automação e provisionamento de infraestrutura',
        'Gerenciamento de configuração (Ansible, Chef)',
        'Soluções de monitoramento e logging',
        'Gerenciamento de releases e estratégias de deploy'
      ] : [
        'CI/CD pipeline design and implementation',
        'Azure DevOps, GitHub Actions, Jenkins setup',
        'Infrastructure automation and provisioning',
        'Configuration management (Ansible, Chef)',
        'Monitoring and logging solutions',
        'Release management and deployment strategies'
      ]
    },
    {
      id: 'managed-hosting',
      title: t('services.managedHosting'),
      description: isPt ? 'Hospedagem e gerenciamento completo para pequenas e médias empresas' : 'Complete hosting and management for small to medium businesses',
      features: isPt ? [
        'Hospedagem e gerenciamento de aplicações web',
        'Administração e otimização de banco de dados',
        'Monitoramento e manutenção 24/7',
        'Backup e recuperação de desastres',
        'Patches de segurança e atualizações',
        'Otimização de performance e escalabilidade'
      ] : [
        'Web application hosting and management',
        'Database administration and optimization',
        '24/7 monitoring and maintenance',
        'Backup and disaster recovery',
        'Security patching and updates',
        'Performance optimization and scaling'
      ]
    },
    {
      id: 'full-stack-development',
      title: t('services.fullStackDevelopment'),
      description: isPt ? 'Aplicações web completas e soluções empresariais' : 'Complete web applications and enterprise solutions',
      features: isPt ? [
        'Desenvolvimento front-end React/Next.js',
        'Desenvolvimento backend Node.js/Python',
        'Design e otimização de banco de dados',
        'Design e implementação de APIs',
        'Design responsivo para mobile',
        'Otimização de performance e testes'
      ] : [
        'React/Next.js front-end development',
        'Node.js/Python backend development',
        'Database design and optimization',
        'API design and implementation',
        'Mobile-responsive design',
        'Performance optimization and testing'
      ]
    }
  ];

  const contactOptions = [
    {
      name: 'Email',
      value: 'kaue.mendes@gmail.com',
      action: 'mailto:kaue.mendes@gmail.com',
      description: isPt ? 'Melhor para discussões detalhadas de projetos' : 'Best for detailed project discussions'
    },
    {
      name: 'WhatsApp',
      value: '+55 11 998 982 401',
      action: 'https://wa.me/5511998982401',
      description: isPt ? 'Perguntas rápidas e contato inicial' : 'Quick questions and initial contact'
    },
    {
      name: 'LinkedIn',
      value: '/in/kauemendes',
      action: 'https://www.linkedin.com/in/kauemendes/',
      description: isPt ? 'Networking profissional e referências' : 'Professional networking and references'
    },
    {
      name: 'Calendly',
      value: isPt ? 'Agendar uma chamada' : 'Schedule a call',
      action: '#',
      description: isPt ? 'Agende uma consulta gratuita de 30 minutos' : 'Book a free 30-minute consultation',
      note: isPt ? 'Em breve - use email por enquanto' : 'Setup coming soon - use email for now'
    }
  ];

  const packages = {
    startup: {
      title: isPt ? 'Startup & Pequenas Empresas' : 'Startup & Small Business',
      description: isPt ? 'Perfeito para empresas em crescimento' : 'Perfect for growing companies',
      items: isPt ? [
        'Configuração de infraestrutura cloud',
        'Pipeline CI/CD básico',
        'Hospedagem gerenciada & monitoramento',
        'Melhores práticas de segurança',
        'Suporte mensal & manutenção'
      ] : [
        'Cloud infrastructure setup',
        'Basic CI/CD pipeline',
        'Managed hosting & monitoring',
        'Security best practices',
        'Monthly support & maintenance'
      ]
    },
    medium: {
      title: t('packages.medium'),
      description: isPt ? 'Soluções escaláveis para crescimento' : 'Scalable solutions for growth',
      items: isPt ? [
        'Tudo do pacote Startup',
        'Configuração multi-ambiente',
        'Automação avançada',
        'Otimização de banco de dados',
        'Treinamento de equipe & documentação',
        'Monitoramento & suporte 24/7'
      ] : [
        'Everything in Startup package',
        'Multi-environment setup',
        'Advanced automation',
        'Database optimization',
        'Team training & documentation',
        '24/7 monitoring & support'
      ]
    },
    enterprise: {
      title: isPt ? 'Soluções Enterprise' : 'Enterprise Solutions',
      description: isPt ? 'Arquitetura enterprise customizada' : 'Custom enterprise architecture',
      items: isPt ? [
        'Tudo do pacote Medium',
        'Design de arquitetura customizada',
        'Estratégias multi-cloud',
        'Conformidade & governança',
        'Equipe de suporte dedicada',
        'Consultoria estratégica'
      ] : [
        'Everything in Medium package',
        'Custom architecture design',
        'Multi-cloud strategies',
        'Compliance & governance',
        'Dedicated support team',
        'Strategic consulting'
      ]
    }
  };

  const processSteps = isPt ? [
    {
      step: '01',
      title: 'Descoberta & Avaliação',
      description: 'Análise profunda da sua infraestrutura atual, pontos de dor e objetivos de negócio.'
    },
    {
      step: '02',
      title: 'Estratégia & Planejamento',
      description: 'Design de soluções customizadas com roadmaps claros, cronogramas e métricas de sucesso.'
    },
    {
      step: '03',
      title: 'Implementação',
      description: 'Desenvolvimento e deploy ágil com atualizações regulares e comunicação transparente.'
    },
    {
      step: '04',
      title: 'Suporte & Otimização',
      description: 'Monitoramento contínuo, manutenção e melhoria contínua dos seus sistemas.'
    }
  ] : [
    {
      step: '01',
      title: 'Discovery & Assessment',
      description: 'Deep dive into your current infrastructure, pain points, and business goals.'
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Design custom solutions with clear roadmaps, timelines, and success metrics.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Agile development and deployment with regular updates and transparent communication.'
    },
    {
      step: '04',
      title: 'Support & Optimization',
      description: 'Ongoing monitoring, maintenance, and continuous improvement of your systems.'
    }
  ];

  return { services, contactOptions, packages, processSteps };
}
