# CMC Homepage

CMC 공식 홈페이지 [cmc.neordinary.com](https://cmc.neordinary.com)의 프론트엔드 저장소입니다.
20기 리브랜딩을 시작으로 기존 [CMC_Landing_Page](https://github.com/Central-MakeUs/CMC_Landing_Page)를 대체합니다.

## 기술 스택

| 구분         | 사용 기술                                         |
| ------------ | ------------------------------------------------- |
| Framework    | Next.js 16.3 (App Router), React 19, TypeScript 6 |
| Styling      | Tailwind CSS 4, class-variance-authority          |
| Animation    | Motion, Lenis                                     |
| Code quality | ESLint 9, Prettier, Husky, lint-staged            |
| Deployment   | Vercel                                            |

Node.js는 24, 패키지 매니저는 pnpm 10을 사용합니다. TypeScript와 ESLint는 `eslint-config-next`와 호환되는 버전으로 고정했으므로 업그레이드할 때 함께 확인해 주세요.

## 로컬 실행

Node.js 버전은 `.nvmrc`에 맞춥니다. nvm을 사용하지 않는다면 Node.js 24를 직접 설치해 주세요.

```bash
nvm use
corepack enable
pnpm install
pnpm dev
```

개발 서버는 [http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

## 스크립트

| 명령                                | 설명                  |
| ----------------------------------- | --------------------- |
| `pnpm dev`                          | 개발 서버 실행        |
| `pnpm build`                        | 프로덕션 빌드         |
| `pnpm lint` / `pnpm lint:fix`       | ESLint 검사 및 수정   |
| `pnpm format` / `pnpm format:check` | Prettier 적용 및 검사 |
| `pnpm typecheck`                    | TypeScript 타입 검사  |

커밋할 때 스테이징된 파일에 ESLint와 Prettier가 자동으로 실행됩니다. PR을 올리기 전에는 아래 명령을 모두 확인해 주세요.

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## 코드 규칙

폴더 구조와 컴포넌트 작성법, SEO, 이미지, 스타일, Git 규칙은 [AGENTS.md](./AGENTS.md)를 확인해 주세요.

## 이미지와 영상

- PNG, MOV 등의 원본은 Figma나 드라이브에 보관합니다.
- 저장소에는 최적화한 파일만 올립니다.
- 이미지는 WebP를 기본으로 사용하고 표시 크기의 2배를 넘기지 않습니다.
- SVG는 커밋 전에 SVGO로 최적화합니다.
- Hero 영상은 H.264 MP4로 인코딩하고 오디오를 제거합니다.

| 파일            | 권장 최대 용량      |
| --------------- | ------------------- |
| Hero poster     | PC 400KB / MO 200KB |
| 섹션 이미지     | 200KB               |
| 프로젝트 썸네일 | 150KB               |
| OG 이미지       | 500KB               |
| Hero 영상       | PC 4MB / MO 2MB     |

Hero 영상 인코딩 예시입니다.

```bash
# Desktop: 1920px
ffmpeg -i source.mov -an -c:v libx264 -preset slow -crf 26 -pix_fmt yuv420p \
  -vf "scale=1920:-2,fps=30" -movflags +faststart public/videos/hero.mp4

# Mobile: 720px
ffmpeg -i source.mov -an -c:v libx264 -preset slow -crf 28 -pix_fmt yuv420p \
  -vf "scale=720:-2,fps=30" -movflags +faststart public/videos/hero-mobile.mp4

# Poster
ffmpeg -i public/videos/hero.mp4 -frames:v 1 -c:v libwebp -quality 80 public/videos/hero-poster.webp
```

## 배포

| 브랜치            | 환경       | 용도                                     |
| ----------------- | ---------- | ---------------------------------------- |
| `main`            | Production | `cmc.neordinary.com` 배포                |
| `dev`             | Preview    | 통합 QA                                  |
| `feat/#이슈/설명` | Preview    | 기능 개발. 작업이 끝나면 `dev`로 PR 생성 |

- `main`에는 QA를 마친 `dev`만 머지합니다.
- Preview 배포는 Vercel이 `X-Robots-Tag: noindex`를 적용합니다.
- Production 도메인의 DNS는 너디너리 Head Lead가 관리합니다.

## 인수인계

담당자가 바뀔 때 아래 항목의 권한도 함께 이전합니다.

| 항목                | 현재 담당                   |
| ------------------- | --------------------------- |
| GitHub 저장소       | Central-MakeUs/CMC_Homepage |
| Vercel 프로젝트     | (배포 담당 리드 기입)       |
| 도메인 DNS          | 너디너리 Head Lead          |
| GA / Search Console | (확정 후 기입)              |
