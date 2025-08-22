import { getPostsList } from '@/lib';
import Link from "next/link";
import Image from "next/image";
import { Card } from '@/components';

export async function generateMetadata() {
  return {
    title: 'Kaue Code - Blog & Insights',
    description: 'Discover insights on DevOps, cloud architecture, and technology trends. Read about my experiences, tutorials, and thoughts on software engineering.',
    keywords: ['Kaue Mendes', 'DevOps Blog', 'Cloud Architecture', 'Tech Insights', 'Software Engineering', 'Azure', 'Kubernetes', 'Blog'],
    publisher: 'Kaue Mendes',
    creator: 'Kaue Mendes',
  }
}

export default async function BlogPage() {
  const posts = await getPostsList();
  const featuredPost = posts[0]; // Most recent post as featured
  const otherPosts = posts.slice(1);

  return (
    <div className="min-h-screen bg-gradient-brand">
      <div className="max-w-7xl mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-16 pt-16">
          <div className="mb-6">
            <span className="bg-brand-accent1/10 text-brand-accent1 text-sm font-medium px-4 py-2 rounded-full border border-brand-accent1/20">
              Tech Insights & Experiences
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-brand-neutral-light mb-6">
            Personal <span className="bg-gradient-accent bg-clip-text text-transparent">Blog</span>
          </h1>
          
          <p className="text-brand-neutral-light/80 text-lg mt-6 max-w-3xl mx-auto leading-relaxed">
            Sharing my journey in DevOps, cloud architecture, and software engineering. 
            From technical tutorials to industry insights and personal experiences.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-brand-secondary/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-brand-secondary">
            <div className="text-3xl font-bold text-brand-accent1 mb-2 font-poppins">
              {posts.length}
            </div>
            <div className="text-brand-neutral-medium text-sm font-medium">
              Articles
            </div>
          </div>
          
          <div className="bg-brand-secondary/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-brand-secondary">
            <div className="text-3xl font-bold text-brand-accent2 mb-2 font-poppins">
              5+
            </div>
            <div className="text-brand-neutral-medium text-sm font-medium">
              Categories
            </div>
          </div>
          
          <div className="bg-brand-secondary/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-brand-secondary">
            <div className="text-3xl font-bold text-brand-accent3 mb-2 font-poppins">
              1k+
            </div>
            <div className="text-brand-neutral-medium text-sm font-medium">
              Readers
            </div>
          </div>
          
          <div className="bg-brand-secondary/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-brand-secondary">
            <div className="text-3xl font-bold text-brand-accent1 mb-2 font-poppins">
              2025
            </div>
            <div className="text-brand-neutral-medium text-sm font-medium">
              Latest
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold font-poppins text-brand-neutral-light mb-8 text-center">
              <span className="bg-gradient-accent bg-clip-text text-transparent">Featured</span> Article
            </h2>
            <div className="relative bg-brand-secondary/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-brand-secondary hover:border-brand-accent1/30 transition-all duration-300 group">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <Image
                    src={featuredPost.image_banner}
                    alt={featuredPost.title}
                    width={600}
                    height={400}
                    className="w-full h-64 md:h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="md:w-1/2 p-8 md:p-12">
                  <div className="mb-4">
                    <span className="bg-brand-accent1/10 text-brand-accent1 text-sm font-medium px-3 py-1 rounded-full border border-brand-accent1/20">
                      Latest
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold font-poppins text-brand-neutral-light mb-4 group-hover:text-brand-accent1 transition-colors duration-300">
                    {featuredPost.title}
                  </h3>
                  <p className="text-brand-neutral-light/80 mb-6 leading-relaxed">
                    {featuredPost.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-brand-neutral-medium">
                      {new Date(featuredPost.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <Link
                      href={`/blog/${featuredPost.post}`}
                      className="group inline-flex items-center px-6 py-3 bg-brand-accent1 text-brand-primary rounded-lg hover:bg-brand-accent2 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      Read Article
                      <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* All Posts */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold font-poppins text-brand-neutral-light mb-8 text-center">
            All <span className="bg-gradient-accent bg-clip-text text-transparent">Articles</span>
          </h2>
          
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <div key={post.post} className="animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }}>
                  <article className="group bg-brand-secondary/80 backdrop-blur-sm rounded-xl shadow-lg border border-brand-secondary hover:border-brand-accent1/30 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                    <div className="relative">
                      <Image
                        src={post.image_banner}
                        alt={post.title}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-brand-accent1/90 text-brand-primary text-xs font-semibold px-3 py-1 rounded-full">
                          Article
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold font-poppins text-brand-neutral-light mb-3 group-hover:text-brand-accent1 transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-brand-neutral-light/70 mb-4 leading-relaxed line-clamp-3">
                        {post.description}
                      </p>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-brand-primary">
                        <div className="text-sm text-brand-neutral-medium">
                          {new Date(post.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </div>
                        <Link
                          href={`/blog/${post.post}`}
                          className="group inline-flex items-center px-4 py-2 text-brand-accent1 hover:text-brand-primary hover:bg-brand-accent1 rounded-lg transition-all duration-300 text-sm font-medium"
                        >
                          Read More
                          <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-brand-neutral-light mb-4">No Posts Yet</h3>
              <p className="text-brand-neutral-light/70 max-w-md mx-auto">
                New blog posts are coming soon! Check back for insights on DevOps, cloud architecture, and technology trends.
              </p>
            </div>
          )}
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
              Want to Stay Updated?
            </h2>
            <p className="text-lg text-brand-neutral-light/80 mb-8 max-w-2xl mx-auto">
              Subscribe to get notified when I publish new articles about DevOps, cloud architecture, and emerging technologies.
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
      </div>
    </div>
  );
}