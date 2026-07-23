import { headers } from 'next/headers';
import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { sections } from '@/config/sections';
import { docsRoute } from '@/lib/shared';
import type * as PageTree from 'fumadocs-core/page-tree';

// Build one tab per section from the single source of truth in sections.ts.
// meta.json can't import this (static JSON), so folder titles there are the
// only duplication — see src/config/sections.ts for the tradeoff note.
const tabOptions = sections.map((s) => ({
  url: s.key === '' ? docsRoute : `${docsRoute}/${s.key}`,
  icon: <s.icon className="size-4 shrink-0" />,
  title: s.label,
}));

export default async function Layout({ children }: LayoutProps<'/docs'>) {
  const pathname = (await headers()).get('x-pathname') ?? docsRoute;

  // Find which section is active. Empty-key (Overview) matches only the exact
  // /docs root; keyed sections match their prefix.
  const activeSection = sections.find((s) => {
    if (s.key === '') return pathname === docsRoute;
    return (
      pathname === `${docsRoute}/${s.key}` ||
      pathname.startsWith(`${docsRoute}/${s.key}/`)
    );
  });

  const fullTree = source.getPageTree();

  // Filter the sidebar tree to only the active section's content.
  const filteredChildren: PageTree.Node[] = (() => {
    if (!activeSection) return [];

    if (activeSection.key === '') {
      // Overview: show root-level pages that are NOT section root-folders.
      return fullTree.children.filter(
        (node) => !(node.type === 'folder' && (node as PageTree.Folder).root)
      );
    }

    // Keyed section: show only the matching root folder.
    return fullTree.children.filter(
      (node): node is PageTree.Folder =>
        node.type === 'folder' &&
        !!(node as PageTree.Folder).root &&
        !!((node as PageTree.Folder).index?.url ?? '').startsWith(
          `${docsRoute}/${activeSection.key}`
        )
    );
  })();

  const tree: PageTree.Root = { ...fullTree, children: filteredChildren };

  return (
    <DocsLayout tree={tree} tabs={tabOptions} {...baseOptions()}>
      {children}
    </DocsLayout>
  );
}
