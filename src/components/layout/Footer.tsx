import Image from "next/image";
import Link from "next/link";
import { socialLinks } from '@/content/data/social';
import BackToTop from './BackToTop';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-primary border-t border-brand-secondary">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="md:flex md:justify-between mb-12">
          {/* Brand Section */}
          <div className="mb-12 md:mb-0 md:max-w-md">
            <Link href="/" className="flex items-center mb-6">
              <Image 
                src="/logo_novo.svg" 
                width={48} 
                height={48} 
                className="h-12 w-12 me-4" 
                alt="KaueCode Logo" 
              />
              <div>
                <span className="text-2xl font-bold font-poppins text-brand-neutral-light">
                  KAUE<span className="bg-gradient-accent bg-clip-text text-transparent">CODE</span>
                </span>
                <div className="text-brand-neutral-light/60 text-sm font-medium">.COM</div>
              </div>
            </Link>
            <p className="text-brand-neutral-light/80 leading-relaxed mb-6">
              DevOps Engineer and Cloud Architect passionate about building scalable, 
              reliable systems. Helping teams deliver software faster and more efficiently.
            </p>
            <div className="flex space-x-4">
              {socialLinks.slice(0, 4).map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  className="group p-2 bg-brand-secondary rounded-lg border border-brand-secondary hover:border-brand-accent1/30 transition-all duration-300 hover:shadow-lg"
                >
                  <Image 
                    src={social.icon} 
                    alt={social.name}
                    width={20} 
                    height={20}
                    className="opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-8 sm:gap-12 sm:grid-cols-3">
            {/* Content Links */}
            <div>
              <h3 className="mb-6 text-sm font-bold font-poppins text-brand-neutral-light uppercase tracking-wider">
                Content
              </h3>
              <ul className="text-brand-neutral-light/70 font-medium space-y-3">
                <li>
                  <Link href="/" className="hover:text-brand-accent1 transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-brand-accent1 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-brand-accent1 transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-brand-accent1 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-brand-accent1 transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-brand-accent1 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-brand-accent1 transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-brand-accent1 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    About
                  </Link>
                </li>
              </ul>
            </div>

            {/* Professional Links */}
            <div>
              <h3 className="mb-6 text-sm font-bold font-poppins text-brand-neutral-light uppercase tracking-wider">
                Professional
              </h3>
              <ul className="text-brand-neutral-light/70 font-medium space-y-3">
                <li>
                  <Link href="/consult" className="hover:text-brand-accent2 transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-brand-accent2 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    Consulting
                  </Link>
                </li>
                <li>
                  <Link href="/resume" className="hover:text-brand-accent2 transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-brand-accent2 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    Resume
                  </Link>
                </li>
                <li>
                  <Link href="/links" className="hover:text-brand-accent2 transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-brand-accent2 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    All Links
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/kauemendes" target="_blank" className="hover:text-brand-accent2 transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-brand-accent2 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    GitHub
                  </Link>
                </li>
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="mb-6 text-sm font-bold font-poppins text-brand-neutral-light uppercase tracking-wider">
                Expertise
              </h3>
              <ul className="text-brand-neutral-light/70 font-medium space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-brand-accent3 rounded-full mr-3"></span>
                  Azure Cloud
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-brand-accent3 rounded-full mr-3"></span>
                  DevOps & CI/CD
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-brand-accent3 rounded-full mr-3"></span>
                  Kubernetes
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-brand-accent3 rounded-full mr-3"></span>
                  Infrastructure as Code
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-brand-accent1/10 to-brand-accent2/10 rounded-2xl p-8 md:p-12 mb-12 border border-brand-accent1/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold font-poppins text-brand-neutral-light mb-4">
              Stay Updated
            </h3>
            <p className="text-brand-neutral-light/80 mb-6 max-w-2xl mx-auto">
              Get the latest insights on DevOps, cloud architecture, and technology trends delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-brand-secondary border border-brand-secondary focus:border-brand-accent1 focus:outline-none text-brand-neutral-light placeholder-brand-neutral-light/50"
              />
              <button className="px-6 py-3 bg-brand-accent1 text-brand-primary rounded-lg hover:bg-brand-accent2 transition-colors duration-300 font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-brand-secondary pt-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <span className="text-sm text-brand-neutral-light/60">
                © {currentYear} <span className="font-semibold text-brand-neutral-light">KaueCode™</span>. All Rights Reserved.
              </span>
              <div className="flex space-x-6 text-sm">
                <Link href="#" className="text-brand-neutral-light/60 hover:text-brand-accent1 transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-brand-neutral-light/60 hover:text-brand-accent1 transition-colors duration-300">
                  Terms of Service
                </Link>
              </div>
            </div>
            
            <div className="mt-4 sm:mt-0">
              <p className="text-xs text-brand-neutral-light/40 font-mono">
                
              </p>
            </div>
          </div>
        </div>

        {/* Back to Top */}
        <BackToTop />
      </div>
    </footer>
  )
}