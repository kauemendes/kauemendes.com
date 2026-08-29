/**
 * Article body styling, retuned to the paper tokens. This block was previously
 * duplicated verbatim in blog/[post]/page.tsx and about/[slug]/page.tsx.
 *
 * Rendered from pre-parsed markdown HTML, so it takes a string rather than
 * children.
 */
export function Prose({ html, className = '' }: { html: string; className?: string }) {
  return (
    <div
      className={[
        'prose max-w-none',
        // Headings in the display serif, never bold — the face has one weight.
        'prose-headings:font-display prose-headings:font-normal prose-headings:text-ink',
        'prose-headings:tracking-[-0.015em] prose-headings:leading-[1.15]',
        'prose-h2:text-[2rem] prose-h3:text-[1.55rem] prose-h4:text-[1.25rem]',
        // Body in the text serif.
        'prose-p:font-text prose-p:text-ink prose-p:leading-[1.78] prose-p:text-[16.5px]',
        'prose-li:font-text prose-li:text-ink prose-li:leading-[1.75]',
        // Links carry the only accent in the article.
        'prose-a:text-ink prose-a:font-medium prose-a:decoration-accent prose-a:decoration-2',
        'prose-a:underline-offset-[3px] hover:prose-a:text-accent',
        'prose-strong:text-ink prose-strong:font-semibold',
        // Quotes: accent rail, no decorative quote marks.
        'prose-blockquote:border-l-2 prose-blockquote:border-accent prose-blockquote:not-italic',
        'prose-blockquote:text-ink-soft prose-blockquote:font-text prose-blockquote:pl-5',
        'prose-blockquote:before:content-none prose-blockquote:after:content-none',
        // Code: bordered mono, no Tailwind backtick pseudo-elements.
        'prose-code:font-mono prose-code:text-ink prose-code:bg-paper-2 prose-code:font-normal',
        'prose-code:border prose-code:border-rule prose-code:px-1.5 prose-code:py-0.5',
        'prose-code:before:content-none prose-code:after:content-none',
        'prose-pre:bg-paper-2 prose-pre:text-ink prose-pre:border-2 prose-pre:border-ink',
        // Everything square, everything ruled.
        'prose-img:border-2 prose-img:border-ink',
        'prose-hr:border-rule prose-hr:border-dashed',
        'prose-th:font-mono prose-th:uppercase prose-th:text-[10px] prose-th:tracking-[0.12em]',
        'prose-th:text-ink-muted prose-th:font-medium prose-th:border-ink',
        'prose-td:font-text prose-td:text-ink prose-td:border-rule',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
