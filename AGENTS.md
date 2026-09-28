<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

<!--
  위 블록은 Next.js가 관리한다. 블록 안은 수정하지 않는다. (next dev가 원래 내용으로 되돌린다)
  팀 규칙은 이 아래에만 쓴다. CLAUDE.md는 `@AGENTS.md` 한 줄로 이 파일을 가리킨다. 규칙은 여기 한 곳에만 둔다.
-->

# CMC Homepage

CMC 공식 홈페이지(`cmc.neordinary.com`)다. 페이지 5개짜리 정적 사이트이고, Figma 시안을 퍼블리싱하면서 SEO와 성능을 챙기는 것이 주 작업이다.
사람용 안내(설치, 자산 업로드 규칙, 배포, 인수인계)는 [README.md](./README.md)에 있다. 여기에는 코드를 쓸 때 지킬 규칙만 둔다.

## Commands

```bash
pnpm dev            # 개발 서버
pnpm lint           # ESLint
pnpm lint:fix
pnpm typecheck      # next typegen + tsc --noEmit
pnpm build          # 프로덕션 빌드
pnpm format         # Prettier 쓰기
pnpm format:check
```

- 패키지 매니저는 **pnpm만** 쓴다(`packageManager`로 고정). `npm`, `yarn` 명령을 쓰지 않는다.
- 테스트 스크립트는 **없다.** 작업을 마치면 `pnpm lint` → `pnpm typecheck` → `pnpm build`를 각각 실행한다.

## 폴더 구조

| 경로                      | 용도                                                                        |
| ------------------------- | --------------------------------------------------------------------------- |
| `src/app`                 | 라우트, layout, `sitemap.ts`, `robots.ts`, `opengraph-image`, `not-found`   |
| `src/components/common`   | 여러 페이지에서 쓰는 UI (Button, Tab, Header, Footer 등)                    |
| `src/components/{domain}` | 한 페이지에서만 쓰는 컴포넌트 (`home`, `project`, `recruit`, `apply`)       |
| `src/constants`           | 카피, 링크, 데이터                                                          |
| `src/hooks`               | 클라이언트 훅                                                               |
| `src/lib`                 | `site.ts`(도메인, 경로 등 사이트 상수), `metadata.ts`(페이지 metadata 헬퍼) |
| `src/utils`               | `cn()` 등 유틸                                                              |
| `src/assets/images`       | 정적 import 이미지                                                          |
| `public/videos`           | Hero 영상과 poster                                                          |

컴포넌트 위치를 정할 때는 이유를 함께 밝힌다. 두 페이지 이상에서 쓰이면 `common`으로 올린다.

## URI 계약

경로는 기존 웹과 같게 유지한다: `/`, `/project`, `/recruit`, `/apply`. (`/faq`는 20기 리브랜딩에서 제거했다)
경로 추가·변경은 `src/lib/site.ts`의 `ROUTES`에서만 한다. sitemap도 이 값을 쓴다. 내부 링크도 `ROUTES`를 쓴다.

## 서버 / 클라이언트 컴포넌트

- 기본은 Server Component다.
- `'use client'`는 상태, 브라우저 API, `motion`, `lenis`가 필요한 **가장 작은 컴포넌트**에만 붙인다. 페이지 전체를 클라이언트로 만들지 않는다.
- 검색에 노출돼야 하는 카피를 클라이언트에서만 렌더링하지 않는다(`dynamic(..., { ssr: false })`, 클라이언트 fetch 금지). 초기 HTML에 있어야 한다.

## SEO

- 페이지 metadata는 **반드시 `createPageMetadata`**(`src/lib/metadata.ts`)로 만든다. title, description, canonical, OG가 한 번에 채워진다.
- `next/head`를 쓰지 않는다.
- 페이지당 `<h1>` 하나, 제목 레벨은 순서대로 쓴다.
- 내용이 있는 이미지는 설명하는 `alt`, 장식 이미지는 `alt=""`.
- 구조화 데이터(JSON-LD)는 화면에 실제로 보이는 내용만 담는다.

## 이미지 · 영상

- `next/image`를 쓰고, 가능하면 `src/assets/images`에서 정적 import한다.
- `fill`이나 반응형 CSS를 쓰면 `sizes`를 반드시 준다.
- 페이지의 LCP 이미지 **하나에만** `fetchPriority="high"`(또는 `preload`)를 준다. `priority`는 Next 16에서 deprecated다.
- 데스크톱/모바일 이미지가 다르면 `getImageProps` + `<picture>`를 쓴다. 두 장을 렌더링하고 CSS로 숨기지 않는다. (둘 다 다운로드된다)
- `unoptimized`는 SVG처럼 이유가 있을 때만 쓰고 주석으로 이유를 남긴다.
- 배경 영상은 네이티브 `<video autoPlay muted loop playsInline poster>`와 모바일용 `<source media>`로 만든다. `prefers-reduced-motion`이면 멈춘다.
- 용량 기준과 인코딩 명령은 README의 "이미지·영상 업로드 규칙"을 따른다.

## 스타일링

- Tailwind CSS를 쓴다. 인라인 `style` 대신 arbitrary value를 쓴다(`bg-[linear-gradient(154deg,#a3b1ff_0%,#2b42c7_100%)]`, `[property:value]`).
  예외: Tailwind를 쓸 수 없는 `ImageResponse`(OG 이미지).
- 클래스 합치기는 `cn()`(`src/utils/cn.ts`), variant는 cva를 쓴다.
- 한 파일에서 두 번 이상 쓰는 클래스 문자열은 `const`로 뺀다.
- 색과 폰트는 `src/app/globals.css`의 토큰을 쓴다. 토큰에 없는 값을 새 토큰처럼 추가하지 않는다. 필요하면 먼저 확인을 받는다.

## 디자인 소스

- 수치(간격, 크기, 색, 타이포)는 **Figma Dev Mode 또는 토큰**에서 가져온다. PNG 캡처를 재서 `gap-[29px]` 같은 값을 만들지 않는다.
- **Figma MCP가 생성한 코드를 그대로 붙여넣지 않는다.** 원시 hex 값을 박고 `cn()`과 공용 컴포넌트를 무시한다. 시안에 무엇이 있는지 읽는 용도로만 쓰고, 구현은 우리 컴포넌트와 토큰으로 한다.
- 시안에 정의되지 않은 동작은 추측하지 않는다. 가정했다면 명시한다.

## 네이밍 · export

- 컴포넌트는 PascalCase, 파일명은 컴포넌트 이름과 같다.
- 컴포넌트는 default export, 폴더의 `index.ts`에서 named export로 다시 내보낸다.

```ts
// Button.tsx
export default function Button() {}

// index.ts
export { default as Button } from './Button'
```

## 함정 목록

1. **페이지에서 `openGraph`를 직접 쓰면 OG 이미지가 사라진다.** 하위 세그먼트의 `openGraph`는 부모와 병합되지 않고 통째로 교체돼서, 루트 `opengraph-image`도 같이 빠진다. 그래서 `createPageMetadata`를 쓴다.
2. **`reference/`는 이전 기수 레포(19기) 사본이다.** 읽기 전용이고 import하지 않는다. 필요한 코드는 복사해서 이 프로젝트 규칙에 맞게 고친다. `.gitignore`와 `tsconfig.json` 검사 대상에서 빠져 있다.
3. **TypeScript 6, ESLint 9는 일부러 고정했다.** `eslint-config-next`가 TS 7과 ESLint 10을 지원하기 전에는 올리지 않는다(README 참고).
4. **Next.js API는 학습 데이터와 다를 수 있다.** 확신이 없으면 `node_modules/next/dist/docs/`를 먼저 읽는다.
5. **Pretendard는 CDN의 dynamic subset을 쓴다**(`src/app/layout.tsx`). 한글 전체 woff2(2MB 이상)를 직접 넣지 않는다.

## Git

- 커밋과 push는 사용자가 요청할 때만 한다.
- 커밋 메시지는 Conventional Commits + 한국어로 쓴다. 예: `feat(home): Hero 영상 섹션 추가 (#12)`
- 브랜치는 `type/#이슈번호/설명`으로 만든다. 예: `feat/#12/hero-video`.
- 작업 PR은 `dev`로 올린다. `dev`는 QA용 Preview, `main`은 Production(`cmc.neordinary.com`)이다. `main`에는 QA를 마친 `dev`만 머지한다.
- 커밋 시 husky가 lint-staged(ESLint + Prettier)를 실행한다. 훅을 건너뛰지 않는다(`--no-verify` 금지).
