import React from 'react';
import { clsx } from 'clsx';

interface ProgressBarProps {
  current: number;
  total: number;
  label?: string;
  showPercentage?: boolean;
  className?: string;
  barColor?: string;
}

export function ProgressBar({
  current,
  total,
  label,
  showPercentage = true,
  className,
  barColor = 'bg-[#00638E] text-white',
}: ProgressBarProps) {
  const percentage = total > 0 ? Math.min(100, Math.round((current / total) * 100)) : 0;

  return (
    <div className={clsx('w-full space-y-1.5', className)}>
      {(label || showPercentage) && (
        <div className="flex items-center justify-between text-xs font-mono text-[#82796A]">
          {label && <span className="font-medium text-[#1A1714]">{label}</span>}
          {showPercentage && (
            <span className="ml-auto">
              {current}/{total} <span className="text-[#82796A]/60">({percentage}%)</span>
            </span>
          )}
        </div>
      )}
      <div className="w-full h-2 bg-[#1A1714]/08 rounded-full overflow-hidden p-0.5">
        <div
          className={clsx('h-full rounded-full transition-all duration-700 ease-out', barColor)}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
