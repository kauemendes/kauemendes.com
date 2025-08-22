'use client';

import { Heading } from '@/components';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
    // Generate mailto link with form data
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
      value: 'kauemendes@gmail.com',
      icon: '📧',
      action: 'mailto:kauemendes@gmail.com',
      description: 'Best for detailed project discussions'
    },
    {
      name: 'WhatsApp',
      value: '+55 998 982 401',
      icon: '💬',
      action: 'https://wa.me/351965613249',
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-bold text-4xl md:text-5xl text-white mb-6">
            Enterprise Cloud & DevOps Consulting
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Transform your business with scalable cloud infrastructure, automated DevOps pipelines, 
            and managed hosting solutions. From small startups to enterprise systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setActiveTab('contact')}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Consultation
            </button>
            <Link 
              href="/resume" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
            >
              View My Experience
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 -mb-px">
        <div className="flex flex-wrap border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-t-lg">
          {[
            { id: 'overview', label: 'Services Overview' },
            { id: 'solutions', label: 'Complete Solutions' },
            { id: 'process', label: 'How I Work' },
            { id: 'contact', label: 'Get Started' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 font-medium text-sm border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        
        {/* Services Overview */}
        {activeTab === 'overview' && (
          <div className="space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Complete Technology Solutions
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                I don't just build websites - I architect complete solutions that scale with your business. 
                From cloud infrastructure to managed hosting, here's how I can help transform your technology landscape.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service) => (
                <div key={service.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">{service.icon}</span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">✓</span>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
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
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                End-to-End Solutions
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
                From initial consultation to ongoing support, I provide comprehensive solutions 
                that address your entire technology stack.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Small Business Package */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Startup & Small Business
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Perfect for growing companies
                  </p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Cloud infrastructure setup</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Basic CI/CD pipeline</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Managed hosting & monitoring</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Security best practices</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Monthly support & maintenance</span>
                  </li>
                </ul>
              </div>

              {/* Medium Business Package */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 ring-2 ring-blue-500 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Medium Enterprise
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Scalable solutions for growth
                  </p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Everything in Startup package</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Multi-environment setup</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Advanced automation</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Database optimization</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Team training & documentation</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">24/7 monitoring & support</span>
                  </li>
                </ul>
              </div>

              {/* Enterprise Package */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Enterprise Solutions
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Custom enterprise architecture
                  </p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Everything in Medium package</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Custom architecture design</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Multi-cloud strategies</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Compliance & governance</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Dedicated support team</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Strategic consulting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Process */}
        {activeTab === 'process' && (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                My Consulting Process
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
                A proven methodology that ensures successful project delivery and long-term success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
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
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <div className="text-sm font-bold text-blue-600 dark:text-blue-400 mb-2">
                    STEP {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Free Initial Consultation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Every project starts with a free 30-minute consultation to understand your needs 
                and explore how I can help achieve your goals.
              </p>
              <button 
                onClick={() => setActiveTab('contact')}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Schedule Your Free Consultation
              </button>
            </div>
          </div>
        )}

        {/* Contact */}
        {activeTab === 'contact' && (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Let's Start Your Project
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
                Ready to transform your infrastructure? Choose how you'd like to get in touch, 
                and I'll respond within 24 hours.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Options */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Get In Touch
                </h3>
                
                {contactOptions.map((option, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                    <div className="flex items-start space-x-4">
                      <span className="text-2xl">{option.icon}</span>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                          {option.name}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                          {option.description}
                        </p>
                        {option.note && (
                          <p className="text-amber-600 dark:text-amber-400 text-xs mb-2">
                            {option.note}
                          </p>
                        )}
                        <a 
                          href={option.action}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                        >
                          {option.value}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Form */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Project Inquiry Form
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={contactForm.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={contactForm.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={contactForm.company}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Service Needed *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={contactForm.service}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
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
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={contactForm.budget}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
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
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
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
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Send Inquiry via Email
                  </button>
                  
                  <p className="text-gray-500 dark:text-gray-400 text-sm text-center">
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