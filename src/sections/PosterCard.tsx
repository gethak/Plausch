import { PosterNote, PosterArrow, PosterOutcome, Highlight } from '../components/poster-ui'

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

/**
 * Shared poster shell — every poster (hallucinate, noclutter, private, notes,
 * humanitarian) renders through this same structure: headline, subhead with a
 * red-underlined caution word, a 2x2 grid of note tiles converging into a
 * green-circled outcome, a bold statement, a body sentence with a
 * green-underlined reassurance phrase, and a small tagline.
 */
export default function PosterCard({ content }: { content: PosterContent }) {
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
            <PosterNote key={i} rotate={tileRotations[i] ?? 0}>
              {tile}
            </PosterNote>
          ))}
        </div>
        <PosterArrow />
        <PosterOutcome>{content.outcome}</PosterOutcome>
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
