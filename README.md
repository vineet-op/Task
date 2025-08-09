## Real — Next.js App (App Router) with Tailwind v4

A simple landing-style site built with Next.js App Router, Tailwind CSS v4, Motion for animations, and TypeScript. The page composes modular sections: `Hero`, `Benefits`, `Case_Studies`, and `Footer`.

### Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Runtime**: React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4 with `@tailwindcss/postcss`
- **Animations**: `motion` (`motion/react`)
- **Linting**: ESLint (`next/core-web-vitals`, TypeScript)

### Project Structure

```
real/
  app/
    components/
      Benefits/Benefits.tsx
      Case_Studies/Case_Studies.tsx
      Footer/Footer.tsx
      Hero/Hero.tsx
    favicon.ico
    globals.css
    layout.tsx
    page.tsx
  public/
    appointment-02.png, zap.png, notebook.png, redline1.png, ...
  next.config.ts
  tsconfig.json
  eslint.config.mjs
  postcss.config.mjs
  package.json
  bun.lock
```

### Features

- **App Router** with a single page (`app/page.tsx`) composing multiple section components
- **Geist font** via `next/font` configured in `app/layout.tsx`
- **Tailwind v4** using the new `@theme inline` and CSS variables in `app/globals.css`
- **Declarative animations** via `motion/react` for fade/slide/hover effects

## Getting Started

### Prerequisites

- Node.js 20+ (LTS recommended)
- Any package manager: npm, pnpm, yarn, or bun

### Install

```bash
npm install
# or
pnpm install
# or
yarn
# or
bun install
```

### Develop

```bash
npm run dev
# or: pnpm dev | yarn dev | bun dev
```

Open `http://localhost:3000`.

### Build & Run

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Implementation Notes

### Styling

- Tailwind v4 is enabled via `@import "tailwindcss";` in `app/globals.css` and `@tailwindcss/postcss` in `postcss.config.mjs`.
- Color and font variables are defined in `:root` and surfaced into Tailwind with `@theme inline`.

### Components

- `Hero/Hero.tsx`: Intro/visual header section with SVG background effects.
- `Benefits/Benefits.tsx`: Three-card benefits grid with Motion animations and images from `public/`.
- `Case_Studies/Case_Studies.tsx`: Two-card case studies with animated headings and decorative underline image.
- `Footer/Footer.tsx`: CTA footer with subtle entrance animations.

### Configuration

- `app/layout.tsx`: Sets up fonts and global styles and defines base `metadata`.
- `next.config.ts`: Default config scaffold (no custom options set yet).
- `tsconfig.json`: Strict TS, `moduleResolution: bundler`, and an `@/*` path alias to project root.
- `eslint.config.mjs`: Uses `next/core-web-vitals` and TypeScript rules via Flat Config.
