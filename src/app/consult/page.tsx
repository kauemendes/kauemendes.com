'use client';

import { useState } from 'react';
import Link from 'next/link';

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Consulting Inquiry: ${contactForm.service}`;
    const body = `Hi Kaue,

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
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure & Architecture',
      icon: '☁️',
      description: 'Complete cloud solutions design and implementation',
      features: [
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
      title: 'DevOps & Automation Solutions',
      icon: '🔄',
      description: 'End-to-end automation and CI/CD pipeline implementation',
      features: [
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
      title: 'Managed Infrastructure Hosting',
      icon: '🖥️',
      description: 'Complete hosting and management for small to medium businesses',
      features: [
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
      title: 'Full-Stack Development',
      icon: '💻',
      description: 'Complete web applications and enterprise solutions',
      features: [
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
      description: 'Best for detailed project discussions'
    },
    {
      name: 'WhatsApp',
      value: '+55 11 998 982 401',
      icon: '💬',
      action: 'https://wa.me/5511998982401',
      description: 'Quick questions and initial contact'
    },
    {
      name: 'LinkedIn',
      value: '/in/kauemendes',
      icon: '💼',
      action: 'https://www.linkedin.com/in/kauemendes/',
      description: 'Professional networking and references'
    },
    {
      name: 'Calendly',
      value: 'Schedule a call',
      icon: '📅',
      action: '#',
      description: 'Book a free 30-minute consultation',
      note: 'Setup coming soon - use email for now'
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
              Professional Consulting
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-brand-neutral-light mb-6">
            Enterprise <span className="bg-gradient-accent bg-clip-text text-transparent">Cloud & DevOps</span> Consulting
          </h1>
          
          <p className="text-xl text-brand-neutral-light/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your business with scalable cloud infrastructure, automated DevOps pipelines, 
            and managed hosting solutions. From small startups to enterprise systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => setActiveTab('contact')}
              className="group inline-flex justify-center items-center py-4 px-8 text-base font-semibold text-center text-brand-primary rounded-lg bg-brand-accent1 hover:bg-brand-accent2 focus:ring-4 focus:ring-brand-accent1/30 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Free Consultation
              <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </button>
            
            <Link 
              href="/resume" 
              className="group inline-flex justify-center items-center py-4 px-8 text-base font-semibold text-center text-brand-neutral-light rounded-lg border-2 border-brand-accent1 hover:bg-brand-accent1 hover:text-brand-primary focus:ring-4 focus:ring-brand-accent1/30 transition-all duration-300"
            >
              View My Experience
              <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center border-b border-brand-secondary bg-brand-secondary/50 backdrop-blur-sm rounded-t-2xl">
          {[
            { id: 'overview', label: 'Services Overview', icon: '🎯' },
            { id: 'solutions', label: 'Complete Solutions', icon: '⚡' },
            { id: 'process', label: 'How I Work', icon: '🔄' },
            { id: 'contact', label: 'Get Started', icon: '🚀' }
          ].map((tab) => (
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
                Complete Technology Solutions
              </h2>
              <p className="text-brand-neutral-light/80 text-lg">
                I don't just build websites - I architect complete solutions that scale with your business. 
                From cloud infrastructure to managed hosting, here's how I can help transform your technology landscape.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={service.id} className="group bg-brand-secondary rounded-xl shadow-lg border border-brand-secondary hover:border-brand-accent1/30 p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">{service.icon}</span>
                    <h3 className="text-xl font-bold font-poppins text-brand-neutral-light group-hover:text-brand-accent1 transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-brand-neutral-light/80 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-brand-accent2 mr-3 mt-0.5 text-base">▸</span>
                        <span className="text-brand-neutral-light/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Complete Solutions */}
        {activeTab === 'solutions' && (
          <div className="space-y-12 animate-fadeIn">
            <div className="text-center">
              <h2 className="text-3xl font-bold font-poppins text-brand-neutral-light mb-4">
                End-to-End Solutions
              </h2>
              <p className="text-brand-neutral-light/80 text-lg max-w-3xl mx-auto">
                From initial consultation to ongoing support, I provide comprehensive solutions 
                that address your entire technology stack.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Small Business Package */}
              <div className="bg-brand-secondary rounded-xl shadow-lg border border-brand-secondary p-8 hover:border-brand-accent2/30 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-brand-accent2/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-2xl font-bold font-poppins text-brand-neutral-light mb-2">
                    Startup & Small Business
                  </h3>
                  <p className="text-brand-neutral-light/80">
                    Perfect for growing companies
                  </p>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    'Cloud infrastructure setup',
                    'Basic CI/CD pipeline',
                    'Managed hosting & monitoring',
                    'Security best practices',
                    'Monthly support & maintenance'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="text-brand-accent2 mr-3">✓</span>
                      <span className="text-brand-neutral-light/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Medium Business Package */}
              <div className="relative bg-brand-secondary rounded-xl shadow-lg border-2 border-brand-accent1 p-8 transform scale-105">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-brand-accent1 text-brand-primary px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-brand-accent1/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-2xl font-bold font-poppins text-brand-neutral-light mb-2">
                    Medium Enterprise
                  </h3>
                  <p className="text-brand-neutral-light/80">
                    Scalable solutions for growth
                  </p>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    'Everything in Startup package',
                    'Multi-environment setup',
                    'Advanced automation',
                    'Database optimization',
                    'Team training & documentation',
                    '24/7 monitoring & support'
                  ].map((item, idx) => (
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
                    Enterprise Solutions
                  </h3>
                  <p className="text-brand-neutral-light/80">
                    Custom enterprise architecture
                  </p>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    'Everything in Medium package',
                    'Custom architecture design',
                    'Multi-cloud strategies',
                    'Compliance & governance',
                    'Dedicated support team',
                    'Strategic consulting'
                  ].map((item, idx) => (
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
                My Consulting Process
              </h2>
              <p className="text-brand-neutral-light/80 text-lg max-w-3xl mx-auto">
                A proven methodology that ensures successful project delivery and long-term success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Discovery & Assessment',
                  description: 'Deep dive into your current infrastructure, pain points, and business goals.',
                  icon: '🔍',
                  color: 'brand-accent1'
                },
                {
                  step: '02', 
                  title: 'Strategy & Planning',
                  description: 'Design custom solutions with clear roadmaps, timelines, and success metrics.',
                  icon: '📋',
                  color: 'brand-accent2'
                },
                {
                  step: '03',
                  title: 'Implementation',
                  description: 'Agile development and deployment with regular updates and transparent communication.',
                  icon: '⚙️',
                  color: 'brand-accent3'
                },
                {
                  step: '04',
                  title: 'Support & Optimization',
                  description: 'Ongoing monitoring, maintenance, and continuous improvement of your systems.',
                  icon: '📈',
                  color: 'brand-accent1'
                }
              ].map((item, index) => (
                <div key={index} className="text-center group" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className={`bg-brand-secondary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-brand-accent1/30 group-hover:border-brand-accent1 transition-all duration-300 group-hover:scale-110`}>
                    <span className="text-3xl">{item.icon}</span>
                  </div>
                  <div className="text-sm font-bold text-brand-accent1 mb-2">
                    STEP {item.step}
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

            <div className="bg-gradient-to-r from-brand-accent1/20 to-brand-accent2/20 rounded-2xl p-8 text-center border border-brand-accent1/30">
              <h3 className="text-2xl font-bold font-poppins text-brand-neutral-light mb-4">
                Free Initial Consultation
              </h3>
              <p className="text-brand-neutral-light/80 mb-6">
                Every project starts with a free 30-minute consultation to understand your needs 
                and explore how I can help achieve your goals.
              </p>
              <button 
                onClick={() => setActiveTab('contact')}
                className="group inline-flex justify-center items-center py-4 px-8 text-base font-semibold text-center text-brand-primary rounded-lg bg-brand-accent1 hover:bg-brand-accent2 focus:ring-4 focus:ring-brand-accent1/30 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Schedule Your Free Consultation
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
                Let's Start Your Project
              </h2>
              <p className="text-brand-neutral-light/80 text-lg max-w-3xl mx-auto">
                Ready to transform your infrastructure? Choose how you'd like to get in touch, 
                and I'll respond within 24 hours.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Options */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold font-poppins text-brand-neutral-light mb-6">
                  Get In Touch
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
                  Project Inquiry Form
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-brand-neutral-light mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={contactForm.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-brand-primary rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent1 bg-brand-primary text-brand-neutral-light"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-brand-neutral-light mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={contactForm.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-brand-primary rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent1 bg-brand-primary text-brand-neutral-light"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-brand-neutral-light mb-1">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={contactForm.company}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-brand-primary rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent1 bg-brand-primary text-brand-neutral-light"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-brand-neutral-light mb-1">
                        Service Needed *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={contactForm.service}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-brand-primary rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent1 bg-brand-primary text-brand-neutral-light"
                      >
                        <option value="">Select a service</option>
                        <option value="Cloud Infrastructure">Cloud Infrastructure</option>
                        <option value="DevOps Automation">DevOps Automation</option>
                        <option value="Managed Hosting">Managed Hosting</option>
                        <option value="Full-Stack Development">Full-Stack Development</option>
                        <option value="Consultation Only">Consultation Only</option>
                        <option value="Custom Solution">Custom Solution</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-brand-neutral-light mb-1">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={contactForm.budget}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-brand-primary rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent1 bg-brand-primary text-brand-neutral-light"
                      >
                        <option value="">Select budget range</option>
                        <option value="Under €5,000">Under €5,000</option>
                        <option value="€5,000 - €15,000">€5,000 - €15,000</option>
                        <option value="€15,000 - €50,000">€15,000 - €50,000</option>
                        <option value="Over €50,000">Over €50,000</option>
                        <option value="Ongoing Monthly">Ongoing Monthly</option>
                        <option value="Prefer to discuss">Prefer to discuss</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-brand-neutral-light mb-1">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={contactForm.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, current challenges, and goals..."
                      className="w-full px-3 py-2 border border-brand-primary rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent1 bg-brand-primary text-brand-neutral-light"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-accent1 text-brand-primary py-3 px-6 rounded-md font-semibold hover:bg-brand-accent2 transition-all duration-300 transform hover:scale-105"
                  >
                    Send Inquiry via Email
                  </button>
                  
                  <p className="text-brand-neutral-medium text-sm text-center">
                    This will open your email client with the form data pre-filled
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