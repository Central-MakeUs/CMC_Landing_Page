import Image from 'next/image'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface StackedCardItem {
  id: string | number
  image: string
  imageAlt?: string
  title: string
  description: string
}

export interface StackedCardListProps {
  items: StackedCardItem[]
  /** 카드 너비 (px). 이미지 정사각형 크기도 이 값을 기준으로 결정됨. 기본값 280 */
  cardWidth?: number
  /** 다음 카드의 시작 오프셋 (px). 기본값 200 */
  overlapOffset?: number
  className?: string
}

// ─── 고정 높이 상수 (cardWidth=280 기준) ─────────────────────────────────────
//  padding-top       16px  (p-4)
//  image             248px (cardWidth - 2*16)
//  gap               12px  (mt-3)
//  title             24px  (text-base × leading-6)
//  gap               8px   (mt-2)
//  description 2줄   40px  (text-sm × leading-5 × 2)
//  padding-bottom    16px  (p-4)
//  ─────────────────────────────────────
//  total             364px

const CARD_PADDING = 16
const GAP_IMAGE_TEXT = 12   // mt-3
const TITLE_LINE_HEIGHT = 24 // text-base(16px) × leading-6(1.5)
const GAP_TITLE_DESC = 8    // mt-2
const DESC_LINE_HEIGHT = 20  // text-sm(14px) × leading-5(1.25)
const DESC_LINES = 2

/** cardWidth 기반으로 고정 높이를 계산 */
function calcCardHeight(cardWidth: number): number {
  const imageSize = cardWidth - CARD_PADDING * 2
  return (
    CARD_PADDING +
    imageSize +
    GAP_IMAGE_TEXT +
    TITLE_LINE_HEIGHT +
    GAP_TITLE_DESC +
    DESC_LINE_HEIGHT * DESC_LINES +
    CARD_PADDING
  )
}

// ─── StackedCard ──────────────────────────────────────────────────────────────

interface StackedCardProps {
  item: StackedCardItem
  cardWidth: number
  cardHeight: number
}

function StackedCard({ item, cardWidth, cardHeight }: StackedCardProps) {
  const imageSize = cardWidth - CARD_PADDING * 2

  return (
    <div
      className="flex flex-col rounded-[20px] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.08)] transition-transform duration-300 ease-out hover:-translate-y-2"
      style={{
        width: cardWidth,
        height: cardHeight,
        padding: CARD_PADDING,
        background: 'linear-gradient(160deg, #1a1d27 0%, #12141e 100%)',
        willChange: 'transform',
      }}
    >
      {/* 이미지: 정사각형 고정 (aspect-ratio 1/1, object-fit cover) */}
      <div
        className="relative flex-shrink-0 overflow-hidden rounded-[12px] bg-gray-800"
        style={{ width: imageSize, height: imageSize }}
      >
        <Image
          src={item.image}
          alt={item.imageAlt ?? item.title}
          fill
          sizes={`${imageSize}px`}
          className="object-cover"
        />
      </div>

      {/* 텍스트 영역 */}
      <div style={{ marginTop: GAP_IMAGE_TEXT }}>
        {/* 제목: 1줄, 말줄임 */}
        <p
          className="truncate font-semibold text-white"
          style={{ fontSize: 16, lineHeight: `${TITLE_LINE_HEIGHT}px` }}
        >
          {item.title}
        </p>

        {/* 설명: 최대 2줄, 말줄임 */}
        <p
          className="line-clamp-2 text-white/50"
          style={{
            marginTop: GAP_TITLE_DESC,
            fontSize: 14,
            lineHeight: `${DESC_LINE_HEIGHT}px`,
          }}
        >
          {item.description}
        </p>
      </div>
    </div>
  )
}

// ─── StackedCardList ──────────────────────────────────────────────────────────

export default function StackedCardList({
  items,
  cardWidth = 280,
  overlapOffset = 200,
  className = '',
}: StackedCardListProps) {
  if (items.length === 0) return null

  const cardHeight = calcCardHeight(cardWidth)
  // 전체 스트립 너비: 첫 카드 + 나머지 카드들의 노출 부분
  const stripWidth = cardWidth + (items.length - 1) * overlapOffset

  return (
    /* 가로 스크롤 컨테이너 */
    <div className={`overflow-x-auto [scrollbar-width:thin] ${className}`}>
      {/* 겹침 카드 스트립 */}
      <div className="relative" style={{ width: stripWidth, height: cardHeight }}>
        {items.map((item, i) => (
          <div
            key={item.id}
            className="absolute top-0"
            style={{
              left: i * overlapOffset,
              // 나중 카드가 이전 카드 위에 쌓임
              zIndex: i + 1,
            }}
          >
            <StackedCard item={item} cardWidth={cardWidth} cardHeight={cardHeight} />
          </div>
        ))}
      </div>
    </div>
  )
}
