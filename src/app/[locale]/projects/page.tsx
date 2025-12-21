import { getProjects, Project } from '@/content/data/projects';
import Image from 'next/image';
import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Locale } from '@/i18n';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;

  return {
    title: locale === 'pt' ? 'Kaue Code - Projetos' : 'Kaue Code - Projects',
    description: locale === 'pt'
      ? 'Portfólio de ferramentas DevOps, extensões e projetos de tecnologia por Kaue Mendes'
      : 'Portfolio of DevOps tools, extensions, and technology projects by Kaue Mendes',
    keywords: ['Kaue Mendes', 'DevOps Tools', 'Azure DevOps Extensions', 'Software Projects', 'Cloud Engineer', 'Portfolio'],
    publisher: 'Kaue Mendes',
    creator: 'Kaue Mendes',
  }
}

interface ProjectCardProps {
  project: Project;
  locale: string;
  t: (key: string) => string;
}

function ProjectCard({ project, locale, t }: ProjectCardProps) {
  const statusColors = {
    'Published': 'bg-brand-accent2/20 text-brand-accent2 border-brand-accent2/30',
    'Publicado': 'bg-brand-accent2/20 text-brand-accent2 border-brand-accent2/30',
    'Active': 'bg-brand-accent1/20 text-brand-accent1 border-brand-accent1/30',
    'Ativo': 'bg-brand-accent1/20 text-brand-accent1 border-brand-accent1/30',
    'In Development': 'bg-brand-accent3/20 text-brand-accent3 border-brand-accent3/30',
    'Em Desenvolvimento': 'bg-brand-accent3/20 text-brand-accent3 border-brand-accent3/30'
  };

  return (
    <div className="group bg-brand-secondary rounded-xl shadow-lg border border-brand-secondary hover:border-brand-accent1/30 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      {/* Project Header */}
      <div className="relative">
        <Image
          src={project.image_banner}
          alt={project.title}
          width={400}
          height={200}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/60 to-transparent"></div>
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${statusColors[project.status as keyof typeof statusColors] || 'bg-brand-accent1/20 text-brand-accent1 border-brand-accent1/30'}`}>
            {project.status}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold font-poppins text-brand-neutral-light mb-2 group-hover:text-brand-accent1 transition-colors duration-300">
              {project.title}
            </h3>
            <div className="flex items-center space-x-4 text-sm text-brand-neutral-medium">
              <span className="bg-brand-primary px-3 py-1 rounded-full text-brand-accent1 font-medium">
                {project.category}
              </span>
              <span>{project.year}</span>
            </div>
          </div>
        </div>

        <p className="text-brand-neutral-light/80 mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold font-poppins text-brand-neutral-light mb-3">
            {t('technologies')}:
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-brand-accent1/10 text-brand-accent1 text-xs rounded-full border border-brand-accent1/20 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold font-poppins text-brand-neutral-light mb-3">
            {t('keyFeatures')}:
          </h4>
          <ul className="text-sm text-brand-neutral-light/80 space-y-2">
            {project.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-brand-accent2 mr-3 mt-0.5 text-base">▸</span>
                {feature}
              </li>
            ))}
            {project.features.length > 3 && (
              <li className="text-brand-neutral-medium text-xs pl-6">
                +{project.features.length - 3} {locale === 'pt' ? 'mais recursos' : 'more features'}
              </li>
            )}
          </ul>
        </div>

        {/* Impact */}
        {project.impact && (
          <div className="mb-6 p-4 bg-brand-primary/50 rounded-lg border border-brand-accent2/20">
            <h4 className="text-sm font-semibold font-poppins text-brand-accent2 mb-2">
              📊 {t('impact')}:
            </h4>
            <p className="text-sm text-brand-neutral-light/90">
              {project.impact}
            </p>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-wrap gap-3 pt-4 border-t border-brand-primary">
          <Link
            href={`/${locale}/projects/${project.id}`}
            className="flex-1 px-4 py-2 bg-brand-accent1 text-brand-primary rounded-lg hover:bg-brand-accent2 transition-all duration-300 text-sm font-semibold text-center transform hover:scale-105"
          >
            {t('viewDetails')}
          </Link>

          {project.marketplace && (
            <a
              href={project.marketplace}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-brand-accent1 text-brand-accent1 rounded-lg hover:bg-brand-accent1 hover:text-brand-primary transition-all duration-300 text-sm font-medium"
            >
              Marketplace
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-brand-accent2 text-brand-accent2 rounded-lg hover:bg-brand-accent2 hover:text-brand-primary transition-all duration-300 text-sm font-medium"
            >
              GitHub
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-brand-accent3 text-brand-accent3 rounded-lg hover:bg-brand-accent3 hover:text-brand-primary transition-all duration-300 text-sm font-medium"
            >
              {t('liveDemo')}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default async function ProjectsPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'projects' });
  const projects = await getProjects(locale as Locale);
  const categories = Array.from(new Set(projects.map(p => p.category)));

  return (
    <div className="min-h-screen bg-gradient-brand">
      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Header */}
        <div className="text-center mb-16 pt-16">
          <div className="mb-6">
            <span className="bg-brand-accent1/10 text-brand-accent1 text-sm font-medium px-4 py-2 rounded-full border border-brand-accent1/20">
              {t('subtitle')}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-brand-neutral-light mb-6">
            {t('title').split(' ')[0]} <span className="bg-gradient-accent bg-clip-text text-transparent">{t('title').split(' ')[1] || 'Projects'}</span>
          </h1>

          <p className="text-brand-neutral-light/80 text-lg mt-6 max-w-3xl mx-auto leading-relaxed">
            {locale === 'pt'
              ? 'Explore minha coleção de ferramentas DevOps, extensões Azure e projetos de tecnologia. Cada projeto representa uma solução para desafios reais em desenvolvimento de software e operações.'
              : 'Explore my collection of DevOps tools, Azure extensions, and technology projects. Each project represents a solution to real-world challenges in software development and operations.'}
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-brand-secondary/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-brand-secondary">
            <div className="text-3xl font-bold text-brand-accent1 mb-2 font-poppins">
              {projects.length}
            </div>
            <div className="text-brand-neutral-medium text-sm font-medium">
              {t('projectsBuilt')}
            </div>
          </div>

          <div className="bg-brand-secondary/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-brand-secondary">
            <div className="text-3xl font-bold text-brand-accent2 mb-2 font-poppins">
              1500+
            </div>
            <div className="text-brand-neutral-medium text-sm font-medium">
              {t('downloads')}
            </div>
          </div>

          <div className="bg-brand-secondary/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-brand-secondary">
            <div className="text-3xl font-bold text-brand-accent3 mb-2 font-poppins">
              {categories.length}
            </div>
            <div className="text-brand-neutral-medium text-sm font-medium">
              {locale === 'pt' ? 'Categorias' : 'Categories'}
            </div>
          </div>

          <div className="bg-brand-secondary/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-brand-secondary">
            <div className="text-3xl font-bold text-brand-accent1 mb-2 font-poppins">
              2023
            </div>
            <div className="text-brand-neutral-medium text-sm font-medium">
              {t('latestRelease')}
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold font-poppins text-brand-neutral-light mb-6 text-center">
            {locale === 'pt' ? 'Categorias de Projetos' : 'Project Categories'}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <div
                key={category}
                className="px-6 py-3 bg-brand-secondary border border-brand-accent1/30 rounded-full text-brand-neutral-light shadow-lg hover:bg-brand-accent1/10 hover:border-brand-accent1 transition-all duration-300 cursor-pointer"
              >
                <span className="font-medium">{category}</span>
                <span className="ml-2 text-brand-accent1 font-bold">
                  ({projects.filter(p => p.category === category).length})
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div key={project.id} className="animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProjectCard project={project} locale={locale} t={t} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="relative bg-gradient-to-r from-brand-accent1/20 to-brand-accent2/20 rounded-2xl p-8 md:p-12 text-center border border-brand-accent1/30 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300E5FF' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-brand-neutral-light mb-4">
              {t('interestedCustom')}
            </h2>
            <p className="text-lg text-brand-neutral-light/80 mb-8 max-w-2xl mx-auto">
              {locale === 'pt'
                ? 'Eu crio ferramentas DevOps personalizadas, extensões Azure e soluções de automação para empresas. Vamos discutir como posso ajudar a resolver seus desafios específicos.'
                : 'I create custom DevOps tools, Azure extensions, and automation solutions for businesses. Let\'s discuss how I can help solve your specific challenges.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/consult`}
                className="group inline-flex justify-center items-center py-4 px-8 text-base font-semibold text-center text-brand-primary rounded-lg bg-brand-accent1 hover:bg-brand-accent2 focus:ring-4 focus:ring-brand-accent1/30 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {t('discussProject')}
                <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </Link>

              <Link
                href={`/${locale}/resume`}
                className="group inline-flex justify-center items-center py-4 px-8 text-base font-semibold text-center text-brand-neutral-light rounded-lg border-2 border-brand-accent1 hover:bg-brand-accent1 hover:text-brand-primary focus:ring-4 focus:ring-brand-accent1/30 transition-all duration-300"
              >
                {locale === 'pt' ? 'Ver Minha Experiência' : 'View My Experience'}
                <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
