import Link from 'next/link';
import { sections } from '@/config/sections';
import { docsRoute } from '@/lib/shared';

export default function HomePage() {
  return (
    <main className="flex flex-col flex-1 container max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight mb-3">Documentation</h1>
      <p className="text-fd-muted-foreground mb-10 text-lg">
        Choose a section to get started.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {sections.map((section) => {
          const href = section.key === '' ? docsRoute : `${docsRoute}/${section.key}`;
          const Icon = section.icon;
          return (
            <Link
              key={section.key || 'overview'}
              href={href}
              className="group flex items-start gap-4 rounded-xl border bg-fd-card p-5 transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
            >
              <div className="mt-0.5 shrink-0 rounded-lg border bg-fd-background p-2 group-hover:border-fd-primary/30">
                <Icon className="size-5 text-fd-muted-foreground group-hover:text-fd-primary" />
              </div>
              <div>
                <p className="font-semibold">{section.label}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
