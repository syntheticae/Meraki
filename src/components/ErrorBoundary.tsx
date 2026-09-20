'use client';

import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface ErrorBoundaryState {
  hasError: boolean;
  errorMessage: string;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallbackTabId?: string;
  onReset?: () => void;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('[Meraki ErrorBoundary]', error, info.componentStack);
  }

  handleReset = () => {
    this.setState({ hasError: false, errorMessage: '' });
    this.props.onReset?.();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[40vh] flex items-center justify-center p-6">
          <div className="max-w-sm w-full p-6 rounded-3xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 shadow-xs space-y-4 text-center">
            <div className="w-12 h-12 rounded-2xl bg-black/5 dark:bg-white/5 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-6 h-6 text-[#00638E] dark:text-[#8CB9CC]" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-[#0F172A] dark:text-white">
                Terjadi Kesalahan
              </h3>
              <p className="text-xs text-[#475569] dark:text-[#7A8992] mt-1 leading-relaxed">
                Komponen ini mengalami error dan tidak dapat ditampilkan. Data kamu aman.
              </p>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={this.handleReset}
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#00638E] text-white text-xs font-mono font-bold hover:bg-[#004A6B] transition-all cursor-pointer shadow-xs"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Muat Ulang</span>
              </button>
              <button
                type="button"
                onClick={() => window.location.replace('/')}
                className="flex-1 py-2.5 rounded-xl bg-[#F1F5F9] dark:bg-[#1C1C1C] text-xs font-mono text-[#0F172A] dark:text-white hover:bg-[#E2E8F0] border border-[#CBD5E1] dark:border-white/10 transition-all cursor-pointer font-semibold shadow-2xs"
              >
                Ke Dashboard
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
