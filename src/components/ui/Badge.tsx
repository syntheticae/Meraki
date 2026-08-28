import React from 'react';
import { clsx } from 'clsx';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'moss' | 'blue' | 'emerald' | 'outline';
  className?: string;
  size?: 'sm' | 'md';
}

export function Badge({ children, variant = 'default', className, size = 'sm' }: BadgeProps) {
  const sizeClasses = size === 'sm' ? 'text-[11px] px-2.5 py-0.5' : 'text-xs px-3 py-1';

  const variantClasses = {
    default: 'bg-[#1A1714]/05 text-[#1A1714] border border-[#1A1714]/10',
    accent: 'bg-[#C4502A]/10 text-[#C4502A] border border-[#C4502A]/20',
    moss: 'bg-[#5F6244]/10 text-[#5F6244] border border-[#5F6244]/20',
    blue: 'bg-blue-50 text-blue-700 border border-blue-200',
    emerald: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    outline: 'bg-transparent text-[#82796A] border border-[#1A1714]/15',
  }[variant];

  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 rounded-full font-mono text-[11px] uppercase tracking-wider font-medium select-none',
        sizeClasses,
        variantClasses,
        className
      )}
    >
      {children}
    </span>
  );
}
