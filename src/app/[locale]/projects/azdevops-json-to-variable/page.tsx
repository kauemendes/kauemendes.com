import Image from 'next/image';
import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getProjects } from '@/content/data/projects';
import { Locale } from '@/i18n';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const projects = await getProjects(locale as Locale);
  const project = projects.find(p => p.id === 'azdevops-json-to-variable');

  return {
    title: project?.title || 'Azure DevOps - JSON to Variable',
    description: project?.description || 'Azure DevOps Extension.',
    keywords: ['Kaue Mendes', 'Azure DevOps Extension', 'AzDO', 'JSON to Variable', 'DevOps'],
    publisher: 'Kaue Mendes',
    creator: 'Kaue Mendes',
  }
}

export default async function AzdevopsJsonToVariablePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'projects' });
  const projects = await getProjects(locale as Locale);
  const project = projects.find(p => p.id === 'azdevops-json-to-variable');
  const isPt = locale === 'pt';

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-brand">
      <div className="max-w-5xl mx-auto px-4 py-8">

        {/* Back Navigation */}
        <div className="pt-16 mb-8">
          <Link
            href={`/${locale}/projects`}
            className="group inline-flex items-center text-brand-accent1 hover:text-brand-accent2 transition-colors duration-300"
          >
            <svg className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            {isPt ? 'Voltar aos Projetos' : 'Back to Projects'}
          </Link>
        </div>

        {/* Project Header */}
        <div className="bg-brand-secondary/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-brand-secondary overflow-hidden">
          {/* Hero Image */}
          <div className="relative h-64 md:h-80">
            <Image
              src={project.image_banner}
              alt={project.title}
              fill
              className="object-contain bg-brand-primary p-8"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-brand-primary/20 to-transparent"></div>
            <div className="absolute top-4 right-4">
              <span className="bg-brand-accent2/90 text-brand-primary text-sm font-semibold px-4 py-2 rounded-full">
                {project.status}
              </span>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <span className="bg-brand-primary/80 text-brand-accent1 text-sm font-medium px-3 py-1 rounded-full">
                {project.category}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins text-brand-neutral-light mt-4 leading-tight">
                {project.title}
              </h1>
            </div>
          </div>

          {/* Project Content */}
          <div className="p-6 md:p-8 lg:p-12">
            {/* Description */}
            <div className="mb-8">
              <p className="text-brand-neutral-light/80 text-lg leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Technologies */}
              <div className="bg-brand-primary/50 rounded-xl p-6 border border-brand-secondary">
                <h3 className="text-lg font-bold font-poppins text-brand-neutral-light mb-4 flex items-center">
                  <span className="text-brand-accent1 mr-2">🛠️</span>
                  {t('technologies')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-brand-accent1/10 text-brand-accent1 text-sm rounded-full border border-brand-accent1/20 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Year & Status */}
              <div className="bg-brand-primary/50 rounded-xl p-6 border border-brand-secondary">
                <h3 className="text-lg font-bold font-poppins text-brand-neutral-light mb-4 flex items-center">
                  <span className="text-brand-accent2 mr-2">📅</span>
                  {isPt ? 'Informações' : 'Information'}
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-brand-neutral-medium">{isPt ? 'Ano' : 'Year'}:</span>
                    <span className="text-brand-neutral-light font-medium">{project.year}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-neutral-medium">Status:</span>
                    <span className="text-brand-accent2 font-medium">{project.status}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-xl font-bold font-poppins text-brand-neutral-light mb-4 flex items-center">
                <span className="text-brand-accent2 mr-2">✨</span>
                {t('keyFeatures')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start bg-brand-primary/30 rounded-lg p-4 border border-brand-secondary">
                    <span className="text-brand-accent2 mr-3 mt-0.5">▸</span>
                    <span className="text-brand-neutral-light/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact */}
            {project.impact && (
              <div className="mb-8 p-6 bg-gradient-to-r from-brand-accent2/20 to-brand-accent1/20 rounded-xl border border-brand-accent2/30">
                <h3 className="text-lg font-bold font-poppins text-brand-accent2 mb-2 flex items-center">
                  <span className="mr-2">📊</span>
                  {t('impact')}
                </h3>
                <p className="text-brand-neutral-light text-lg">
                  {project.impact}
                </p>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-wrap gap-4 pt-6 border-t border-brand-secondary">
              {project.marketplace && (
                <a
                  href={project.marketplace}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center px-6 py-3 bg-brand-accent1 text-brand-primary rounded-lg hover:bg-brand-accent2 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  {isPt ? 'Ver no Marketplace' : 'View on Marketplace'}
                  <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center px-6 py-3 border-2 border-brand-accent1 text-brand-accent1 rounded-lg hover:bg-brand-accent1 hover:text-brand-primary transition-all duration-300 font-semibold"
                >
                  GitHub
                  <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              )}

              <Link
                href={`/${locale}/projects`}
                className="group inline-flex items-center px-6 py-3 border-2 border-brand-neutral-medium text-brand-neutral-light rounded-lg hover:border-brand-accent1 hover:text-brand-accent1 transition-all duration-300 font-semibold"
              >
                {isPt ? 'Ver Todos os Projetos' : 'View All Projects'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
