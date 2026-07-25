import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { sections } from '@/config/sections';
import { docsRoute } from '@/lib/shared';

const tabOptions = sections.map((s) => ({
  url: s.key === '' ? docsRoute : `${docsRoute}/${s.key}`,
  icon: <s.icon className="size-4 shrink-0" />,
  title: s.label,
}));

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout tree={source.getPageTree()} tabs={tabOptions} {...baseOptions()}>
      {children}
    </DocsLayout>
  );
}
