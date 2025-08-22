import Image from 'next/image';
import Link from 'next/link';
import { ShareLinkButton } from '@/components';
import { getPostContent, getPostsList } from '@/lib';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = await getPostsList();
  return posts.map((post) => ({ post: post.post }));
}

export async function generateMetadata(props) {
  const params = await props.params;

  const {
    post
  } = params;

  const content = await getPostContent(post);
  if (!content) {
    return notFound();
  }

  const keywords = content.post.split('-')

  return {
    title: content.title,
    description: content.description,
    keywords: [keywords, 'blog'],
    openGraph: {
      title: content.title,
      description: content.description,
      image: content.image_banner,
      keywords: [keywords, 'blog']
    },
  }
}

export default async function PostPage(props) {
  const params = await props.params;
  const content = await getPostContent(params.post);
  const allPosts = await getPostsList();
  
  if (!content) {
    return notFound();
  }

  // Find current post index for navigation
  const currentIndex = allPosts.findIndex(post => post.post === params.post);
  const previousPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-gradient-brand">
      <div className="max-w-4xl mx-auto px-4 py-8">
        
        {/* Back Navigation */}
        <div className="pt-16 mb-8">
          <Link 
            href="/blog"
            className="group inline-flex items-center text-brand-accent1 hover:text-brand-accent2 transition-colors duration-300"
          >
            <svg className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <article className="bg-brand-secondary/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-brand-secondary overflow-hidden">
          {/* Hero Image */}
          <div className="relative h-64 md:h-80">
            <Image 
              src={content.image_post} 
              alt={content.title}  
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-brand-primary/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="mb-4">
                <span className="bg-brand-accent1/90 text-brand-primary text-sm font-semibold px-3 py-1 rounded-full">
                  Article
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins text-brand-neutral-light leading-tight">
                {content.title}
              </h1>
            </div>
          </div>

          {/* Article Meta */}
          <div className="p-6 md:p-8 border-b border-brand-primary">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-3">
                  <Image 
                    src="/images/avatars/avatar.png" 
                    alt="Kaue Mendes" 
                    width={48} 
                    height={48}
                    className="rounded-full border-2 border-brand-accent1/30"
                  />
                  <div>
                    <div className="font-semibold text-brand-neutral-light">Kaue Mendes</div>
                    <div className="text-sm text-brand-neutral-medium">DevOps Engineer & Cloud Architect</div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="text-sm text-brand-neutral-medium">
                  📅 {new Date(content.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
                <ShareLinkButton />
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="p-6 md:p-8 lg:p-12">
            <div 
              dangerouslySetInnerHTML={{ __html: content.body }}
              className="prose prose-lg prose-slate max-w-none
                prose-headings:text-brand-neutral-light prose-headings:font-poppins prose-headings:font-bold
                prose-p:text-brand-neutral-light/80 prose-p:leading-relaxed
                prose-a:text-brand-accent1 prose-a:no-underline hover:prose-a:text-brand-accent2 prose-a:transition-colors
                prose-strong:text-brand-neutral-light prose-strong:font-semibold
                prose-code:text-brand-accent1 prose-code:bg-brand-primary prose-code:px-2 prose-code:py-1 prose-code:rounded
                prose-pre:bg-brand-primary prose-pre:border prose-pre:border-brand-secondary
                prose-blockquote:border-l-4 prose-blockquote:border-brand-accent1 prose-blockquote:bg-brand-primary/50 prose-blockquote:text-brand-neutral-light/90
                prose-ul:text-brand-neutral-light/80 prose-ol:text-brand-neutral-light/80
                prose-li:text-brand-neutral-light/80
                prose-img:rounded-xl prose-img:shadow-lg"
            />
          </div>
        </article>

        {/* Article Navigation */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {previousPost && (
            <Link 
              href={`/blog/${previousPost.post}`}
              className="group bg-brand-secondary/80 backdrop-blur-sm rounded-xl p-6 border border-brand-secondary hover:border-brand-accent1/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start space-x-4">
                <div className="text-brand-accent1 mt-1">
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-brand-accent1 font-medium mb-1">Previous Article</div>
                  <h3 className="text-brand-neutral-light font-semibold group-hover:text-brand-accent1 transition-colors duration-300 line-clamp-2">
                    {previousPost.title}
                  </h3>
                </div>
              </div>
            </Link>
          )}

          {nextPost && (
            <Link 
              href={`/blog/${nextPost.post}`}
              className="group bg-brand-secondary/80 backdrop-blur-sm rounded-xl p-6 border border-brand-secondary hover:border-brand-accent1/30 transition-all duration-300 hover:shadow-lg md:ml-auto"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-1 min-w-0 text-right">
                  <div className="text-sm text-brand-accent1 font-medium mb-1">Next Article</div>
                  <h3 className="text-brand-neutral-light font-semibold group-hover:text-brand-accent1 transition-colors duration-300 line-clamp-2">
                    {nextPost.title}
                  </h3>
                </div>
                <div className="text-brand-accent1 mt-1">
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </Link>
          )}
        </div>

        {/* Related Articles CTA */}
        <div className="mt-16 relative bg-gradient-to-r from-brand-accent1/20 to-brand-accent2/20 rounded-2xl p-8 md:p-12 text-center border border-brand-accent1/30 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300E5FF' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold font-poppins text-brand-neutral-light mb-4">
              Enjoyed This Article?
            </h2>
            <p className="text-brand-neutral-light/80 mb-8 max-w-2xl mx-auto">
              Explore more insights on DevOps, cloud architecture, and technology trends in my blog.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="group inline-flex justify-center items-center py-3 px-8 text-base font-semibold text-center text-brand-primary rounded-lg bg-brand-accent1 hover:bg-brand-accent2 focus:ring-4 focus:ring-brand-accent1/30 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Read More Articles
                <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </Link>
              
              <Link
                href="/projects"
                className="group inline-flex justify-center items-center py-3 px-8 text-base font-semibold text-center text-brand-neutral-light rounded-lg border-2 border-brand-accent1 hover:bg-brand-accent1 hover:text-brand-primary focus:ring-4 focus:ring-brand-accent1/30 transition-all duration-300"
              >
                View My Projects
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