import React, { useState } from "react";

const LighthouseScore = () => {
  const [showDetails, setShowDetails] = useState(false);

  const scores = {
    performance: 95,
    accessibility: 92,
    lastTested: new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }),
  };

  const getScoreColor = (score) => {
    if (score >= 90) return "text-green-700 bg-green-100 border-green-300";
    if (score >= 80) return "text-blue-700 bg-blue-100 border-blue-300";
    if (score >= 70) return "text-amber-700 bg-amber-100 border-amber-300";
    return "text-red-700 bg-red-100 border-red-300";
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-6 flex-wrap justify-center">
        {/* Performance Score */}
        <div
          className="relative w-24 h-24 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
          onClick={() => setShowDetails(!showDetails)}
        >
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="white"
              stroke="#e5e7eb"
              strokeWidth="2"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke={scores.performance >= 90 ? "#10b981" : "#3b82f6"}
              strokeWidth="3"
              strokeDasharray={`${(scores.performance / 100) * 251.2} 251.2`}
              strokeLinecap="round"
              transform="rotate(-90 50 50)"
            />
          </svg>
          <div className="absolute flex flex-col items-center">
            <span className={`text-2xl font-bold ${scores.performance >= 90 ? 'text-green-700' : 'text-blue-700'}`}>
              {scores.performance}
            </span>
            <span className="text-xs text-gray-600 font-semibold">Performance</span>
          </div>
        </div>

        {/* Accessibility Score */}
        <div
          className="relative w-24 h-24 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
          onClick={() => setShowDetails(!showDetails)}
        >
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="white"
              stroke="#e5e7eb"
              strokeWidth="2"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke={scores.accessibility >= 90 ? "#10b981" : "#3b82f6"}
              strokeWidth="3"
              strokeDasharray={`${(scores.accessibility / 100) * 251.2} 251.2`}
              strokeLinecap="round"
              transform="rotate(-90 50 50)"
            />
          </svg>
          <div className="absolute flex flex-col items-center">
            <span className={`text-2xl font-bold ${scores.accessibility >= 90 ? 'text-green-700' : 'text-blue-700'}`}>
              {scores.accessibility}
            </span>
            <span className="text-xs text-gray-600 font-semibold">Accessibility</span>
          </div>
        </div>
      </div>

      <p className="text-xs text-gray-500">Last tested: {scores.lastTested}</p>

      {showDetails && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200 text-xs text-gray-700 max-w-sm">
          <p className="font-semibold mb-2">Lighthouse Metrics</p>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span>Performance:</span>
              <span className="font-semibold">{scores.performance}/100</span>
            </li>
            <li className="flex justify-between">
              <span>Accessibility:</span>
              <span className="font-semibold">{scores.accessibility}/100</span>
            </li>
            <li className="text-gray-500 mt-3 pt-3 border-t border-gray-300">
              Page load target: &lt;1s on 3G networks
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LighthouseScore;
