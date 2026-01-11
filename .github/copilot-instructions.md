# Config Builder - Copilot Instructions

## Project Overview

เว็บแอป React + TypeScript สำหรับ generate config files (Prettier, ESLint, Gitignore) สำหรับ frameworks ต่างๆ ด้วย UI ที่ใช้งานง่าย

**Tech Stack:** React 19, TypeScript, Vite 7, Tailwind CSS 4, Radix UI, class-variance-authority (CVA)

## Architecture

### Data Flow

```
FRAMEWORKS (constants) → UseBuilder (hook) → App.tsx → Components
```

- **State Management:** ใช้ `useState` + `useCallback` ใน hook `UseBuilder` แบบ centralized
- **Framework Configs:** อยู่ใน [src/constants/frameworks.constants.ts](src/constants/frameworks.constants.ts) - แต่ละ framework มี presets สำหรับ Prettier, ESLint, gitignore

### Folder Structure Conventions

```
src/
├── components/          # React components
│   └── ui/              # Reusable UI (Radix-based)
│       ├── *.tsx        # Component implementation
│       └── *.variants.ts # CVA variants (separated)
├── constants/           # Static configs, framework presets
├── hooks/               # Custom hooks (prefixed with use-)
├── types/               # TypeScript interfaces & types
└── utils/               # Utility functions
```

## Naming Conventions (CRITICAL)

### Case Styles

| Type                            | Style        | Example                                                  |
| ------------------------------- | ------------ | -------------------------------------------------------- |
| Functions, Components, Handlers | `PascalCase` | `UseBuilder`, `HandleClick`, `SelectFramework`           |
| Variables, Props, State         | `snake_case` | `selected_framework`, `output_format`, `custom_patterns` |
| Constants                       | `UPPER_CASE` | `FRAMEWORKS`, `DEFAULT_PRETTIER_CONFIG`                  |
| Files, Folders                  | `kebab-case` | `use-builder.ts`, `framework-selector.tsx`               |

### UI Component Pattern

แยก variants ออกจาก component ไฟล์:

```tsx
// button.variants.ts
export const BUTTON_VARIANTS = cva("...", { variants: { ... } });

// button.tsx
import { BUTTON_VARIANTS } from './button.variants';
function Button({ variant, size, ...props }) {
  return <button className={Cn(BUTTON_VARIANTS({ variant, size }))} {...props} />;
}
```

## Key Files

| File                                                                           | Purpose                                               |
| ------------------------------------------------------------------------------ | ----------------------------------------------------- |
| [src/hooks/use-builder.ts](src/hooks/use-builder.ts)                           | Main state logic, output generators                   |
| [src/constants/frameworks.constants.ts](src/constants/frameworks.constants.ts) | Framework configs (Prettier, ESLint, ignore patterns) |
| [src/types/builder.interfaces.ts](src/types/builder.interfaces.ts)             | Core state interfaces                                 |
| [src/utils/cn.utils.ts](src/utils/cn.utils.ts)                                 | Tailwind class merging utility                        |

## Adding New Framework

1. เพิ่ม icon ใน [src/types/builder.types.ts](src/types/builder.types.ts) → `FrameworkIconId`
2. เพิ่ม SVG ใน [src/components/framework-icons.tsx](src/components/framework-icons.tsx)
3. เพิ่ม config ใน `FRAMEWORKS` array ที่ [src/constants/frameworks.constants.ts](src/constants/frameworks.constants.ts)

## Commands

```bash
npm run dev      # Start dev server (Vite)
npm run build    # TypeScript check + Vite build
npm run lint     # ESLint with auto-fix
npm run format   # Prettier format
```

## Import Alias

ใช้ `@/` สำหรับ absolute imports จาก `src/`:

```tsx
import { UseBuilder } from '@/hooks/use-builder';
import type { BuilderState } from '@/types';
```

## Barrel Exports

ใช้ `index.ts` สำหรับ re-export ใน `types/` และ `constants/`:

```tsx
// ✅ Good
import { FRAMEWORKS, DEFAULT_PRETTIER_CONFIG } from '@/constants';
import type { BuilderState, OutputFormat } from '@/types';
```
