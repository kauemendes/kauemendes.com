'use client';

export default function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="text-center mt-8">
      <button 
        onClick={scrollToTop}
        className="group inline-flex items-center px-4 py-2 bg-brand-secondary border border-brand-secondary hover:border-brand-accent1/30 rounded-lg text-brand-neutral-light/70 hover:text-brand-accent1 transition-all duration-300"
      >
        <svg className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
        </svg>
        Back to Top
      </button>
    </div>
  );
}