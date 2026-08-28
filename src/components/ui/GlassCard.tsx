import React from 'react';
import { clsx } from 'clsx';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  padded?: 'none' | 'sm' | 'md' | 'lg';
  glowColor?: string;
}

export function GlassCard({
  children,
  className,
  hoverEffect = false,
  padded = 'md',
  glowColor,
  ...props
}: GlassCardProps) {
  const paddingMap = {
    none: 'p-0',
    sm: 'p-4 sm:p-5',
    md: 'p-6 sm:p-7',
    lg: 'p-8 sm:p-10',
  }[padded];

  return (
    <div
      className={clsx(
        'glass-panel rounded-2xl relative overflow-hidden transition-all duration-300',
        hoverEffect && 'glass-panel-hover',
        paddingMap,
        className
      )}
      style={
        glowColor
          ? {
              backgroundImage: `radial-gradient(circle at 95% 5%, ${glowColor} 0%, transparent 60%)`,
            }
          : undefined
      }
      {...props}
    >
      {children}
    </div>
  );
}
