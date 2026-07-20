import Link from "next/link";
import Image from "next/image";

export interface Card {
  title: string
  body: string
  image: string
  url: string
  readMoreLabel?: string
}

export default function Card({ title, body, image, url, readMoreLabel = "Read more" }: Card) {
  return (
    <div className="max-w-sm overflow-hidden bg-surface-raised/80 backdrop-blur border border-edge rounded-xl hover:border-accent/50 transition-colors">
        <Link  href={url}>
            <Image className="rounded-t-xl" width={380} height={210} src={image} alt="" />
        </Link>
        <div className="p-5">
            <Link href={url}>
                <h5 className="mb-2 text-2xl font-poppins font-semibold tracking-tight text-ink">{title}</h5>
            </Link>
            <p className="mb-3 text-ink-muted">{body}</p>
            <Link href={url} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-brand-primary bg-accent rounded-lg hover:bg-accent-strong transition-colors focus:ring-4 focus:outline-hidden focus:ring-accent/30">
                {readMoreLabel}
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </Link>
        </div>
    </div>
  )
}
