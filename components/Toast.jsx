import React, { useEffect } from 'react';

export default function Toast({ message, type = 'success', onClose, duration = 3000 }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const styles = {
    success: 'border-cyan-500 bg-cyan-500/10 text-cyan-400',
    error: 'border-pink-600 bg-pink-600/10 text-pink-500',
    warning: 'border-yellow-500 bg-yellow-500/10 text-yellow-400',
    info: 'border-blue-500 bg-blue-500/10 text-blue-400'
  };

  const icons = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ'
  };

  return (
    <div className={`fixed top-24 right-6 z-50 border-2 rounded-lg p-4 backdrop-blur-lg shadow-2xl animate-slide-in-right ${styles[type]} max-w-md`}>
      <div className="flex items-center gap-3">
        <span className="text-2xl">{icons[type]}</span>
        <p className="font-mono text-sm">{message}</p>
        <button
          onClick={onClose}
          className="ml-auto text-gray-400 hover:text-white transition"
        >
          ✕
        </button>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 rounded-b-lg overflow-hidden">
        <div
          className={`h-full ${type === 'success' ? 'bg-cyan-500' : type === 'error' ? 'bg-pink-600' : 'bg-yellow-500'}`}
          style={{
            animation: `shrink ${duration}ms linear forwards`
          }}
        ></div>
      </div>

      <style jsx>{`
        @keyframes shrink {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>
    </div>
  );
}
