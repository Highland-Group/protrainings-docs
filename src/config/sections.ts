import { BookOpen, Blocks, LayoutDashboard, Palette, Plug } from 'lucide-react';
import type { ComponentType } from 'react';

export interface Section {
  /** Folder name under content/docs/. Empty string = the /docs root itself (Overview). */
  key: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
}

/**
 * Single source of truth for the doc sections shown in the sidebar toggle.
 *
 * TRADEOFF — meta.json files cannot import this at build time (they are static
 * JSON), so "root": true and folder display labels in each meta.json are
 * maintained separately. When you rename a section, update BOTH this array
 * AND the corresponding meta.json "title" field.
 *
 * The Overview section (key: '') maps to /docs directly and has no meta.json
 * subfolder — it uses the root content/docs/index.mdx page.
 */
export const sections: Section[] = [
  { key: '', label: 'Get Started', icon: LayoutDashboard },
  { key: 'design-system', label: 'Design System', icon: Palette },
  { key: 'brand', label: 'Brand', icon: BookOpen },
  { key: 'composition', label: 'Composition', icon: Blocks },
  { key: 'integrations', label: 'Integrations', icon: Plug },
];
