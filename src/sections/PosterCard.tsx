import { PosterNote, PosterArrow, PosterOutcome, Highlight } from '../components/poster-ui'

const keyPhoto = new URL('../../assets/posters/cutouts/key.png', import.meta.url).href
const peopleHeart = new URL('../../assets/posters/cutouts/people-heart.png', import.meta.url).href
const iconLine = new URL('../../assets/posters/cutouts/icon-line.png', import.meta.url).href

export type PosterKey = 'hallucinate' | 'noclutter' | 'private' | 'notes' | 'humanitarian'

export type PosterContent = {
  headline: readonly string[]
  subheadPre: string
  subheadHighlight: string
  subheadPost: string
  tiles: readonly string[]
  outcome: string
  statement: string
  bodyPre: string
  bodyHighlight: string
  bodyPost: string
  tagline: string
}

const tileRotations = [-2, 2, 2, -2]

// Per-poster marks on the tile grid, matching the ink marks in the original
// artwork (AI 1 crossed out, AI 3 questioned, in the reference "hallucinate" poster).
const tileMarks: Partial<Record<PosterKey, Partial<Record<number, 'x' | 'question'>>>> = {
  hallucinate: { 0: 'x', 2: 'question' },
}

/**
 * Shared poster shell — every poster (hallucinate, noclutter, private, notes,
 * humanitarian) renders through this same structure: headline, subhead with a
 * red-underlined caution word, a 2x2 grid of note tiles converging into a
 * checkmark outcome, a bold statement, a body sentence with a
 * green-underlined reassurance phrase, and a small tagline. Where the
 * original poster had a real photo or illustration (the brass key, the
 * Plausch heart-gear mark, the people-and-heart drawing), that same cutout
 * is reused here instead of a redrawn approximation.
 */
export default function PosterCard({ posterKey, content }: { posterKey: PosterKey; content: PosterContent }) {
  const marks = tileMarks[posterKey] ?? {}

  return (
    <div className="flex h-full w-full flex-col justify-between px-6 py-7">
      <div>
        <h3 className="font-display text-[26px] font-black leading-[0.95] tracking-tight sm:text-[30px]">
          {content.headline[0]}
          <br />
          {content.headline[1]}
        </h3>
        <p className="mt-2.5 text-[13px] leading-snug text-[#17130e]/75">
          {content.subheadPre}
          <Highlight color="red">{content.subheadHighlight}</Highlight>
          {content.subheadPost}
        </p>
      </div>

      <div className="my-5">
        <div className="grid grid-cols-2 gap-2.5">
          {content.tiles.map((tile, i) => (
            <PosterNote key={i} rotate={tileRotations[i] ?? 0} mark={marks[i]}>
              {posterKey === 'private' && i === 1 ? (
                <span className="flex flex-col items-center gap-1.5 text-center">
                  <img src={keyPhoto} alt="" aria-hidden className="h-9 w-auto select-none object-contain" />
                  {tile}
                </span>
              ) : (
                tile
              )}
            </PosterNote>
          ))}
        </div>
        <PosterArrow />
        <PosterOutcome
          extra={
            posterKey === 'humanitarian' ? (
              <img src={peopleHeart} alt="" aria-hidden className="mx-auto mt-2 h-7 w-auto select-none object-contain" />
            ) : undefined
          }
        >
          {posterKey === 'notes' && (
            <img src={iconLine} alt="" aria-hidden className="mx-auto mb-1.5 h-6 w-auto select-none object-contain" />
          )}
          {content.outcome}
        </PosterOutcome>
      </div>

      <div>
        <p className="text-[15px] font-black leading-tight">{content.statement}</p>
        <p className="mt-1.5 text-[13px] leading-snug text-[#17130e]/75">
          {content.bodyPre}
          <Highlight color="green">{content.bodyHighlight}</Highlight>
          {content.bodyPost}
        </p>
        <p className="mt-4 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-[#17130e]/40">
          {content.tagline}
        </p>
      </div>
    </div>
  )
}
