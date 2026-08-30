import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import path from 'node:path'

export const OG_SIZE = { width: 1200, height: 630 }
export const OG_CONTENT_TYPE = 'image/png'

/** Paper & Ink palette, light theme. Mirrors src/styles/globals.css. */
const PAPER = '#F0EEE6'
const INK = '#1A1A19'
const INK_SOFT = '#4A4A47'
const INK_MUTED = '#8A8778'
const RULE = '#D9D4C2'
const ACCENT = '#0F7A57'

async function loadFont(file: string) {
  return readFile(path.join(process.cwd(), 'src/assets/fonts', file))
}

export interface OgCardProps {
  /** Small mono line above the title: kind, date, read time. */
  eyebrow: string[]
  /** Sequence number rendered in the accent, e.g. `10`. Omitted when absent. */
  marker?: string
  title: string
  description?: string
  /** Bottom-right label. Defaults to the site wordmark. */
  footer?: string
}

/**
 * Branded 1200x630 social card, drawn in the site's own design system rather
 * than reusing post banners — several of those are 640x360, which is below
 * LinkedIn's threshold for a large card.
 */
export async function renderOgCard({ eyebrow, marker, title, description, footer }: OgCardProps) {
  const [serif, monoRegular, monoBold] = await Promise.all([
    loadFont('InstrumentSerif-Regular.ttf'),
    loadFont('JetBrainsMono-Regular.ttf'),
    loadFont('JetBrainsMono-Bold.ttf'),
  ])

  // Step the display size with title length so long headlines still fit and
  // short ones do not float in empty space.
  const titleSize =
    title.length > 78 ? 62 : title.length > 48 ? 74 : title.length > 24 ? 92 : 116

  // Descriptions run long in the content files; the card only has room for a
  // couple of lines beneath the headline.
  const blurb =
    description && description.length > 165
      ? `${description.slice(0, 162).trimEnd()}…`
      : description

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: PAPER,
          padding: '56px 64px',
          border: `10px solid ${INK}`,
          fontFamily: 'JetBrains Mono',
          fontWeight: 400,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, fontSize: 20, fontWeight: 700, letterSpacing: 3, color: INK_MUTED, textTransform: 'uppercase' }}>
          {marker ? <span style={{ color: ACCENT }}>{`№ ${marker}`}</span> : null}
          {marker ? <span>·</span> : null}
          {eyebrow.map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
              {i > 0 ? <span>·</span> : null}
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', height: 2, background: INK, marginTop: 26, marginBottom: 38 }} />

        <div
          style={{
            display: 'flex',
            fontFamily: 'Instrument Serif',
            fontSize: titleSize,
            lineHeight: 1.04,
            color: INK,
            letterSpacing: -1.5,
            flex: 1,
          }}
        >
          {title}
        </div>

        {blurb ? (
          <div style={{ display: 'flex', fontWeight: 400, fontSize: 26, lineHeight: 1.45, color: INK_SOFT, marginTop: 24, maxWidth: 940 }}>
            {blurb}
          </div>
        ) : null}

        <div style={{ display: 'flex', height: 1, background: RULE, marginTop: 34, marginBottom: 22 }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 22, fontWeight: 700, letterSpacing: 2, color: INK }}>
          <span>
            kauecode<span style={{ color: ACCENT }}>/</span>
          </span>
          <span style={{ color: INK_MUTED }}>{footer ?? 'Kaue Mendes'}</span>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: 'Instrument Serif', data: serif, style: 'normal', weight: 400 },
        { name: 'JetBrains Mono', data: monoRegular, style: 'normal', weight: 400 },
        { name: 'JetBrains Mono', data: monoBold, style: 'normal', weight: 700 },
      ],
    }
  )
}
