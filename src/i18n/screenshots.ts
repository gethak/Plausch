import type { Lang } from './translations'

export type Shot = 'smart' | 'annotations' | 'privacy'

const de: Record<Shot, string> = {
  smart: new URL('../../assets/phone-smart.png', import.meta.url).href,
  annotations: new URL('../../assets/phone-annotations.png', import.meta.url).href,
  privacy: new URL('../../assets/phone-privacy.png', import.meta.url).href,
}

/**
 * App screenshots per language.
 *
 * The mockups show the app's own interface, so their text is German. Only the
 * German set exists today; any language without its own falls back to it, so
 * the pages stay complete meanwhile.
 *
 * To add a language: drop phone-smart.png, phone-annotations.png and
 * phone-privacy.png into assets/screenshots/<lang>/ and add one block below.
 * The alt text is already translated for all three languages, in
 * hero.imageAlt and features.rows[].imageAlt.
 */
const byLang: Partial<Record<Lang, Record<Shot, string>>> = {
  de,
}

export function screenshot(lang: Lang, shot: Shot): string {
  return (byLang[lang] ?? de)[shot]
}
