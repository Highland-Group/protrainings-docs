import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, projectStatus } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="flex items-center gap-2">
          {appName}
          <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900/30 dark:text-amber-400">
            {projectStatus}
          </span>
        </span>
      ),
    },
  };
}
