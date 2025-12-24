'use client';

import { useEffect, useState } from 'react';
import { storage } from '@/lib/storage';

export default function VisitCounter() {
  const [visits, setVisits] = useState<number | null>(null);

  useEffect(() => {
    // Use client-side storage for GitHub Pages
    const count = storage.getVisits();
    setVisits(count);
  }, []);

  if (visits === null) {
    return (
      <div className="text-sm text-gray-500">
        Loading visits...
      </div>
    );
  }

  return (
    <div className="text-sm text-gray-500">
      <span className="font-medium text-[#87a96b]">{visits.toLocaleString()}</span> visitors
    </div>
  );
}

