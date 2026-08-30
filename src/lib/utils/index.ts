/**
 * Blog post titles carry a leading sequence number — `"10. The Collective
 * Mind: ..."`. That numbering is real information (entries in order), so the
 * design surfaces it as a margin number rather than leaving it in the headline.
 */
export interface TitledEntry {
  /** Zero-padded sequence number, or null when the title carries no prefix. */
  number: string | null
  /** The title with any `"N. "` prefix removed. */
  title: string
}

export function parseEntryTitle(rawTitle: string): TitledEntry {
  const match = rawTitle.match(/^\s*(\d{1,3})\.\s+([\s\S]*)$/)

  if (!match) {
    return { number: null, title: rawTitle.trim() }
  }

  return {
    number: match[1].padStart(2, '0'),
    title: match[2].trim(),
  }
}

/**
 * Compact, locale-independent stamp for the mono metadata rails: `2026.07.19`.
 * Parsed manually rather than via `new Date()` so a bare `YYYY-MM-DD` is not
 * shifted across a day boundary by the runtime's timezone.
 */
export function stampDate(isoDate: string): string {
  const [year, month, day] = isoDate.slice(0, 10).split('-')
  return day ? `${year}.${month}.${day}` : isoDate
}

/** Year only, for entries dated to a year rather than a day. */
export function stampYear(isoDate: string): string {
  return isoDate.slice(0, 4)
}

/**
 * Reading time in whole minutes, from rendered post HTML.
 * 200 wpm, floored at 1.
 */
export function readingMinutes(html: string): number {
  const words = html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;/gi, ' ')
    .split(/\s+/)
    .filter(Boolean).length

  return Math.max(1, Math.round(words / 200))
}
