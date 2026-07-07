'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

const ConsultingPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
    budget: ''
  });

  const t = useTranslations('consult');
  const params = useParams();
  const locale = params.locale as string;
  const isPt = locale === 'pt';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = isPt ? `Consulta: ${contactForm.service}` : `Consulting Inquiry: ${contactForm.service}`;
    const body = isPt ? `Olá Kaue,

Estou interessado em seus serviços de consultoria.

Nome: ${contactForm.name}
Empresa: ${contactForm.company}
Email: ${contactForm.email}
Serviço: ${contactForm.service}
Faixa de Orçamento: ${contactForm.budget}

Mensagem:
${contactForm.message}

Aguardo seu retorno!

Atenciosamente,
${contactForm.name}` : `Hi Kaue,

I'm interested in your consulting services.

Name: ${contactForm.name}
Company: ${contactForm.company}
Email: ${contactForm.email}
Service: ${contactForm.service}
Budget Range: ${contactForm.budget}

Message:
${contactForm.message}

Looking forward to hearing from you!

Best regards,
${contactForm.name}`;

    const mailtoLink = `mailto:kauemendes@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const services = [
    {
      id: 'enterprise-ai',
      title: t('services.enterpriseAi'),
      icon: '🤖',
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
      icon: '☁️',
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
      icon: '🔄',
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
      icon: '🖥️',
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
      icon: '💻',
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
      icon: '📧',
      action: 'mailto:kaue.mendes@gmail.com',
      description: isPt ? 'Melhor para discussões detalhadas de projetos' : 'Best for detailed project discussions'
    },
    {
      name: 'WhatsApp',
      value: '+55 11 998 982 401',
      icon: '💬',
      action: 'https://wa.me/5511998982401',
      description: isPt ? 'Perguntas rápidas e contato inicial' : 'Quick questions and initial contact'
    },
    {
      name: 'LinkedIn',
      value: '/in/kauemendes',
      icon: '💼',
      action: 'https://www.linkedin.com/in/kauemendes/',
      description: isPt ? 'Networking profissional e referências' : 'Professional networking and references'
    },
    {
      name: 'Calendly',
      value: isPt ? 'Agendar uma chamada' : 'Schedule a call',
      icon: '📅',
      action: '#',
      description: isPt ? 'Agende uma consulta gratuita de 30 minutos' : 'Book a free 30-minute consultation',
      note: isPt ? 'Em breve - use email por enquanto' : 'Setup coming soon - use email for now'
    }
  ];

  const tabs = [
    { id: 'overview', label: t('servicesOverview'), icon: '🎯' },
    { id: 'solutions', label: t('completeSolutions'), icon: '⚡' },
    { id: 'process', label: t('howIWork'), icon: '🔄' },
    { id: 'contact', label: t('getStarted'), icon: '🚀' }
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
      description: 'Análise profunda da sua infraestrutura atual, pontos de dor e objetivos de negócio.',
      icon: '🔍'
    },
    {
      step: '02',
      title: 'Estratégia & Planejamento',
      description: 'Design de soluções customizadas com roadmaps claros, cronogramas e métricas de sucesso.',
      icon: '📋'
    },
    {
      step: '03',
      title: 'Implementação',
      description: 'Desenvolvimento e deploy ágil com atualizações regulares e comunicação transparente.',
      icon: '⚙️'
    },
    {
      step: '04',
      title: 'Suporte & Otimização',
      description: 'Monitoramento contínuo, manutenção e melhoria contínua dos seus sistemas.',
      icon: '📈'
    }
  ] : [
    {
      step: '01',
      title: 'Discovery & Assessment',
      description: 'Deep dive into your current infrastructure, pain points, and business goals.',
      icon: '🔍'
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Design custom solutions with clear roadmaps, timelines, and success metrics.',
      icon: '📋'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Agile development and deployment with regular updates and transparent communication.',
      icon: '⚙️'
    },
    {
      step: '04',
      title: 'Support & Optimization',
      description: 'Ongoing monitoring, maintenance, and continuous improvement of your systems.',
      icon: '📈'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-brand">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300E5FF' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="mb-6">
            <span className="bg-brand-accent1/10 text-brand-accent1 text-sm font-medium px-4 py-2 rounded-full border border-brand-accent1/20">
              {t('subtitle')}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-brand-neutral-light mb-6">
            {isPt ? 'Consultoria' : 'Enterprise'} <span className="bg-gradient-accent bg-clip-text text-transparent">{isPt ? 'Cloud & DevOps' : 'Cloud & DevOps'}</span> {isPt ? 'Empresarial' : 'Consulting'}
          </h1>

          <p className="text-xl text-brand-neutral-light/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            {isPt
              ? 'Transforme seu negócio com infraestrutura cloud escalável, pipelines DevOps automatizados e soluções de hospedagem gerenciada. De startups a sistemas enterprise.'
              : 'Transform your business with scalable cloud infrastructure, automated DevOps pipelines, and managed hosting solutions. From small startups to enterprise systems.'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => setActiveTab('contact')}
              className="group inline-flex justify-center items-center py-4 px-8 text-base font-semibold text-center text-brand-primary rounded-lg bg-brand-accent1 hover:bg-brand-accent2 focus:ring-4 focus:ring-brand-accent1/30 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {t('getFreeConsultation')}
              <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </button>

            <Link
              href={`/${locale}/resume`}
              className="group inline-flex justify-center items-center py-4 px-8 text-base font-semibold text-center text-brand-neutral-light rounded-lg border-2 border-brand-accent1 hover:bg-brand-accent1 hover:text-brand-primary focus:ring-4 focus:ring-brand-accent1/30 transition-all duration-300"
            >
              {t('viewExperience')}
              <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center border-b border-brand-secondary bg-brand-secondary/50 backdrop-blur-xs rounded-t-2xl">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`group px-6 py-4 font-medium text-sm border-b-2 transition-all duration-300 ${
                activeTab === tab.id
                  ? 'border-brand-accent1 text-brand-accent1 bg-brand-accent1/5'
                  : 'border-transparent text-brand-neutral-light hover:text-brand-accent1 hover:border-brand-accent1/50'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* Services Overview */}
        {activeTab === 'overview' && (
          <div className="space-y-12 animate-fadeIn">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold font-poppins text-brand-neutral-light mb-4">
                {isPt ? 'Soluções Tecnológicas Completas' : 'Complete Technology Solutions'}
              </h2>
              <p className="text-brand-neutral-light/80 text-lg">
                {isPt
                  ? 'Eu não apenas construo websites - eu projeto soluções completas que escalam com seu negócio. De infraestrutura cloud a hospedagem gerenciada, veja como posso ajudar a transformar seu cenário tecnológico.'
                  : 'I don\'t just build websites - I architect complete solutions that scale with your business. From cloud infrastructure to managed hosting, here\'s how I can help transform your technology landscape.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const featured = (service as { featured?: boolean }).featured
                return (
                  <div
                    key={service.id}
                    id={service.id}
                    className={`group rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                      featured
                        ? 'md:col-span-2 bg-linear-to-br from-accent/10 to-brand-secondary border-2 border-accent/50 hover:border-accent hover:shadow-accent/20 relative overflow-hidden'
                        : 'bg-brand-secondary border border-brand-secondary hover:border-brand-accent1/30'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {featured && (
                      <div className="absolute top-0 right-0 bg-accent text-brand-primary text-xs font-semibold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                        {isPt ? 'Em Destaque · Novo' : 'Featured · New'}
                      </div>
                    )}
                    <div className="flex items-center mb-4">
                      <span className="text-4xl mr-4">{service.icon}</span>
                      <h3 className={`text-xl font-bold font-poppins transition-colors duration-300 ${
                        featured
                          ? 'text-accent group-hover:text-accent-strong'
                          : 'text-brand-neutral-light group-hover:text-brand-accent1'
                      }`}>
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-brand-neutral-light/80 mb-6">
                      {service.description}
                    </p>
                    <ul className={`space-y-2 ${featured ? 'md:grid md:grid-cols-2 md:gap-x-6 md:space-y-0' : ''}`}>
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start md:py-1">
                          <span className={`mr-3 mt-0.5 text-base ${featured ? 'text-accent' : 'text-brand-accent2'}`}>▸</span>
                          <span className="text-brand-neutral-light/80 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Complete Solutions */}
        {activeTab === 'solutions' && (
          <div className="space-y-12 animate-fadeIn">
            <div className="text-center">
              <h2 className="text-3xl font-bold font-poppins text-brand-neutral-light mb-4">
                {isPt ? 'Soluções Ponta a Ponta' : 'End-to-End Solutions'}
              </h2>
              <p className="text-brand-neutral-light/80 text-lg max-w-3xl mx-auto">
                {isPt
                  ? 'Da consulta inicial ao suporte contínuo, eu forneço soluções abrangentes que atendem toda a sua stack tecnológica.'
                  : 'From initial consultation to ongoing support, I provide comprehensive solutions that address your entire technology stack.'}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Startup Package */}
              <div className="bg-brand-secondary rounded-xl shadow-lg border border-brand-secondary p-8 hover:border-brand-accent2/30 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-brand-accent2/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-2xl font-bold font-poppins text-brand-neutral-light mb-2">
                    {packages.startup.title}
                  </h3>
                  <p className="text-brand-neutral-light/80">
                    {packages.startup.description}
                  </p>
                </div>
                <ul className="space-y-3 mb-8">
                  {packages.startup.items.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="text-brand-accent2 mr-3">✓</span>
                      <span className="text-brand-neutral-light/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Medium Package */}
              <div className="relative bg-brand-secondary rounded-xl shadow-lg border-2 border-brand-accent1 p-8 transform scale-105">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-brand-accent1 text-brand-primary px-4 py-1 rounded-full text-sm font-semibold">
                    {isPt ? 'Mais Popular' : 'Most Popular'}
                  </span>
                </div>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-brand-accent1/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-2xl font-bold font-poppins text-brand-neutral-light mb-2">
                    {packages.medium.title}
                  </h3>
                  <p className="text-brand-neutral-light/80">
                    {packages.medium.description}
                  </p>
                </div>
                <ul className="space-y-3 mb-8">
                  {packages.medium.items.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="text-brand-accent1 mr-3">✓</span>
                      <span className="text-brand-neutral-light/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Enterprise Package */}
              <div className="bg-brand-secondary rounded-xl shadow-lg border border-brand-secondary p-8 hover:border-brand-accent3/30 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-brand-accent3/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <h3 className="text-2xl font-bold font-poppins text-brand-neutral-light mb-2">
                    {packages.enterprise.title}
                  </h3>
                  <p className="text-brand-neutral-light/80">
                    {packages.enterprise.description}
                  </p>
                </div>
                <ul className="space-y-3 mb-8">
                  {packages.enterprise.items.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="text-brand-accent3 mr-3">✓</span>
                      <span className="text-brand-neutral-light/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Process */}
        {activeTab === 'process' && (
          <div className="space-y-12 animate-fadeIn">
            <div className="text-center">
              <h2 className="text-3xl font-bold font-poppins text-brand-neutral-light mb-4">
                {isPt ? 'Meu Processo de Consultoria' : 'My Consulting Process'}
              </h2>
              <p className="text-brand-neutral-light/80 text-lg max-w-3xl mx-auto">
                {isPt
                  ? 'Uma metodologia comprovada que garante entrega bem-sucedida de projetos e sucesso a longo prazo.'
                  : 'A proven methodology that ensures successful project delivery and long-term success.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((item, index) => (
                <div key={index} className="text-center group" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="bg-brand-secondary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-brand-accent1/30 group-hover:border-brand-accent1 transition-all duration-300 group-hover:scale-110">
                    <span className="text-3xl">{item.icon}</span>
                  </div>
                  <div className="text-sm font-bold text-brand-accent1 mb-2">
                    {isPt ? 'PASSO' : 'STEP'} {item.step}
                  </div>
                  <h3 className="text-lg font-bold font-poppins text-brand-neutral-light mb-3">
                    {item.title}
                  </h3>
                  <p className="text-brand-neutral-light/80 text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-linear-to-r from-brand-accent1/20 to-brand-accent2/20 rounded-2xl p-8 text-center border border-brand-accent1/30">
              <h3 className="text-2xl font-bold font-poppins text-brand-neutral-light mb-4">
                {isPt ? 'Consulta Inicial Gratuita' : 'Free Initial Consultation'}
              </h3>
              <p className="text-brand-neutral-light/80 mb-6">
                {isPt
                  ? 'Todo projeto começa com uma consulta gratuita de 30 minutos para entender suas necessidades e explorar como posso ajudar a alcançar seus objetivos.'
                  : 'Every project starts with a free 30-minute consultation to understand your needs and explore how I can help achieve your goals.'}
              </p>
              <button
                onClick={() => setActiveTab('contact')}
                className="group inline-flex justify-center items-center py-4 px-8 text-base font-semibold text-center text-brand-primary rounded-lg bg-brand-accent1 hover:bg-brand-accent2 focus:ring-4 focus:ring-brand-accent1/30 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {isPt ? 'Agende Sua Consulta Gratuita' : 'Schedule Your Free Consultation'}
                <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Contact */}
        {activeTab === 'contact' && (
          <div className="space-y-12 animate-fadeIn">
            <div className="text-center">
              <h2 className="text-3xl font-bold font-poppins text-brand-neutral-light mb-4">
                {isPt ? 'Vamos Começar Seu Projeto' : 'Let\'s Start Your Project'}
              </h2>
              <p className="text-brand-neutral-light/80 text-lg max-w-3xl mx-auto">
                {isPt
                  ? 'Pronto para transformar sua infraestrutura? Escolha como gostaria de entrar em contato, e eu responderei em até 24 horas.'
                  : 'Ready to transform your infrastructure? Choose how you\'d like to get in touch, and I\'ll respond within 24 hours.'}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Options */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold font-poppins text-brand-neutral-light mb-6">
                  {isPt ? 'Entre em Contato' : 'Get In Touch'}
                </h3>

                {contactOptions.map((option, index) => (
                  <div key={index} className="bg-brand-secondary rounded-xl p-6 shadow-lg border border-brand-secondary hover:border-brand-accent1/30 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <span className="text-2xl">{option.icon}</span>
                      <div className="flex-1">
                        <h4 className="font-semibold font-poppins text-brand-neutral-light mb-1">
                          {option.name}
                        </h4>
                        <p className="text-brand-neutral-light/80 text-sm mb-2">
                          {option.description}
                        </p>
                        {option.note && (
                          <p className="text-brand-accent3 text-xs mb-2">
                            {option.note}
                          </p>
                        )}
                        <a
                          href={option.action}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand-accent1 hover:text-brand-accent2 font-medium transition-colors duration-300"
                        >
                          {option.value}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Form */}
              <div className="bg-brand-secondary rounded-xl shadow-lg border border-brand-secondary p-8">
                <h3 className="text-xl font-bold font-poppins text-brand-neutral-light mb-6">
                  {isPt ? 'Formulário de Consulta' : 'Project Inquiry Form'}
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-brand-neutral-light mb-1">
                        {isPt ? 'Seu Nome *' : 'Your Name *'}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={contactForm.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-brand-primary rounded-md focus:outline-hidden focus:ring-2 focus:ring-brand-accent1 bg-brand-primary text-brand-neutral-light"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-brand-neutral-light mb-1">
                        {isPt ? 'Endereço de Email *' : 'Email Address *'}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={contactForm.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-brand-primary rounded-md focus:outline-hidden focus:ring-2 focus:ring-brand-accent1 bg-brand-primary text-brand-neutral-light"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-brand-neutral-light mb-1">
                      {isPt ? 'Empresa/Organização' : 'Company/Organization'}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={contactForm.company}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-brand-primary rounded-md focus:outline-hidden focus:ring-2 focus:ring-brand-accent1 bg-brand-primary text-brand-neutral-light"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-brand-neutral-light mb-1">
                        {isPt ? 'Serviço Desejado *' : 'Service Needed *'}
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={contactForm.service}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-brand-primary rounded-md focus:outline-hidden focus:ring-2 focus:ring-brand-accent1 bg-brand-primary text-brand-neutral-light"
                      >
                        <option value="">{isPt ? 'Selecione um serviço' : 'Select a service'}</option>
                        <option value="Enterprise AI Consulting">{isPt ? 'Consultoria de IA Empresarial' : 'Enterprise AI Consulting'}</option>
                        <option value="Cloud Infrastructure">{isPt ? 'Infraestrutura Cloud' : 'Cloud Infrastructure'}</option>
                        <option value="DevOps Automation">{isPt ? 'Automação DevOps' : 'DevOps Automation'}</option>
                        <option value="Managed Hosting">{isPt ? 'Hospedagem Gerenciada' : 'Managed Hosting'}</option>
                        <option value="Full-Stack Development">{isPt ? 'Desenvolvimento Full-Stack' : 'Full-Stack Development'}</option>
                        <option value="Consultation Only">{isPt ? 'Apenas Consultoria' : 'Consultation Only'}</option>
                        <option value="Custom Solution">{isPt ? 'Solução Customizada' : 'Custom Solution'}</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-brand-neutral-light mb-1">
                        {isPt ? 'Faixa de Orçamento' : 'Budget Range'}
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={contactForm.budget}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-brand-primary rounded-md focus:outline-hidden focus:ring-2 focus:ring-brand-accent1 bg-brand-primary text-brand-neutral-light"
                      >
                        <option value="">{isPt ? 'Selecione faixa de orçamento' : 'Select budget range'}</option>
                        <option value="Under €5,000">{isPt ? 'Abaixo de €5.000' : 'Under €5,000'}</option>
                        <option value="€5,000 - €15,000">€5.000 - €15.000</option>
                        <option value="€15,000 - €50,000">€15.000 - €50.000</option>
                        <option value="Over €50,000">{isPt ? 'Acima de €50.000' : 'Over €50,000'}</option>
                        <option value="Ongoing Monthly">{isPt ? 'Mensal Contínuo' : 'Ongoing Monthly'}</option>
                        <option value="Prefer to discuss">{isPt ? 'Prefiro discutir' : 'Prefer to discuss'}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-brand-neutral-light mb-1">
                      {isPt ? 'Detalhes do Projeto *' : 'Project Details *'}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={contactForm.message}
                      onChange={handleInputChange}
                      placeholder={isPt ? 'Conte-me sobre seu projeto, desafios atuais e objetivos...' : 'Tell me about your project, current challenges, and goals...'}
                      className="w-full px-3 py-2 border border-brand-primary rounded-md focus:outline-hidden focus:ring-2 focus:ring-brand-accent1 bg-brand-primary text-brand-neutral-light"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-accent1 text-brand-primary py-3 px-6 rounded-md font-semibold hover:bg-brand-accent2 transition-all duration-300 transform hover:scale-105"
                  >
                    {isPt ? 'Enviar Consulta via Email' : 'Send Inquiry via Email'}
                  </button>

                  <p className="text-brand-neutral-medium text-sm text-center">
                    {isPt ? 'Isso abrirá seu cliente de email com os dados do formulário preenchidos' : 'This will open your email client with the form data pre-filled'}
                  </p>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConsultingPage;
