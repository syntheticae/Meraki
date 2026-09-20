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
    default: 'bg-[#F1F5F9] dark:bg-white/10 text-[#0F172A] dark:text-white border border-[#CBD5E1] dark:border-white/10 font-semibold',
    accent: 'bg-[#00638E]/10 dark:bg-[#00638E]/20 text-[#00638E] dark:text-[#8CB9CC] border border-[#00638E]/30 font-bold',
    moss: 'bg-[#004A6B]/10 dark:bg-[#004A6B]/20 text-[#004A6B] dark:text-[#BFD8E3] border border-[#004A6B]/30 font-bold',
    blue: 'bg-[#00638E]/10 text-[#00638E] dark:text-[#8CB9CC] border border-[#00638E]/30 font-bold',
    emerald: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-bold',
    outline: 'bg-transparent text-[#0F172A] dark:text-[#BFD8E3] border border-[#CBD5E1] dark:border-white/15 font-semibold',
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
