'use client';

import { useEffect } from 'react';
import { storage } from '@/lib/storage';

export default function VisitTracker() {
  useEffect(() => {
    // Track visit on page load using client-side storage
    storage.incrementVisits();
  }, []);

  return null;
}

