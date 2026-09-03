import type { Lang } from './translations'

export type Shot = 'smart' | 'annotations' | 'privacy'

/**
 * App screenshots per language.
 *
 * The mockups show the app's own interface, so each language needs its own
 * export rather than translated text laid over one shared image. A language
 * without a set falls back to German, so the pages stay complete meanwhile.
 *
 * To add one: drop phone-smart.png, phone-annotations.png and
 * phone-privacy.png into assets/screenshots/<lang>/ and copy a block below.
 * The paths are written out in full rather than built from the language code
 * because Vite resolves new URL(..., import.meta.url) at build time and only
 * fingerprints the asset when the path is a static literal.
 *
 * The alt text is already translated for all three languages, in
 * hero.imageAlt and features.rows[].imageAlt.
 */
const de: Record<Shot, string> = {
  smart: new URL('../../assets/screenshots/de/phone-smart.png', import.meta.url).href,
  annotations: new URL('../../assets/screenshots/de/phone-annotations.png', import.meta.url).href,
  privacy: new URL('../../assets/screenshots/de/phone-privacy.png', import.meta.url).href,
}

const en: Record<Shot, string> = {
  smart: new URL('../../assets/screenshots/en/phone-smart.png', import.meta.url).href,
  annotations: new URL('../../assets/screenshots/en/phone-annotations.png', import.meta.url).href,
  privacy: new URL('../../assets/screenshots/en/phone-privacy.png', import.meta.url).href,
}

const es: Record<Shot, string> = {
  smart: new URL('../../assets/screenshots/es/phone-smart.png', import.meta.url).href,
  annotations: new URL('../../assets/screenshots/es/phone-annotations.png', import.meta.url).href,
  privacy: new URL('../../assets/screenshots/es/phone-privacy.png', import.meta.url).href,
}

const byLang: Partial<Record<Lang, Record<Shot, string>>> = { de, en, es }

export function screenshot(lang: Lang, shot: Shot): string {
  return (byLang[lang] ?? de)[shot]
}
