'use client';

import { useEffect, useState } from 'react';

export default function OfflineAlert() {
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    // Check initial online status
    setIsOffline(!navigator.onLine);

    // Add event listeners for online/offline events
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Cleanup event listeners
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!isOffline) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded-md shadow-lg flex items-center gap-2">
    <span>No hay conexión a Internet</span>
    <button 
      onClick={() => window.location.reload()} 
      className="bg-white text-red-500 px-2 py-1 rounded text-sm"
    >
      Reintentar
    </button>
  </div>
  );
} 