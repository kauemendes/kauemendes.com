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
  const project = projects.find(p => p.id === 'syspec');

  return {
    title: project?.title || 'Syspec',
    description: project?.description || 'About Syspec.',
    keywords: ['Kaue Mendes', 'Syspec', 'System Architecture', 'System Design', 'DevOps', 'Simulation'],
    publisher: 'Kaue Mendes',
    creator: 'Kaue Mendes',
  }
}

export default async function SyspecPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'projects' });
  const projects = await getProjects(locale as Locale);
  const project = projects.find(p => p.id === 'syspec');
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
            className="group inline-flex items-center text-accent hover:text-accent-strong transition-colors duration-300"
          >
            <svg className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            {isPt ? 'Voltar aos Projetos' : 'Back to Projects'}
          </Link>
        </div>

        {/* Project Header */}
        <div className="bg-surface-raised/80 backdrop-blur rounded-2xl shadow-2xl border border-edge overflow-hidden">
          {/* Hero Image */}
          <div className="relative h-64 md:h-80">
            <Image
              src={project.image_banner}
              alt={project.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-brand-primary/80 via-brand-primary/20 to-transparent"></div>
            <div className="absolute top-4 right-4">
              <span className="bg-brand-accent1/90 text-brand-primary text-sm font-semibold px-4 py-2 rounded-full">
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
              <p className="text-ink-muted text-lg leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Technologies */}
              <div className="bg-surface/60 rounded-xl p-6 border border-edge">
                <h3 className="text-lg font-bold font-poppins text-ink mb-4 flex items-center">
                  <span className="text-accent mr-2">🛠️</span>
                  {t('technologies')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/20 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Year & Status */}
              <div className="bg-surface/60 rounded-xl p-6 border border-edge">
                <h3 className="text-lg font-bold font-poppins text-ink mb-4 flex items-center">
                  <span className="text-accent mr-2">📅</span>
                  {isPt ? 'Informações' : 'Information'}
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-ink-muted">{isPt ? 'Ano' : 'Year'}:</span>
                    <span className="text-ink font-medium">{project.year}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-ink-muted">Status:</span>
                    <span className="text-accent font-medium">{project.status}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-xl font-bold font-poppins text-ink mb-4 flex items-center">
                <span className="text-accent mr-2">✨</span>
                {t('keyFeatures')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start bg-surface/60 rounded-lg p-4 border border-edge">
                    <span className="text-accent mr-3 mt-0.5">▸</span>
                    <span className="text-ink-muted">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 pt-6 border-t border-edge">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center px-6 py-3 bg-accent text-brand-primary rounded-lg hover:bg-accent-strong transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  {isPt ? 'Acessar o Syspec' : 'Open Syspec'}
                  <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              )}

              <Link
                href={`/${locale}/projects`}
                className="group inline-flex items-center px-6 py-3 border-2 border-edge text-ink rounded-lg hover:border-accent hover:text-accent transition-all duration-300 font-semibold"
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
