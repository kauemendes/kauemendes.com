import { getContent } from "@/lib/content";

export default async function InfoPage(props: { params: Promise<{ locale: string; slug: string }> }) {
  const params = await props.params;

  const {
    slug
  } = params;

  const content = await getContent(slug);
  return (
    <div className="min-h-screen bg-gradient-brand">
      <div className="max-w-4xl mx-auto px-4 py-8">

        {/* Header */}
        <div className="text-center mb-8 pt-16">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-ink mb-6">
            <span className="bg-gradient-accent bg-clip-text text-transparent">{content.title}</span>
          </h1>
        </div>

        {/* Banner */}
        <div className={`bg-no-repeat bg-center bg-[url('/images/banner2.jpg')] w-full h-[100px] rounded-xl mb-8`}></div>

        {/* Content */}
        <div className="bg-surface-raised/80 backdrop-blur border border-edge rounded-xl p-6 md:p-8 lg:p-12 mb-16 shadow-lg">
          <article
            dangerouslySetInnerHTML={{ __html: content.body }}
            className="prose prose-lg max-w-none mx-auto
              prose-headings:text-ink prose-headings:font-poppins prose-headings:font-bold
              prose-p:text-ink-muted prose-p:leading-relaxed
              prose-a:text-accent prose-a:no-underline hover:prose-a:text-accent-strong prose-a:transition-colors
              prose-strong:text-ink prose-strong:font-semibold
              prose-code:text-accent prose-code:bg-surface prose-code:px-2 prose-code:py-1 prose-code:rounded
              prose-pre:bg-surface prose-pre:border prose-pre:border-edge
              prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:bg-surface/50 prose-blockquote:text-ink
              prose-ul:text-ink-muted prose-ol:text-ink-muted
              prose-li:text-ink-muted
              prose-img:rounded-xl prose-img:shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
