import { useEffect, useState } from 'react';

/**
 * Keeps the dashboard feeling alive without requiring a backend.
 * The pulse value drives deterministic micro-fluctuations in the view model.
 */
export function useLiveUpdates(intervalMs = 8000) {
  const [pulse, setPulse] = useState(0);

  const syncNow = () => {
    setPulse((currentPulse) => currentPulse + 1);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      syncNow();
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [intervalMs]);

  return [pulse, syncNow];
}