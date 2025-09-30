'use client';

import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { cn } from '@/lib/utils';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const themes = [
    { value: 'light', icon: Sun, label: 'Light' },
    { value: 'dark', icon: Moon, label: 'Dark' },
    { value: 'system', icon: Monitor, label: 'System' },
  ] as const;

  return (
    <div className="flex items-center gap-2 bg-glass-bg backdrop-blur-md border border-glass-border rounded-lg p-1">
      {themes.map(({ value, icon: Icon, label }) => (
        <button
          key={value}
          onClick={() => setTheme(value as any)}
          className={cn(
            "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200",
            theme === value
              ? "bg-primary text-white shadow-md"
              : "text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-100 dark:hover:bg-gray-800"
          )}
          aria-label={`Switch to ${label} theme`}
        >
          <Icon size={16} />
          <span className="hidden sm:inline">{label}</span>
        </button>
      ))}
    </div>
  );
}

