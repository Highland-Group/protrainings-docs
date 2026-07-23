# docs-site-template

A clonable documentation site template built with Next.js, Fumadocs, Tailwind CSS v4, and shadcn/ui (Base UI).

## Stack

- **Next.js** App Router with TypeScript and `src/` directory
- **Fumadocs** (`fumadocs-mdx`) for docs content
- **Tailwind CSS v4** with CSS-first `@theme` configuration
- **shadcn/ui** with Base UI primitives (not Radix)
- **pnpm** as package manager

## Getting started

```bash
pnpm dev
```

Open http://localhost:3000 with your browser to see the result.

## Structure

| Path | Description |
| ---- | ----------- |
| `src/config/sections.ts` | **Single source of truth** for doc sections — edit here to rename/add/remove sections. |
| `content/docs/design-system/` | Design System section content. |
| `content/docs/brand/` | Brand section content. |
| `content/docs/integrations/` | Integrations section content. |
| `src/app/docs/layout.tsx` | Docs layout with sidebar section switcher (`SidebarTabsDropdown`). |
| `src/lib/source.ts` | Content source adapter (`loader()`). |
| `source.config.ts` | Fumadocs MDX config with extended Zod frontmatter schema. |

## Customizing sections

Edit `src/config/sections.ts` to rename or add sections. Each entry needs:
- `key` — matches the folder name under `content/docs/`
- `label` — display name in the sidebar switcher
- `icon` — Lucide icon component

Also update the corresponding `meta.json` `"title"` field to match (see the tradeoff note in `sections.ts`).

## Frontmatter schema

All doc pages accept:

```yaml
---
title: Page Title
owner: drew    # or: chris
status: draft  # or: reviewed, locked
---
```

`owner` and `status` default to `drew` and `draft` respectively. Invalid values cause a build error.

## Learn more

- [Fumadocs](https://fumadocs.dev)
- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui](https://ui.shadcn.com)
