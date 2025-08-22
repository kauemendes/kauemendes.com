import Link from "next/link";
import Image from "next/image";

import { getRandomMessage, getPostsList } from '@/lib';
import { projects } from '@/content/data/projects';
import { socialLinks } from '@/content/data/social';
import { Card } from '@/components';
import { TechBackground } from '@/components/ui/TechBackground';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kaue Code - Developer|DevOps|Tech Enthusiast',
  description:
    'kauecode.com: Coding - the art, the science, and the passion.',
  keywords: ['Kaue Mendes', 'Kaue Mendes de Freitas', 'Developer', 'DevOps', 'Tech Enthusiast', 'Software Engineer', 'Cloud Engineer', 'Software Architect'],
  publisher: 'Kaue Mendes',
  creator: 'Kaue Mendes',
};

export default async function Home() {
  const randomMessage = await getRandomMessage();
  const recentPosts = (await getPostsList()).slice(0, 3); // Get 3 most recent posts
  const featuredProjects = projects.slice(0, 2); // Get 2 featured projects

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-brand min-h-screen flex items-center overflow-hidden">
        {/* Animated Tech Background */}
        <TechBackground />
        
        {/* Additional overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 via-transparent to-brand-primary/20"></div>
        
        <div className="relative z-20 px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-32">
          {/* Animated greeting */}
          <div className="mb-6 animate-fadeIn">
            <span className="bg-brand-accent1/20 backdrop-blur-sm text-brand-accent1 text-sm font-medium px-4 py-2 rounded-full border border-brand-accent1/30 shadow-lg">
              🚀 Welcome to the Future of DevOps
            </span>
          </div>
          
          <h1 className="mb-6 text-4xl font-bold font-poppins tracking-tight leading-tight text-brand-neutral-light md:text-5xl lg:text-6xl xl:text-7xl animate-fadeIn">
            Building the <span className="bg-gradient-accent bg-clip-text text-transparent">Digital</span>
            <br />
            Infrastructure of Tomorrow
          </h1>
          
          <p className="mb-8 text-lg font-normal text-brand-neutral-light/90 lg:text-xl sm:px-16 lg:px-48 max-w-4xl mx-auto animate-fadeIn leading-relaxed">
            Architecting scalable cloud solutions and neural network infrastructures that power the next generation of technology. 
            Where DevOps meets artificial intelligence.
          </p>

          {/* Tech Stats */}
          <div className="mb-8 flex flex-wrap justify-center gap-6 animate-fadeIn">
            <div className="bg-brand-secondary/20 backdrop-blur-sm border border-brand-accent1/20 rounded-lg px-4 py-2 text-brand-neutral-light">
              <span className="text-brand-accent1 font-bold">10+</span> Years Experience
            </div>
            <div className="bg-brand-secondary/20 backdrop-blur-sm border border-brand-accent2/20 rounded-lg px-4 py-2 text-brand-neutral-light">
              <span className="text-brand-accent2 font-bold">100k+</span> Deployments
            </div>
            <div className="bg-brand-secondary/20 backdrop-blur-sm border border-brand-accent3/20 rounded-lg px-4 py-2 text-brand-neutral-light">
              <span className="text-brand-accent3 font-bold">24/7</span> Uptime Focus
            </div>
          </div>
          
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 animate-fadeIn">
            <Link 
              href="/resume" 
              className="group inline-flex justify-center items-center py-4 px-8 text-base font-semibold text-center text-brand-primary rounded-lg bg-brand-accent1 hover:bg-brand-accent2 focus:ring-4 focus:ring-brand-accent1/30 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View Resume
              <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </Link>
            
            <Link 
              href="/projects" 
              className="group inline-flex justify-center items-center py-4 px-8 text-base font-semibold text-center text-brand-neutral-light rounded-lg border-2 border-brand-accent1 hover:bg-brand-accent1 hover:text-brand-primary focus:ring-4 focus:ring-brand-accent1/30 transition-all duration-300"
            >
              Explore Projects
              <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </Link>  
          </div>
          
          {/* Futuristic Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center text-brand-neutral-light/60">
              <div className="relative">
                <div className="w-6 h-10 border-2 border-brand-accent1/50 rounded-full">
                  <div className="w-1 h-3 bg-brand-accent1 rounded-full mx-auto mt-2 animate-bounce"></div>
                </div>
                <div className="absolute -inset-2 border border-brand-accent1/20 rounded-full animate-ping"></div>
              </div>
              <span className="text-xs mt-2 font-mono tracking-wider">EXPLORE_DATA</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-brand-secondary">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* About Section */}
          <div className="lg:col-span-2 space-y-12">
            {/* Introduction */}
            <section>
              <h2 className="text-3xl font-bold font-poppins text-brand-neutral-light mb-6">
                Hi, I'm Kaue Mendes
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-brand-neutral-light/80 leading-relaxed text-lg">
                  DevOps Engineer and Cloud Architect passionate about building scalable, reliable systems. 
                  I specialize in Azure cloud platforms, automation, and helping teams deliver software faster and more efficiently.
                </p>
                <p className="text-brand-neutral-light/80 leading-relaxed text-lg">
                  When I'm not architecting cloud solutions, you'll find me contributing to open-source projects, 
                  writing about technology trends, or exploring the latest DevOps tools and practices.
                </p>
              </div>
            </section>

            {/* Featured Projects */}
            <section>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold font-poppins text-brand-neutral-light">
                  Featured Projects
                </h2>
                <Link href="/projects" className="text-brand-accent1 hover:text-brand-accent2 font-medium transition-colors duration-300">
                  View All →
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredProjects.map((project) => (
                  <Card
                    key={project.id}
                    title={project.title}
                    body={project.description}
                    image={project.image_banner}
                    url={`/projects/${project.id}`}
                  />
                ))}
              </div>
            </section>

            {/* Recent Blog Posts */}
            <section>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Latest from the Blog
                </h2>
                <Link href="/blog" className="text-rose-600 hover:text-rose-700 dark:text-rose-400 dark:hover:text-rose-300 font-medium">
                  Read More →
                </Link>
              </div>
              {recentPosts.length > 0 ? (
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <article key={post.post} className="border-l-4 border-rose-500 pl-4">
                      <Link href={`/blog/${post.post}`} className="group">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mt-1 text-sm">
                          {post.description}
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 text-xs mt-2">
                          {new Date(post.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </p>
                      </Link>
                    </article>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600 dark:text-gray-300">
                  New blog posts coming soon! Check back for insights on DevOps, cloud architecture, and technology trends.
                </p>
              )}
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Profile Card */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="text-center mb-6">
                <Image 
                  src="/images/avatars/avatar.png" 
                  alt="Kaue Mendes" 
                  width={120} 
                  height={120}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Kaue Mendes
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  DevOps Engineer • Cloud Architect
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
                  Portugal 🇵🇹
                </p>
              </div>

              <div className="space-y-3">
                <Link href="/links" className="block w-full py-2 px-4 bg-rose-600 hover:bg-rose-700 text-white text-center rounded-lg font-medium transition-colors">
                  All Links
                </Link>
                <Link href="/resume" className="block w-full py-2 px-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 text-center rounded-lg font-medium transition-colors">
                  View Resume
                </Link>
              </div>
            </div>

            {/* Contact Links */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Let's Connect
              </h3>
              <div className="space-y-3">
                {socialLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                  >
                    <Image 
                      src={link.icon} 
                      alt={link.name}
                      width={20} 
                      height={20}
                    />
                    <span className="text-sm">{link.username}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Skills Highlight */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Core Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Azure', 'DevOps', 'Kubernetes', 'Terraform', 'CI/CD', 'Docker', 'Python', 'PowerShell'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

          {/* Terminal Footer */}
          <div className="mt-16 text-center">
            <p className="font-mono text-brand-neutral-medium">
              with root in kauecode.com ¤ main ➜ <span className="font-bold animate-pulse">_</span>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}