"use client";

import { useEffect } from 'react';

export default function DevErrorGuard() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;

    const onError = (ev: ErrorEvent) => {
      try {
        const msg = ev?.message || (ev?.error && ev.error.message) || '';
        if (typeof msg === 'string' && msg.includes('removeChild')) {
          ev.preventDefault();
        }
      } catch {
        // ignore
      }
    };

    window.addEventListener('error', onError as EventListener);
    return () => window.removeEventListener('error', onError as EventListener);
  }, []);

  return null;
}
