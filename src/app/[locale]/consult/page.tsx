'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import {
  CpuChipIcon,
  CloudIcon,
  ArrowPathIcon,
  ServerStackIcon,
  CommandLineIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  BriefcaseIcon,
  CalendarDaysIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import { Frame, Tag, Button } from '@/components';
import { getConsultData } from './data';

/** Line icons keyed by service id — replaces the emoji fields the data carried. */
const serviceIcons = {
  'enterprise-ai': CpuChipIcon,
  'cloud-infrastructure': CloudIcon,
  'devops-automation': ArrowPathIcon,
  'managed-hosting': ServerStackIcon,
  'full-stack-development': CommandLineIcon,
} as const;

const contactIcons = {
  Email: EnvelopeIcon,
  WhatsApp: ChatBubbleLeftRightIcon,
  LinkedIn: BriefcaseIcon,
  Calendly: CalendarDaysIcon,
} as const;

const TABS = ['overview', 'solutions', 'process', 'contact'] as const;
type Tab = (typeof TABS)[number];

const PACKAGE_ORDER = ['startup', 'medium', 'enterprise'] as const;

const ConsultingPage = () => {
  const [activeTab, setActiveTab] = useState<Tab>('overview');
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

  const { services, contactOptions, packages, processSteps } = getConsultData(isPt, t);

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

    const mailtoLink = `mailto:kaue.mendes@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const tabLabels: Record<Tab, string> = {
    overview: t('servicesOverview'),
    solutions: t('completeSolutions'),
    process: t('howIWork'),
    contact: t('getStarted'),
  };

  const serviceOptions = [
    { value: 'Enterprise AI Consulting', label: isPt ? 'Consultoria de IA Empresarial' : 'Enterprise AI Consulting' },
    { value: 'Cloud Infrastructure', label: isPt ? 'Infraestrutura Cloud' : 'Cloud Infrastructure' },
    { value: 'DevOps Automation', label: isPt ? 'Automação DevOps' : 'DevOps Automation' },
    { value: 'Managed Hosting', label: isPt ? 'Hospedagem Gerenciada' : 'Managed Hosting' },
    { value: 'Full-Stack Development', label: isPt ? 'Desenvolvimento Full-Stack' : 'Full-Stack Development' },
    { value: 'Consultation Only', label: isPt ? 'Apenas Consultoria' : 'Consultation Only' },
    { value: 'Custom Solution', label: isPt ? 'Solução Customizada' : 'Custom Solution' },
  ];

  const budgetOptions = [
    { value: 'Under €5,000', label: isPt ? 'Abaixo de €5.000' : 'Under €5,000' },
    { value: '€5,000 - €15,000', label: '€5.000 - €15.000' },
    { value: '€15,000 - €50,000', label: '€15.000 - €50.000' },
    { value: 'Over €50,000', label: isPt ? 'Acima de €50.000' : 'Over €50,000' },
    { value: 'Ongoing Monthly', label: isPt ? 'Mensal Contínuo' : 'Ongoing Monthly' },
    { value: 'Prefer to discuss', label: isPt ? 'Prefiro discutir' : 'Prefer to discuss' },
  ];

  const fieldClass =
    'w-full border-2 border-ink bg-paper text-ink font-text text-[15px] px-3 py-2.5 ' +
    'placeholder:text-ink-muted focus:outline-none focus:border-accent';
  const labelClass =
    'block font-mono text-[10px] tracking-[0.14em] uppercase text-ink-muted mb-1.5';

  return (
    <div className="max-w-(--breakpoint-xl) mx-auto px-6">

      <header className="pt-14 pb-8 md:pt-20 md:pb-10">
        <h1 className="font-display text-[clamp(2.4rem,7vw,4rem)] leading-[0.98] tracking-[-0.02em] text-ink mb-4 max-w-[18ch]">
          {t('title')}
        </h1>
        <p className="font-mono text-[11.5px] tracking-[0.12em] uppercase text-ink-muted">
          {t('indexSubtitle')}
        </p>
      </header>

      {/* Tab rail */}
      <div className="rule-solid pt-4">
        <div className="flex flex-wrap gap-2 pb-8" role="tablist">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={activeTab === tab}
              onClick={() => setActiveTab(tab)}
              className={`font-mono text-[11px] font-bold tracking-[0.1em] uppercase px-3.5 py-2 border-2 border-ink cursor-pointer transition-colors duration-150 ${
                activeTab === tab
                  ? 'bg-ink text-paper'
                  : 'bg-paper text-ink-muted hover:text-ink'
              }`}
            >
              {tabLabels[tab]}
            </button>
          ))}
        </div>
      </div>

      {/* Services */}
      {activeTab === 'overview' && (
        <section className="pb-20 animate-fadeIn">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {services.map((service) => {
              const Icon = serviceIcons[service.id as keyof typeof serviceIcons] ?? SparklesIcon;
              return (
                <Frame
                  as="article"
                  key={service.id}
                  shadow="sm"
                  className={`p-5 ${service.featured ? 'lg:col-span-2 border-l-8 border-l-accent' : ''}`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <span className="shrink-0 border-2 border-ink p-2 bg-paper-2">
                      <Icon className="h-5 w-5 text-ink" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <div>
                      <h2 className="font-display text-[1.6rem] leading-[1.08] text-ink mb-1">
                        {service.title}
                      </h2>
                      <p className="font-text text-[14.5px] leading-[1.6] text-ink-soft">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <ul className={service.featured ? 'sm:columns-2 sm:gap-x-8' : ''}>
                    {service.features.map((feature: string) => (
                      <li
                        key={feature}
                        className="rule-dash py-2 font-text text-[14px] leading-[1.55] text-ink-soft flex gap-2.5 break-inside-avoid"
                      >
                        <span className="text-accent font-mono text-[11px] pt-1" aria-hidden="true">&rarr;</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Frame>
              );
            })}
          </div>
        </section>
      )}

      {/* Packages */}
      {activeTab === 'solutions' && (
        <section className="pb-20 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PACKAGE_ORDER.map((key) => {
              const pkg = packages[key];
              const isPopular = key === 'medium';
              return (
                <Frame
                  as="article"
                  key={key}
                  shadow={isPopular ? 'lg' : 'sm'}
                  className={`p-5 flex flex-col ${isPopular ? 'border-l-8 border-l-accent' : ''}`}
                >
                  {isPopular && (
                    <p className="mb-3">
                      <Tag variant="status">{t('mostPopular')}</Tag>
                    </p>
                  )}
                  <h2 className="font-display text-[1.5rem] leading-[1.08] text-ink mb-2">
                    {pkg.title}
                  </h2>
                  <p className="font-text text-[14px] leading-[1.6] text-ink-soft mb-5">
                    {pkg.description}
                  </p>

                  <h3 className="font-mono text-[10px] tracking-[0.14em] uppercase text-ink-muted mb-1">
                    {t('includes')}
                  </h3>
                  <ul className="mb-0">
                    {pkg.items.map((item: string) => (
                      <li
                        key={item}
                        className="rule-dash py-2 font-text text-[14px] leading-[1.55] text-ink-soft flex gap-2.5"
                      >
                        <span className="text-accent font-mono text-[11px] pt-1" aria-hidden="true">&rarr;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Frame>
              );
            })}
          </div>
        </section>
      )}

      {/* Process — the 01-04 numbering is a real sequence, so it leads each row. */}
      {activeTab === 'process' && (
        <section className="pb-20 animate-fadeIn">
          <h2 className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-ink font-bold pb-2">
            {t('process')}
          </h2>
          <ol>
            {processSteps.map((step) => (
              <li key={step.step} className="rule-dash grid grid-cols-1 sm:grid-cols-[70px_1fr] gap-x-6 gap-y-2 py-6">
                <span className="font-mono text-[1.6rem] leading-none text-accent font-bold">
                  {step.step}
                </span>
                <div>
                  <h3 className="font-display text-[1.5rem] leading-[1.1] text-ink mb-1.5">
                    {step.title}
                  </h3>
                  <p className="font-text text-[15.5px] leading-[1.65] text-ink-soft max-w-[62ch]">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* Contact */}
      {activeTab === 'contact' && (
        <section className="pb-20 animate-fadeIn grid grid-cols-1 lg:grid-cols-2 gap-10">

          <div>
            <h2 className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-ink font-bold pb-4">
              {t('contactVia')}
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {contactOptions.map((option) => {
                const Icon = contactIcons[option.name as keyof typeof contactIcons] ?? EnvelopeIcon;
                return (
                  <Frame key={option.name} shadow="sm" press={option.action !== '#'}>
                    <a
                      href={option.action}
                      target={option.action.startsWith('http') ? '_blank' : undefined}
                      rel={option.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-start gap-4 p-4 no-underline"
                    >
                      <span className="shrink-0 border-2 border-ink p-2 bg-paper-2">
                        <Icon className="h-5 w-5 text-ink" strokeWidth={1.75} aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-mono text-[11px] tracking-[0.1em] uppercase text-ink mb-1">
                          {option.name}
                        </span>
                        <span className="block font-text text-[14px] text-ink-soft break-words">
                          {option.value}
                        </span>
                        <span className="block font-text text-[13px] text-ink-muted mt-1">
                          {option.description}
                        </span>
                        {'note' in option && option.note && (
                          <span className="block font-mono text-[10px] tracking-[0.1em] uppercase text-accent mt-2">
                            {option.note}
                          </span>
                        )}
                      </span>
                    </a>
                  </Frame>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-ink font-bold pb-4">
              {t('formTitle')}
            </h2>
            <Frame shadow="md" className="p-5">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className={labelClass}>{t('name')}</label>
                    <input id="name" name="name" type="text" required
                      value={contactForm.name} onChange={handleInputChange} className={fieldClass} />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>{t('email')}</label>
                    <input id="email" name="email" type="email" required
                      value={contactForm.email} onChange={handleInputChange} className={fieldClass} />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className={labelClass}>{t('company')}</label>
                  <input id="company" name="company" type="text"
                    value={contactForm.company} onChange={handleInputChange} className={fieldClass} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="service" className={labelClass}>{t('service')}</label>
                    <select id="service" name="service" value={contactForm.service}
                      onChange={handleInputChange} className={fieldClass}>
                      <option value="">{t('selectService')}</option>
                      {serviceOptions.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className={labelClass}>{t('budget')}</label>
                    <select id="budget" name="budget" value={contactForm.budget}
                      onChange={handleInputChange} className={fieldClass}>
                      <option value="">{t('selectBudget')}</option>
                      {budgetOptions.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>{t('message')}</label>
                  <textarea id="message" name="message" rows={5} required
                    value={contactForm.message} onChange={handleInputChange} className={fieldClass} />
                </div>

                <Button type="submit" variant="accent" className="self-start">
                  {t('send')}
                </Button>

                <p className="font-mono text-[10px] leading-[1.7] tracking-[0.06em] text-ink-muted">
                  {t('formNote')}
                </p>
              </form>
            </Frame>
          </div>
        </section>
      )}
    </div>
  );
};

export default ConsultingPage;
