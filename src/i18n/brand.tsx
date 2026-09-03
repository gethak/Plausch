import type { ReactNode } from 'react'

const BRAND = 'Plausch'

/**
 * Renders copy with the product name shielded from browser auto-translation.
 *
 * "Plausch" is an ordinary German noun, so Chrome's translator renders it as
 * "Chat" in English and renames the product everywhere it appears, including
 * the wordmark in the header. translate="no" is the standard opt-out and every
 * major browser translator honours it.
 *
 * This is done in preference to setting the name as an image: the name stays
 * real text, so it is still selectable, searchable, indexable and readable by
 * screen readers, it needs no asset, and it keeps matching the surrounding type
 * at any size or weight.
 *
 * Use for visible copy that may contain the name. Attribute values such as alt
 * and title take plain strings and cannot hold nodes, but they are not rendered
 * as page text either, so they are left as they are.
 */
export function brandSafe(text: string): ReactNode[] {
  return text.split(new RegExp(`(${BRAND})`, 'g')).map((part, i) =>
    part === BRAND ? (
      <span key={i} translate="no">
        {part}
      </span>
    ) : (
      part
    ),
  )
}
